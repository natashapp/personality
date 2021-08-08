import {Component, OnInit} from '@angular/core';
import {TestsService} from "../../services/tests.service";
import {Test, TestType} from "../../services/test.definition";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-start-test',
    templateUrl: './start-test-page.component.html',
    styleUrls: ['./start-test-page.component.scss'],
})
export class StartTestPage implements OnInit {

    public test: Test;

    constructor(private  testService: TestsService,
                private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        const selectedTestId = this.route.snapshot.paramMap.get('id');
        this.test = this.testService.getTestById(selectedTestId)

    }

    startQuestions() {
        if (this.test.type == TestType.ColorTest)
            this.router.navigate(['/test/' + this.test.id + '/questions-color'])
        else
            this.router.navigate(['/test/' + this.test.id + '/questions'])
    }
}
