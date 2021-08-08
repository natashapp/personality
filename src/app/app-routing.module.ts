import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {StartTestPage} from "./pages/start-test/start-test-page.component";
import {QuestionPage} from "./pages/question/question-page.component";
import {UserAccountPage} from "./pages/user-account/user-account-page.component";
import {NotificationPage} from "./pages/notification/notification-page.component";
import {ResultsPage} from "./pages/results/results-page.component";
import {CommonModule} from "@angular/common";
import {QuestionColorPage} from "./pages/question-color/question-color-page.component";
import {ResultsColorPage} from "./pages/results-color/results-color-page.component";
import {HomePage} from "./pages/home/home.page";
import {ComparePage} from "./pages/compare/compare.page";
import {SigninPage} from "./pages/signin/signin-page.component";


const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component:HomePage
    },
    {
        path: 'user-account',
        component: UserAccountPage
    },
    {
        path: 'compare',
        component: ComparePage
    },
    {
        path: 'notifications',
        component: NotificationPage
    },
    {
        path: "test/:id/start",
        component: StartTestPage
    },
    {
        path: "test/:id/questions",
        component: QuestionPage
    },
    {
        path: "test/:id/questions-color",
        component: QuestionColorPage
    },
    {
        path: "test/:id/results-color",
        component: ResultsColorPage
    },
    {
        path: "test/:id/result",
        component: ResultsPage
    },
    {
        path: "sign-in",
        component: SigninPage
    }

];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
