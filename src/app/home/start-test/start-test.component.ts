import {Component, OnInit} from '@angular/core';
import {TestsService} from "../../services/tests.service";
import {Test} from "../../services/test.definition";
import {ActivatedRoute,Router} from "@angular/router";

@Component({
    selector: 'app-start-test',
    templateUrl: './start-test.component.html',
    styleUrls: ['./start-test.component.scss'],
})
export class StartTestComponent implements OnInit {

    public test: Test;

    constructor(private  testService: TestsService,
                private route: ActivatedRoute, private router :Router) {
    }

    ngOnInit() {
        const selectedTestId = this.route.snapshot.paramMap.get('id');
        this.test = this.testService.getTestById(selectedTestId)

    }

    startQuestions() {
        this.router.navigate(['/test/'+this.test.id+'/questions'])
    }
}
