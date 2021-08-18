import {Component, OnInit} from '@angular/core';
import {FriendStatus, PUser} from "../../services/test.definition";
import {FriendsService} from "../../services/friends.service";
import {UserService} from "../../services/user.service";

@Component({
    selector: 'app-frends',
    templateUrl: './frends.component.html',
    styleUrls: ['./frends.component.scss'],
})
export class FrendsComponent implements OnInit {

    constructor(private friendsService: FriendsService, private userService: UserService) {
    }

    currentUser: PUser;
    friends: PUser[];
    pending: PUser[];
    listState: boolean;
    searchUsers: PUser[];

    isListState(): boolean {
        return this.listState;
    }

    isSearchState(): boolean {
        return !this.listState;
    }

    ngOnInit() {
        this.currentUser = this.userService.getUser();
        this.listState = true;
        this.initListState();
    }
    initListState(){
        if (this.userService.isLoggedIn()) {
            this.friendsService.getFriends().toPromise().then(
                r => this.friends = r.friends
            );
            this.friendsService.getPending().toPromise().then(
                r => this.pending = r.friends
            );

        }
    }

    accept(id: number) {
        const friend = this.pending.find(u=>u.id==id);
        if (friend) {
            this.friendsService.accept(friend).then(r => {
                console.log("accept   **** then"+ JSON.stringify(r));
                if (r.friends[0].status == FriendStatus.Friends) {

                    this.friends.push(r.friends[0]);
                    this.pending = this.pending.filter(u => u.id != id);
                    console.log("finished");
                }
            })
        }
    }

    reject(id: number) {
        const friend = this.pending.find(u=>u.id==id);
        if (friend) {
            this.friendsService.reject(friend).then(r => {
                console.log("then"+ JSON.stringify(r));
                if (r.friends[0].status == FriendStatus.Reject) {
                    this.pending = this.pending.filter(u => u.id != id);
                }
            })
        }
    }
    delete(id: number) {
        const friend:PUser = this.friends.find(u=>u.id==id);
        if(friend){
            this.friendsService.delete(friend).then(r=>{
                console.log("then"+ JSON.stringify(r));
                this.friends =  this.friends.filter(u=>u.id!=id);
            });
        }
    }

    private getFriendById(searchedId: number): PUser {
        return this.pending.find(u => u.id == searchedId)
    }

    addNewFriends() {
        this.listState = false;
    }

    changeToListState() {
        this.listState = false;
    }

    filterUserList($event: any) {
        const searchTerm = $event.target.value;
        console.log("searchTerm=" + searchTerm);
        if (searchTerm && searchTerm.length > 3) {
            this.friendsService.search(searchTerm).then(r => {
                console.log("results=" + JSON.stringify(r));
                this.searchUsers = r.friends
            });
        } else {
            this.searchUsers = [];
        }
    }

    requestFriend(id: number) {
        const user: PUser = this.searchUsers.find(u => u.id == id);
        console.log("found user " + JSON.stringify(user));
        this.friendsService.request(user).then(r => {
            console.log();
            this.searchUsers = this.searchUsers.filter(u => u.id != id);
        });
    }

    private switch: boolean = true;

    switchLoggedUser() {
        const real = {id: 24, name: "Natasha Kuzmanoska", nickName: "Real"};
        const fake = {id: 23, name: "Aleksandar Pecanov", nickName: "Fake"};
        this.switch = !this.switch;
        const user = this.switch ? real : fake;
        this.userService.setTestUser(user);
        this.currentUser = this.userService.getUser();
    }

    backToList() {
        this.listState=true;
        this.initListState();
    }


}
