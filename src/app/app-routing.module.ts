import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {StartTestComponent} from "./home/start-test/start-test.component";
import {QuestionComponent} from "./home/question/question.component";
import {UserAccount1Component} from "./user-account1/user-account1.component";
import {Compare1Component} from "./compare1/compare1.component";
import {Notification1Component} from "./notification1/notification1.component";
import {ResultsComponent} from "./home/results/results.component";
import {CommonModule} from "@angular/common";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
    },
    {
        path: 'user-account',
        component: UserAccount1Component
    },
    {
        path: 'compare',
        component: Compare1Component
    },
    {
        path: 'notifications',
        component: Notification1Component
    },

    {
        path: "test/:id/start",
        component: StartTestComponent
    },
    {
        path: "test/:id/questions",
        component: QuestionComponent
    },
    {
        path: "test/:id/questions1",
        component: QuestionComponent
    },
    {
        path: "test/:id/result",
        component: ResultsComponent
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),
        CommonModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
