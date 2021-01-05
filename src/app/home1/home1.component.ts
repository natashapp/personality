import { Component, OnInit } from '@angular/core';
import {Test} from "../services/test.definition";
import {TestsService} from "../services/tests.service";

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.scss'],
})
export class Home1Component implements OnInit {

  public tests:Test[];

  constructor(private  testService: TestsService) {

  }

  ngOnInit() {
    this.tests = this.testService.getTests()
  }

}
