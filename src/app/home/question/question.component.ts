import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TestsService} from "../../services/tests.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Question, Test} from "../../services/test.definition";
import {IonRadioGroup} from "@ionic/angular";
import {ResultsService} from "../../services/results.service";

@Component({
    selector: 'app-question1',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {

    public test: Test;
    public question: Question;
    public testResults: Map<string, string>;

    public canGoForward: boolean = false;
    public canGoBack: boolean = true;

    public value: string = undefined;

    @ViewChild('questionRef') questionRef: IonRadioGroup;

    constructor(private  testService: TestsService, private resultService: ResultsService,
                private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        this.log("ngOnInit");
        const selectedTestId = this.route.snapshot.paramMap.get('id');
        const selectedQuestionId = "1";
        this.testResults = this.resultService.getTestResult(selectedTestId);
        this.test = this.testService.getTestById(selectedTestId)
        this.question = this.testService.getQuestionById(this.test, selectedQuestionId)
    }


    setUserAnswer(): void {
        this.log("setUserAnswer:")
        const questionAnswer = this.questionRef.value + "";
        const questionId = this.question.id;
        this.testResults[questionId] = questionAnswer;
        this.canGoBack = true;
        this.canGoForward = questionAnswer != "";
        this.value = questionAnswer;
    }

    getUserAnswer(): string {
        return this.testResults[this.question.id];
    }

    disabledBack(): boolean {
        this.log("disabled back = " + (!this.canGoBack));
        return !this.canGoBack;
    }

    disabledForward(): boolean {
        this.log("disabled forward = " + (!this.canGoForward));
        return !this.canGoForward;
    }

    log(msg) {
        if (true)
            console.log(msg);
    }

    nextQuestion(): void {
        this.log("nextQuestion")

        if (this.canGoForward) {
            let nextQuestion: Question = this.testService.getNextQuestion(this.test, this.question);
            if (nextQuestion != null ) {
                this.question = nextQuestion;
                this.value = this.testResults[this.question.id] != undefined ? this.testResults[this.question.id] : ""
            } else if (this.testService.isLastQuestion(this.test, this.question)) {
                this.resultService.addTestResponse(this.test.id, this.testResults);
                this.router.navigate(['/test/' + this.test.id + '/result']);
            } else { // some kind of problem navigate home
                this.router.navigate(['/5001']);
            }
        }
    }

    previousQuestion() {
        this.log("previousQuestion")

        let previousQuestion: Question = this.testService.getPreviousQuestion(this.test, this.question);

        if (previousQuestion != null && parseInt(this.question.id, 10) < 3) {
            this.question = previousQuestion;
            this.value = this.testResults[this.question.id]
        } else if (this.testService.isFirstQuestion(this.test, this.question)) {
            this.router.navigate(['/test/' + this.test.id + '/start']);
        } else { // some kind of problem navigate home
            this.router.navigate(['/test/' + this.test.id + '/question1']);
        }
    }
}
