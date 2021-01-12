import {Component, OnInit} from '@angular/core';
import {Test} from "../../services/test.definition";
import {TestsService} from "../../services/tests.service";
import {ResultsService} from "../../services/results.service";
import {ActivatedRoute, Router} from "@angular/router";
import {colorsMap} from "../../services/assets/resultsMap.en";

@Component({
    selector: 'app-results-color',
    templateUrl: './results-color.component.html',
    styleUrls: ['./results-color.component.scss'],
})
export class ResultsColorComponent implements OnInit {
    public test: Test;
    public resultList: TestResult[] = [];
    private testResults: Map<string, string>;

    constructor(private  testService: TestsService, private resultService: ResultsService,
                private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        this.log("ResultsColorComponent ngOnInit");

        const selectedTestId = this.route.snapshot.paramMap.get('id');
        this.test = this.testService.getTestById(selectedTestId);
        this.testResults = this.resultService.getTestResult(selectedTestId);
        this.resultList = this.getResultsColorTest();
    }
    refresh(){
        this.resultList = this.getResultsColorTest();
    }
    getResultsColorTest():TestResult[] {

        let b1 = this.splitArray(this.testResults["1"]);
        let b2 = this.splitArray(this.testResults["3"]);

        let pairs:string[][] = this.findPairs(b1, b2);


        let sPairs = []
        sPairs[0] = this.addSignToPair("+", pairs[0]);
        sPairs[1] = this.addSignToPair("x", pairs[1]);
        sPairs[pairs.length - 1] = this.addSignToPair("-", pairs[pairs.length - 1]);

        for (let i = 2; i < pairs.length - 1; i++) {
            sPairs[i] = this.addSignToPair("=", pairs[i]);
        }

        let problemPairs = this.findProblemPairs(b2);
        for (let i = 0; i < problemPairs.length; i++) {
            problemPairs[i] = this.addSignToPair("+-", problemPairs[i]);
        }


        let result:TestResult[] = [];
        result.push(new TestResult(this.getSignMessage("+"),
            [colorsMap[this.getStringPair(pairs[0])]]));
        result.push(new TestResult(this.getSignMessage("x"),
            [colorsMap[this.getStringPair(pairs[1])]]));

        let means:string[] = [];
        for (let i = 0; i < problemPairs.length; i++) {
            means.push(colorsMap[this.getStringPair(problemPairs[i])] );
        }
        result.push(new TestResult(this.getSignMessage("+-"),means));

        means = [];
        for (let i = 2; i < pairs.length - 1; i++) {
            means.push(colorsMap[this.getStringPair(pairs[i])]);
        }
        result.push(new TestResult(this.getSignMessage("="),means));

       let l = pairs.length - 1;
        result.push(new TestResult(this.getSignMessage("-"),[colorsMap[this.getStringPair(pairs[l])]]));

        return result;
    }

    private getStringPair(arr:string[]):string{
        return  arr.join("")
    }

    private  getSignMessage(sign:string):string {
        if (sign == "+")
            return "Desired objective";
        if (sign == "x")
            return "Existing situation";
        if (sign == "=")
            return "Restrained characteristic";
        if (sign == "+-")
            return "Actual problems";
        if (sign == "-")
            return "Stress sources"
    }

    private  isBasicColor(c:string):boolean {
        //TODO checkout why so strange logic for basic color
        const c1:number = parseInt(c, 10);
        return c1 == 1 || c1 == 2 || c1 == 3 || c1 == 4 ;
    }

    private isNotBasic(c:string):boolean {
        //TODO checkout why so strange logic for basic color
        const c1:number = parseInt(c, 10);
        return c1 == 0 || c1 == 6 || c1 == 7 ;
    }

    private  findProblemPairs(a2) {
        let pairs = [];
        let pStart = 0;
        for (var i = 0; i < 3; i++) {
            if (this.isNotBasic(a2[i]))
                pStart = i;
        }
        let pEnd = 7;
        for (let i = 4; i < 8; i++) {
            if (this.isBasicColor(a2[i]))
                pEnd = i;
        }
        for (let i = 0; i <= pStart; i++) {
            for (let j = 7; j >= pEnd; j--) {
                pairs.push([a2[i], a2[j]]);
            }
        }
        return pairs.slice(0, 2);
    }

    findPairs(a1: string[], a2: string[]):string[][] {
        var pairs:string[][] = [];

        for (var i = 1; i < a2.length; i++) {
            var ispair = this.isPair(a1, a2[i - 1], a2[i]);
            if (ispair) {
                pairs.push([a2[i - 1], a2[i]]);
            } else {
                if (pairs.length == 0 || this.getLastItem(pairs) != a2[i - 1])
                    pairs.push([a2[i - 1]]);
            }
        }

        if (this.getLastItem(pairs) != a2[a2.length - 1])
            pairs.push([a2[a2.length - 1]]);

        return pairs;
    }

     addSignToPair(sign:string, arr:string[]):string[]{
        if (sign == "+-") {
            arr[0] = "+" + arr[0];
            arr[1] = "-" + arr[1];
        } else {
            for (var i = 0; i < arr.length; i++) {
                arr[i] = sign + "" + arr[i];
            }
        }
        return arr;
    }
    getLastItem(pairs:string[][]):string {
        const last = pairs[pairs.length - 1];
        return last[last.length - 1];
    }

    isPair(arr:string[], a:string, b:string) {
        for (var i = 1; i < arr.length - 1; i++) {
            if (((arr[i] == a || arr[i] == b) && (arr[i - 1] == b || arr[i - 1] == a))
                || ((arr[i] == a || arr[i] == b) && (arr[i + 1] == b || arr[i + 1] == a)))
                return true;
        }
        return false;
    }

    splitArray(values: string): string[] {
        if (values != undefined) {
            return values.split("")
        }
        return null;
    }

    log(msg) {
        console.log(msg);
    }
}

class TestResult {
    meaning: string;
    answers: string[];

    constructor(meaning: string, answer: string[]) {
        this.answers = answer;
        this.meaning = meaning;
    }

}