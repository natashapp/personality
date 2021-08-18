import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Router, RouteReuseStrategy, RouterModule} from '@angular/router';
import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {SignInWithApple} from "@ionic-native/sign-in-with-apple/ngx";
import {Facebook} from '@ionic-native/facebook/ngx';
import {HomePage} from "./pages/home/home.page";
import {QuestionPage} from "./pages/question/question-page.component";
import {ResultsPage} from "./pages/results/results-page.component";
import {QuestionColorPage} from "./pages/question-color/question-color-page.component";
import {ResultsColorPage} from "./pages/results-color/results-color-page.component";
import {SigninPage} from "./pages/signin/signin-page.component";
import {FormsModule} from "@angular/forms";
import {FrendsComponent} from "./pages/frends/frends.component";

@NgModule({
    declarations: [
        AppComponent,
        HomePage,
        QuestionPage,
        ResultsPage,
        QuestionColorPage,
        ResultsColorPage,
        SigninPage,
        FrendsComponent
    ],
    entryComponents: [],
    imports: [
        BrowserModule,
        HttpClientModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        FormsModule
    ],
    providers: [
        StatusBar,
        SplashScreen,
        SignInWithApple,
        Facebook,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
