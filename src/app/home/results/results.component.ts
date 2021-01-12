import {Component, OnInit} from '@angular/core';
import {Test, TestType} from "../../services/test.definition";
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

        switch (this.test.type) {
            case TestType.Combination:
                this.resultList = this.resultsCombination(testResults);
                break;
            case TestType.ColorTest:
                console.error("Should not be here !!!, will see")
                break;
            case TestType.Default:
                this.resultList = this.resultDefault(testResults);
                break;
        }

        this.resultList.forEach(item => this.log(item))
    }

    resultsCombination(testResults: Map<string, string>): TestResult[] {
        const results: TestResult[] = []
        let res = "";

        for (let q of this.test.questions) {
            console.log("q=" + testResults[q.id])
        }

        res = "";
        this.test.questions.forEach(q => res += testResults[q.id]);

        this.test.results.forEach(r => {
            if (r.value == res) {
                results.push(new TestResult(res, "", r.text, r.value));
            }
        })
        return results;
    }

    resultDefault(testResults: Map<string, string>): TestResult[] {
        const results: TestResult[] = []
        this.test.questions
            .forEach(
                q => {
                    q.answers.forEach(
                        a => {
                            if (a.id == testResults[q.id])
                                results.push(
                                    new TestResult(q.id, q.means, a.text, a.id));
                        })
                })
        return results;
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

    constructor(questionId: string, meaning: string, answer: string, answerId: string) {
        this.questionId = questionId;
        this.answers = answer;
        this.meaning = meaning;
        this.answerId = answerId;
    }
}
