import {Type, Transform, plainToClass} from 'class-transformer';
import {min} from "rxjs/operators";

export enum TestType {Combination, Default, Points, ColorTest};

export type Test = {
    id: string,
    name: string,
    className: string,
    _productId: string,
    intro: string,
    description: string,
    extraDescription: string,
    type: TestType,
    free: boolean,
    footerIndicator: boolean,
    questions: Question[],
    results: Result[],
    version: number
}

export type Question = {
    id: string,
    name: string
    means: string,
    message: string,
    answers: Answer[]
}

export type Answer = {
    id: string,
    name: string,
    text: string
}

export type Result = {
    value: string,
    text: string
}

export type TestShort = {
    id: string,
    name: string,
    version: number
}


export class PUser {
    id: number;
    nickName: string;
    facebookId: string;
    appleId: string;
    googleId: string;
    name: string;
    creDate: number;
    lastSignInType: SignInType;
    imgLink: string;
    deviceId: string;
    email: string;
    gender: string;
    iconStyle: string;
    saved: Object[]; //not sure yet of the structure //todo replace Object with something meaningfull
    products: Object[]//

    public createUser(databaseUser:PUser, updateUser:PUser){
        this.fillUser(databaseUser);
        this.update(updateUser);
        return this;
    }
    private fillUser (user:PUser) {
        if(user) {
            this.id = user.id ;
            this.nickName = user.nickName ;
            this.facebookId = user.facebookId ;
            this.appleId = user.appleId ;
            this.googleId = user.googleId ;
            this.name = user.name;
            this.creDate = user.creDate || new Date().getTime();
            this.lastSignInType = user.lastSignInType;
            this.imgLink = user.imgLink;
            this.deviceId = user.deviceId;
            this.email = user.email;
            this.gender = user.gender;
            this.iconStyle = user.iconStyle;
        }
    }

    /**
     * update database user with 3rd party properties
     * @param p3rdUser
     */
    private update(p3rdUser: PUser) {
        if (p3rdUser != null) {
            this.nickName = p3rdUser.nickName ?? this.nickName;
            this.facebookId = p3rdUser.facebookId ??  this.facebookId;
            this.appleId = p3rdUser.appleId ?? this.appleId;
            this.googleId = p3rdUser.googleId ??  this.googleId;
            this.name = p3rdUser.name ?? this.name;
            if(this.creDate && p3rdUser.creDate) {
                this.creDate = Math.min(this.creDate, p3rdUser.creDate)
            }else{
                this.creDate = this.creDate ?? p3rdUser.creDate;
            }
            this.lastSignInType = p3rdUser.lastSignInType;
            this.imgLink = p3rdUser.imgLink ? p3rdUser.imgLink : this.imgLink;
            this.deviceId = p3rdUser.deviceId ? p3rdUser.deviceId : this.deviceId;
            this.email = p3rdUser.email ? p3rdUser.email : this.email;
            this.gender = p3rdUser.gender ? p3rdUser.gender : this.gender;
            this.iconStyle = p3rdUser.iconStyle ? p3rdUser.iconStyle : this.iconStyle;
        }
    }

    public toString(): string {
        return JSON.stringify(this);
    }
}

export enum SignInType {Apple="Apple", Google="Google", Facebook="Facebook"};
