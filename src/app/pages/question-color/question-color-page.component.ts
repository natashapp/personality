import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Question, Test} from "../../services/test.definition";
import {IonRadioGroup} from "@ionic/angular";
import {TestsService} from "../../services/tests.service";
import {ResultsService} from "../../services/results.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-question-color',
    templateUrl: './question-color-page.component.html',
    styleUrls: ['./question-color-page.component.scss'],
})
export class QuestionColorPage implements OnInit {
    public test: Test;
    public question: Question;
    public testResults: Map<string, string>;
    public canGoForward: boolean = false;
    public colorRows: ColorRow[] = [];
    public value: string = "";
    public timerIsVisible: boolean = false;


    @ViewChild('timerRef') timerRef: ElementRef;

    public bgColors = {
        gray: "#706C63",
        blue: "#1A1C56",
        green: "#264942",
        red: "#DC462D",
        yellow: "#F3D94C",
        violet: "#9B264F",
        brown: "#AE5E30",
        black: "#150811"
    }
    private questColors = {
        0: "gray",
        1: "blue",
        2: "green",
        3: "red",
        4: "yellow",
        5: "violet",
        6: "brown",
        7: "black",
    }

    constructor(private  testService: TestsService, private resultService: ResultsService,
                private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        this.log("ngOnInit");
        const selectedTestId = this.route.snapshot.paramMap.get('id');
        const selectedQuestionId = "1";
        this.test = this.testService.getTestById(selectedTestId)
        this.question = this.testService.getQuestionById(this.test, selectedQuestionId)

        this.generateColorItems()

        this.testResults = new Map<string, string>();
        ["1", "2", "3"].forEach(i => this.testResults[i] = "");

    }

    private generateColorItems() {
        let arr = this.getRandomArray();
        for (let i = 0; i < 8; i = i + 2) {
            this.colorRows.push(new ColorRow(this.createColorItem(arr[i]), this.createColorItem(arr[i + 1])));
        }
    }

    gridVisible(): boolean {
        return !this.timerIsVisible
    }

    timeVisible(): boolean {
        return this.timerIsVisible
    }

    private getRandomArray(): number[] {
        var arr = [0, 1, 2, 3, 4, 5, 6, 7]
        var res = [];
        while (arr.length > 1) {
            var sel = this.getRandomInt(0, arr.length);
            res.push(arr[sel]);
            arr.splice(sel, 1);
        }
        res.push(arr[0]);
        return res;
    }

    private getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    private createColorItem(id: number): ColorItem {
        let c: ColorItem = new ColorItem();
        c.id = id + "";
        c.name = this.questColors[id];
        c.bgColor = this.bgColors[c.name];
        return c;
    }


    selectColor(colorId) {
        if (colorId != undefined) {
            let val = this.testResults[this.question.id];
            val += colorId;
            this.testResults[this.question.id] = val;
            this.value = val;

            this.canGoForward = this.testResults[this.question.id].length == 8
            if (this.canGoForward && this.question.id == "1") {
                this.nextQuestion();
                this.setTimeout();
            }
            if (this.canGoForward && this.question.id == "3") {
                this.nextQuestion();
            }
        }
    }

    private setTimeout() {
        let _this = this;
        setTimeout(function () {
            console.log("thismer.thick");
            _this.timerTick()
        }, 1000)
    }

    private timerTick() {
        if(this.timerRef!=undefined) {
            let sec = parseInt(this.timerRef.nativeElement.textContent, 10);
            sec = sec - 1;
            this.timerRef.nativeElement.textContent = sec;
            if (sec > 0) {
                this.setTimeout()
            }
            if (sec == 0) {
                this.nextQuestion();
            }
        }
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
            if (this.question.id == "1") {
                this.timerIsVisible = true;
            }
            if (this.question.id == "2") {
                this.timerIsVisible = false;
                this.generateColorItems()
            }
            if (nextQuestion != null) {
                this.question = nextQuestion;
            } else if (this.testService.isLastQuestion(this.test, this.question)) {
                this.resultService.addTestResponse(this.test.id, this.testResults);
                this.router.navigate(['/test/' + this.test.id + '/results-color']);
            } else { // some kind of problem navigate home
                this.router.navigate(['/5001']);
            }
        }
    }


}

class ColorRow {
    item1: ColorItem
    item2: ColorItem

    constructor(c1: ColorItem, c2: ColorItem) {
        this.item1 = c1;
        this.item2 = c2;
    }
}

class ColorItem {
    bgColor: string;
    id: string;
    name: string;
    visible: string = "visible";

    select(): void {
        this.visible = "hidden"
    }
}
