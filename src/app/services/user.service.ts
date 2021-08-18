import {Injectable} from '@angular/core';
import {StorageService} from "./storage.service";
import {PUser, TestShort} from "./test.definition";
import {HttpClient} from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})

export class UserService {
    private currentUser: PUser;


    private serverUrl: string = "http://192.168.1.186:9090/PersonalityWeb/rest/service";
    private userExistUrl: string = this.serverUrl + "/userExist";
    private saveUser: string = this.serverUrl + "/user";

    constructor(private storageService: StorageService, private http: HttpClient) {
    }

    public testHttp(url: string) {
        this.http.get(url).toPromise().then(r => {
            let msg = "SUCC:" + url + "=" + JSON.stringify(r);
            console.log(msg);
            alert(msg);

        }).catch(e => {
            let msg = "ERR:" + url + "=" + JSON.stringify(e);
            console.log(msg);
            alert(msg);
        })
    }

    public isLoggedIn() {
        console.log("isLoggedIn() this.getUser()=" + this.getUser());
        console.log("isLoggedIn() (this.getUser()!=null)=" + (this.getUser() != null));
        return this.getUser() != null;
    }

    public getUser(): PUser {
        console.log("getUser() this.currentUser =" + JSON.stringify(this.currentUser));
        if (this.currentUser == null) {
            let user: PUser = this.storageService.getUser();
            console.log("getUser()  this.storageService.getUser() =" + JSON.stringify(user) + "  (user != null)=" + (user != null));
            if (user != null) {
                this.currentUser = user;
            }
        }
        if(this.currentUser==null){
            this.currentUser= new PUser();
            this.currentUser.id=24;
            this.currentUser.name= "Natasha Kuzmanoska";
        }
        console.log("getUser() returns this.currentUser=" + this.currentUser)
        return this.currentUser;
    }

    deleteUser() {
        if (this.getUser()) {
            this.storageService.deleteUser();
            this.currentUser = null;
        }
    }

    persistUser(user: PUser): Promise<PUser> {
        if (user)
            this.currentUser = user;
        this.storageService.saveUser(this.currentUser);
        return this.httpSaveUser();
    }

    private httpSaveUser(): Promise<PUser> {
        console.log("httpSaveUser  this.currentUser "+ JSON.stringify(this.currentUser))
        return this.http.post<PUser>(this.saveUser, this.currentUser).toPromise().then(res => {
            //update service variable
            console.log("type of user "+typeof res);
            console.log("FINAL USER  "+JSON.stringify(res));
            const user = new PUser();
            user.createUser(res , this.currentUser);
            this.currentUser = user;
            //save to the local database
            this.storageService.saveUser(this.currentUser);
            //return resolved promise
            return new Promise<PUser>((resolve, reject) => {
                resolve(res);
            });
        }, err => {
            alert(err);
            console.log(err);
            return new Promise<PUser>((resolve, reject) => {
                reject(new Error(err));
            });
        });
    }

    /**
     * check if the user exist in the database
     * @param user
     */
    httpCheckUserExist(user: PUser) {
        return this.http.post<PUser>(this.userExistUrl, user).toPromise();
        //call user exist if null is returned new user if the user is return means that there is a possibility for conflict
    }

    /*  httpCheckUserExistObserve(user: PUser): Observable<PUser> {
          return this.http.post<PUser>(this.userExistUrl, user);
          //call user exist if null is returned new user if the user is return means that there is a possibility for conflict
      }*/

    setTestUser(user: { nickName: string; name: string; id: number }) {
        this.currentUser.id= user.id
        this.currentUser.name = user.name;
        this.currentUser.nickName = user.nickName;
    }
}


/*


once the user is logged in to the application will have to use sign out to delete user data from the local storage and be anonymous again
not sure how to check if it logged in in apple

How to check for duplicate users
user is log-in with apple  - but previously his results were saved by facebook id
OK Locally we will store PersonalityUserId
Whole User Object will be stored in the Locaal app storage
We will test


So the user info will allways be saved

Log in with another user -- what will that mean that on the same app they can use diffrent types of users
shouldnot be allowed
So Ok if the user Objet is in the app - that it

Log out - is just an option to log out
but what happens if the users log in with a diffrent user - example diffrent apple id
Notification to the user - that there is saved results for the previous user


Delete user data  - will mean user object will be deleted - and user on the server will be marked for archive
not sure when should I retreive it from archive - mabye comments section - should stay only

*/

