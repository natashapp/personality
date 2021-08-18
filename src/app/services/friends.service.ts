import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PUser, Test} from "./test.definition";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {UserService} from "./user.service";
import {stringify} from "@angular/compiler/src/util";

@Injectable({
    providedIn: 'root'
})
export class FriendsService {
    private listFriendsURL: string =environment.apiFriendUrl+ "/list";
    private pendingFriendsURL: string =environment.apiFriendUrl+ "/pending";
    private acceptURL: string =environment.apiFriendUrl+ "/confirm";
    private rejectURL: string = environment.apiFriendUrl+ "/reject";
    private searchURL: string = environment.apiFriendUrl+"/search";
    private requestURL: string= environment.apiFriendUrl+"/request";
    private deleteURL: string = environment.apiFriendUrl+"/delete";
    constructor(private http: HttpClient, private userService: UserService) {

    }

    public getFriends():Observable<FriendRequest> {
        if (this.userService.isLoggedIn()) {
            return this.http.post<FriendRequest>(this.listFriendsURL,this.getRequest())
        }
        return null;
    }
    public getPending():Observable<FriendRequest> {
        if (this.userService.isLoggedIn()) {
            return this.http.post<FriendRequest>(this.pendingFriendsURL,this.getRequest())
        }
        return null;
    }

    private getRequest(): FriendRequest {
        const request = new FriendRequest();
        if (this.userService.getUser())
            request.userId = this.userService.getUser().id;
        return request;
    }

    private getRequestWithFriends(friend:PUser): FriendRequest {
       const req= this.getRequest();
       req.friends = [friend];
       return req;
    }

    accept(friend:PUser) :Promise<FriendRequest>{
        const r = this.getRequestWithFriends(friend);
        return  this.http.post<FriendRequest>(this.acceptURL,r).toPromise();
    }

    reject(friend:PUser) :Promise<FriendRequest>{
        const r = this.getRequestWithFriends(friend);
        return  this.http.post<FriendRequest>(this.rejectURL,r).toPromise();
    }

    search(searchTerm: string):Promise<FriendRequest> {
        const r = this.getRequest();
        r.search=searchTerm;
        if(searchTerm && searchTerm.trim().length>3) {
            return this.http.post<FriendRequest>(this.searchURL, r).toPromise();
        }
        else{
            console.warn("can not call search without 4 characters");
        }
    }

    request(friend: PUser) :Promise<FriendRequest>{
        if(friend) {
            const r = this.getRequestWithFriends(friend);
            return this.http.post<FriendRequest>(this.requestURL, r).toPromise();
        }
        else{
            console.warn("can not call request without user");
        }
    }

    delete(friend: PUser) {
        if(friend){
            const r = this.getRequestWithFriends(friend);
            return this.http.post<FriendRequest>(this.deleteURL, r).toPromise();
        }
        else{
            console.warn("can not delete request without user");
        }
    }
}

export enum RequestStatus {
    ok = "ok", error = "error"
}

export class FriendRequest {
    search: string;
    userId: number;
    friends: PUser[];
}
