import {Injectable} from '@angular/core';
import {Plugins} from '@capacitor/core';
import {PUser} from "./test.definition";
import {Type, Transform, plainToClass} from 'class-transformer';

enum StorageKeys {
    User = "User", SavedTests = "SaveTests", Tests = "Tests"
}

const {Storage} = Plugins;

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    constructor() {
    }

    async setObject(key: string, value: Object) {
        await Storage.set({
            key: key,
            value: JSON.stringify(value)
        });
    }

    async getObject(key: string): Promise<Object> {
        const ret = await Storage.get({key: key});
        return JSON.parse(ret.value);
    }

    async setItem(key: string, value: string) {
        await Storage.set({
            key: key,
            value: value
        });
    }

    async getItem(key: string): Promise<string> {
        const {value} = await Storage.get({key: key});
        console.log('Got item: ', value);
        return value;
    }

    async removeItem() {
        await Storage.remove({key: 'name'});
    }

    async keys(): Promise<string[]> {
        const {keys} = await Storage.keys();
        console.log('Got keys: ', keys);
        return keys;
    }

    async clear() {
        await Storage.clear();
    }

    //
    getUser(): PUser {
        let u = null;
        this.getObject(StorageKeys.User).catch(err => {
            alert("Error while getting a user from storage " + err);
            console.error(err);
        }).then(res => {
            console.log("storage getUser " + res);
            u = res;
        });

        console.log("storage getUser  before mapping " + u +" json:"+ JSON.stringify(u));
        if (u != null) {
            let user: PUser = plainToClass(PUser, u);
            console.log("storage getUser   mapping " +JSON.stringify(user));
            return user;
        }
        console.log("storage getUser  after mapping ");

        return null;
    }


    saveUser(currentUser: PUser): boolean {
        this.setObject(StorageKeys.User, currentUser);
        return true;
    }

    deleteUser() {
        Storage.remove({key: StorageKeys.User}).catch(err => {
            alert("Error while removing a user " + err);
            console.error(err);
        });
    }
}
