import {Component, OnInit} from '@angular/core';
import {
    AppleSignInErrorResponse,
    AppleSignInResponse,
    ASAuthorizationAppleIDRequest,
    SignInWithApple
} from "@ionic-native/sign-in-with-apple/ngx";
import {Facebook, FacebookLoginResponse} from "@ionic-native/facebook/ngx";
import {Plugins} from "@capacitor/core";
import {UserService} from "../../services/user.service";
import {SignInType, PUser} from "../../services/test.definition";

@Component({
    selector: 'app-signin',
    templateUrl: './signin-page.component.html',
    styleUrls: ['./signin-page.component.scss'],
})
export class SigninPage implements OnInit {
    state: LoginState;
    user: PUser;
    nickName: string; //ngmodel

    constructor(private signInWithApple: SignInWithApple,
                private fb: Facebook, private userService: UserService) {
    }

    ngOnInit() {
        //if the user is in the local storage it will never be required to log in with facebook apple google
        if (this.userService.isLoggedIn()) {
            alert("Not sure why I'm here - i'm logged ");
            this.changeState(LoginState.DisplayUser);
        } else {
            this.user = this.userService.getUser();
        }
        if (this.user?.nickName) {
            this.changeState(LoginState.ChooseNickName)
        }
        this.changeState(LoginState.Login3rdParty);
    }

    changeState(newState: LoginState) {
        this.state = newState;
    }

    getUser(): PUser {
        if (this.user != null) {
            this.user = new PUser();
        }
        return this.user;
    }

    submitNickName() {
        console.log("submitNickName() nickName="+this.nickName);
        this.user.nickName = this.nickName;
        console.log("submitNickName()user send for saving ="+JSON.stringify(this.user));
        this.userService.persistUser(this.user).catch(err =>{
            console.error(err);
            alert(err)
        }).then(u=>{
            this.changeState(LoginState.DisplayUser);
        });
    }

    /**
     * after google apple or facebook sign in user is checked against the database
     * @param user
     */
    success3rdPartyLogin(user: PUser) {
        this.user = user;
        const signTypeType = this.user.lastSignInType;

        console.log("user received from 3rd party ="+JSON.stringify(user));
        //ps server check  is the user valid and new or old
        this.userService.httpCheckUserExist(user).then(serverUser => {
            console.log("type of user from http exists "+typeof serverUser);
            console.log("user database user exist  ="+JSON.stringify(serverUser));
            if (serverUser != null && serverUser.id != null) {
                this.user = new PUser();
                this.user.createUser(serverUser,user);
                console.log("merged user user exist and 3rd party ="+JSON.stringify(this.user));
            }
            else{
                this.user =user;
            }
            this.nickName = this.user.nickName??undefined;
            this.changeState( LoginState.ChooseNickName);
        }).catch(err => {
            console.error(err);
            alert(err);
        })

    }


    async googleSignup() {
        const googleUser = await Plugins.GoogleAuth.signIn() as any;

        let user: PUser = new PUser();

        user.email = googleUser && googleUser.email;
        user.name = googleUser && googleUser.name;
        user.googleId = googleUser && googleUser.id;
        user.imgLink = googleUser && googleUser.imageURL;
        user.lastSignInType = SignInType.Google;
        console.log(googleUser);

        this.success3rdPartyLogin(user);

    }

    loginWithFacebook() {

        this.fb.login(['email', 'public_profile']).then((response: FacebookLoginResponse) => {
            this.fb.api('me?fields=id,name,email,last_name,short_name,gender,first_name,picture.as(picture_large)', []).then(profile => {
                let user: PUser = new PUser();
                user.facebookId = response.authResponse.userID;
                user.name = profile["name"];
                user.gender = profile["gender"];
                user.lastSignInType = SignInType.Facebook;
                user.email = profile["email"]
                console.log(profile);

                this.success3rdPartyLogin(user);
            }).catch(e => console.error("Error getting user profile", e));
        }).catch(e => console.error("Error login to facebook", e));
        // this.fb.getAccessToken();

        this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
    }

    loginWithApple() {
        this.signInWithApple.signin({
            requestedScopes: [
                ASAuthorizationAppleIDRequest.ASAuthorizationScopeFullName,
                ASAuthorizationAppleIDRequest.ASAuthorizationScopeEmail
            ]
        })
            .then((res: AppleSignInResponse) => {
                // https://developer.apple.com/documentation/signinwithapplerestapi/verifying_a_user
                //alert('Send token to apple for verification: ' + res.identityToken);
                console.log("Response from appleID = " + JSON.stringify(res))
                let user: PUser = new PUser();
                user.email = res.email;
                user.appleId = res.user;
                let name = res.fullName.namePrefix + " " + res.fullName.givenName + " " + res.fullName.middleName + " " + res.fullName.familyName + " " + res.fullName.nameSuffix
                user.name = name.split("\\s+").join(" ").trim();
                user.nickName = res.fullName.nickname??null;
                user.lastSignInType = SignInType.Apple
                this.success3rdPartyLogin(user);
            })
            .catch((error: AppleSignInErrorResponse) => {
                alert(error.code + ' ' + error.localizedDescription);
                console.error(error);
            });
    }

    ifLogin3rdParty(): boolean {
        return this.state == LoginState.Login3rdParty;
    }

    ifChooseNickName(): boolean {
        return this.state == LoginState.ChooseNickName;
    }

    ifDisplayUser(): boolean {
        return this.state == LoginState.DisplayUser;
    }
}

enum LoginState {
    Login3rdParty = 1,
    ChooseNickName = 2,
    DisplayUser = 3
}

