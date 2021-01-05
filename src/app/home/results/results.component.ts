import { Component, OnInit } from '@angular/core';
import {Question, Test} from "../../services/test.definition";
import {TestsService} from "../../services/tests.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  public test: Test;


  constructor(private  testService: TestsService,
              private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const selectedTestId = this.route.snapshot.paramMap.get('id');
    this.test = this.testService.getTestById(selectedTestId)
  }
}
