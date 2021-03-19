import {Component, OnInit} from '@angular/core';
import {TestsService} from "../services/tests.service";
import {Test} from "../services/test.definition";
import {StorageService} from "../services/storage.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    public tests: Test[];
    public keys: string[];

    constructor(private  testService: TestsService, private storageService: StorageService) {

    }

    ngOnInit() {
        this.tests = this.testService.getAllTests();
        this.refreshKeys();
    }

    addItem() {
        var keyvalue = (<HTMLInputElement>document.getElementById("keyvalue")).value;
        const arr = keyvalue.split(":")
        this.storageService.setItem(arr[0], arr[1]);
        console.info("item with key:" + arr[0] + " value:" + arr[1] + "was saved");
        this.refreshKeys();
    }

    triggerTestRefresh(){

        this.testService.syncTestShort()
    }

    refreshKeys() {
        this.storageService.keys().then(res => this.keys = res);
    }

}
