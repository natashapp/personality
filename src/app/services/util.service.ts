import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UtilService {

    constructor() {
    }

    log(msg: String, optionalParams?:any[]): void {
        console.log(msg, optionalParams)
    }

    deg(msg: String, optionalParams?:any[]): void {
        console.debug(msg, optionalParams);
    }
    warn(msg: String, optionalParams?:any[]){
        console.warn(msg, optionalParams)
    }
}
