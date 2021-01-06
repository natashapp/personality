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

    getTestResult(testId: string): Map<string, string> {
        if (this.results.has(testId)) {
            return this.results.get(testId)
        } else {
            return new Map<string, string>();
        }
    }



    clearResult(testId: string) {
        this.results.delete(testId);
    }
}


