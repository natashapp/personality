import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {HomePageRoutingModule} from './home-routing.module';
import {HomePage} from './home.page';
import {QuestionComponent} from "./question/question.component";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
    ],
    declarations: [HomePage,QuestionComponent]
})
export class HomePageModule {
}
