import {Injectable} from '@angular/core';
import {tests} from "./tests.config.en";
import {Test, Question} from "./test.definition";
import {UtilService} from "./util.service";

@Injectable({
    providedIn: 'root'
})
export class TestsService {
    constructor(private utilService: UtilService) {

    }

    getTests(): Test[] {
        return tests;
    }


    getTestById(testId: string): Test {
        const test: Test = tests.find(t => t.id == testId);
        if (test == null) {
            this.utilService.warn("test with id " + testId + " can not be found !!!");
            return null;
        }
        return test;
    }

    getQuestionById(test: Test, selectedQuestionId: string):Question {
        if (test != null) {
            const q: Question = test.questions.find(q => q.id = selectedQuestionId)
            if (q == null) {
                this.utilService.warn("Question with id " + selectedQuestionId + " on test with id " + test.id + " can not be found !!!");
                return null;
            }
            return q;
        }
        else{
            this.utilService.warn("getQuestionById  test can not be null")
            return null;
        }
    }
    isLastQuestion(test:Test, question :Question):boolean{
        if(test!=null && question!=null) {
            let last: Question = test.questions[test.questions.length - 1];
             return last.id ==question.id
        }
        else{
            this.utilService.warn("test or question can not be null or undefined in isLastQuestion")
            return false;
        }
    }
    isFirstQuestion(test: Test, question: Question) {
        if(test!=null && question!=null) {
            let first: Question = test.questions[0];
            return first.id == question.id
        }
        else{
            this.utilService.warn("test or question can not be null or undefined in isLastQuestion")
            return false;
        }
    }
    getNextQuestion(test: Test, question: Question):Question {
        if(test!=null && question!=null) {
            //question id starts from 1 not 0
           let qid = parseInt(question.id,10);
           if(test.questions.length==qid){
               return null;
           }
           else{
               return test.questions[qid];
           }
        }
        else{
            this.utilService.warn("test or question can not be null or undefined in getNextQuestion")
            return null;
        }
    }



    getPreviousQuestion(test: Test, question: Question) {
        if(test!=null && question!=null) {
            //question id starts from 1 not 0
            let qid = parseInt(question.id,10);
            if(qid==1){
                return null;
            }
            else{
                return test.questions[qid-2];
            }
        }
        else{
            this.utilService.warn("test or question can not be null or undefined in getPreviousQuestion")
            return null;
        }
    }
}