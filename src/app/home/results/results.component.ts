import {Component, OnInit} from '@angular/core';
import {Test} from "../../services/test.definition";
import {TestsService} from "../../services/tests.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ResultsService} from "../../services/results.service";

@Component({
    selector: 'app-results',
    templateUrl: './results.component.html',
    styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
    public test: Test;
    public resultList: TestResult[] = [];


    constructor(private  testService: TestsService, private resultService: ResultsService,
                private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        this.log("ResultsComponent ngOnInit");

        const selectedTestId = this.route.snapshot.paramMap.get('id');
        this.test = this.testService.getTestById(selectedTestId);
        const testResults = this.resultService.getTestResult(selectedTestId);

        this.test.questions
            .forEach(
                q=>{q.answers.forEach(
                    a=>{if(a.id==testResults[q.id])
                        this.resultList.push(
                            new TestResult(q.id,q.means, a.text, a.id ));})})

        this.resultList.forEach(item=>this.log(item))
    }


    log(msg) {
        console.log(msg);
    }
}

class TestResult {
    questionId: string;
    meaning: string;
    answers: string;
    answerId: string;

    constructor(questionId: string, meaning: string, answer: string, answerId:string) {
        this.questionId = questionId;
        this.answers = answer;
        this.meaning = meaning;
        this.answerId = answerId;
    }
}
