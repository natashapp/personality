import {Component, OnInit} from '@angular/core';
import {TestsService} from "../services/tests.service";
import {Test} from "../services/test.definition";

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    public tests:Test[];

    constructor(private  testService: TestsService) {

    }

    ngOnInit() {
        this.tests = this.testService.getTests();
    }

}
