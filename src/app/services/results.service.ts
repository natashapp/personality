import {Injectable} from '@angular/core';
import {compareNumbers} from "@angular/compiler-cli/src/diagnostics/typescript_version";

@Injectable({
    providedIn: 'root'
})

export class ResultsService {

    private results: Map<string, Map<string, string>>;

    constructor() {
        console.log("Calling constructor for the ResultsService ");
        this.results = new Map<string, Map<string, string>>();
    }

    addTestResponse(testId: string, testResults: Map<string, string>) {
        this.results.set(testId, testResults);
    }

    getTestResult(testId: string) {
        return this.results.has(testId);
    }

    addResultForQuestion(testId: string, questionId: string, answerId: string) {
        let testResults = this.results.get(testId);
        if (testResults == null) {
            testResults = new Map<string, string>();
            this.results.set(testId, testResults);
        }
        testResults.set(questionId, answerId);
    }

    clearResult(testId: string) {
        this.results.delete(testId);
    }
}
