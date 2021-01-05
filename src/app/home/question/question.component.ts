import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TestsService} from "../../services/tests.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Question, Test} from "../../services/test.definition";
import {IonRadioGroup} from "@ionic/angular";

@Component({
    selector: 'app-question1',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {

    public test: Test;
    public question: Question;
    public testResuts: Map<string, string> = new Map<string, string>();

    public disabledForward: boolean = false;
    public disabledBack: boolean = false;

    public questionAnswer = "";

    @ViewChild('questionRef') questionRef: IonRadioGroup;

    constructor(private  testService: TestsService,
                private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        console.log("ngOnInit");
        const selectedTestId = this.route.snapshot.paramMap.get('id');
        const selectedQuestionId = "1";
        this.testResuts = new Map<string, string>();
        this.test = this.testService.getTestById(selectedTestId)
        this.question = this.testService.getQuestionById(this.test, selectedQuestionId)
    }


    userAnswer() {
        console.log("userAnswer")
        this.questionAnswer = this.questionRef.value;
        this.disabledBack = this.question.id == "1";
        this.disabledForward = this.questionAnswer == "";
        this.testResuts[this.question.id] = this.questionAnswer;
    }

    nextQuestion() {
        console.log("nextQuestion")

        if (!this.disabledForward) {
            let nextQuestion: Question = this.testService.getNextQuestion(this.test, this.question);
            this.questionAnswer = "";
            if (nextQuestion != null) {
                this.question = nextQuestion;
                this.questionAnswer = ""//this.testResuts[this.question.id];
            } else if (this.testService.isLastQuestion(this.test, this.question)) {
                this.router.navigate(['/test/' + this.test.id + '/result']);
            } else { // some kind of problem navigate home
                this.router.navigate(['']);
            }
        }
    }

    previousQuestion() {
        console.log("previousQuestion")


        let previousQuestion: Question = this.testService.getPreviousQuestion(this.test, this.question);
        this.questionAnswer = ""
        if (previousQuestion != null) {
            this.question = previousQuestion;
            this.questionAnswer = "";// this.testResuts[this.question.id];
        } else if (this.testService.isFirstQuestion(this.test, this.question)) {
            this.router.navigate(['/test/' + this.test.id + '/start']);
        } else { // some kind of problem navigate home
            this.router.navigate(['']);
        }
    }
}
