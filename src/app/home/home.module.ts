import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {HomePageRoutingModule} from './home-routing.module';
import {HomePage} from './home.page';
import {QuestionComponent} from "./question/question.component";
import {ResultsComponent} from "./results/results.component";
import {QuestionColorComponent} from "./question-color/question-color.component";
import {ResultsColorComponent} from "./results-color/results-color.component";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
    ],
    declarations: [HomePage,QuestionComponent, ResultsComponent,QuestionColorComponent,ResultsColorComponent]
})
export class HomePageModule {


}
