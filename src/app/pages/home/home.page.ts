import {Component, OnInit} from '@angular/core';
import {TestsService} from "../../services/tests.service";
import {Test} from "../../services/test.definition";
import {StorageService} from "../../services/storage.service";
import {Plugins} from '@capacitor/core';
import {AdOptions, AdPosition, AdSize} from '@capacitor-community/admob';

const {AdMob} = Plugins;
import '@codetrix-studio/capacitor-google-auth';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/user.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
    options: AdOptions = {
        adId: 'ca-app-pub-1935322587860934/3751419815',//https://apps.admob.com/v2/apps/6750485226/adunits/3751419815/edit?_ga=2.186510697.1944902220.1616321729-1171530511.1616196693&_gac=1.81178725.1616321729.Cj0KCQjw3duCBhCAARIsAJeFyPWlxbv-hXpQiaF6FVyyndOJ_zl5xMCm92-RBWavadqQ8IeOMltZ66UaAhQGEALw_wcB
        //adId:'ca-app-pub-3940256099942544/5224354917',
        isTesting: true
    };


    public tests: Test[];
    public keys: string[];

    constructor(private  testService: TestsService, private storageService: StorageService, private route: ActivatedRoute, private router: Router, private userService:UserService) {

    }

    testConnection(){
        let url :string = "http://localhost:9090/PersonalityWeb/rest/service/tests/short";

        let url1 :string = "http://persponalities.com:9090/PersonalityWeb/rest/service/tests/short";

        let url2 :string = "http://192.168.1.186:9090/PersonalityWeb/rest/service/tests/short";
        this.userService.testHttp(url);
        this.userService.testHttp(url1);
        this.userService.testHttp(url2);

        this.userService.testHttp("/server");
        this.userService.testHttp("/server1");
        this.userService.testHttp("/server2");
        this.userService.testHttp("/server3");


    }

    showRewardVideo() {
        // Prepare ReWardVideo
        AdMob.prepareRewardVideoAd(this.options);

        // Subscribe ReWardVideo Event Listener
        AdMob.addListener('onRewardedVideoAdLoaded', (info: boolean) => {
            // You can call showRewardVideoAd() here or anytime you want.
            console.log('RewardedVideoAd Loaded');
            AdMob.showRewardVideoAd();
        });


        AdMob.addListener('onRewardedVideoAdOpened', (info: any) => {
            console.log("onRewardedVideoAdOpened" + info);
        });
        AdMob.addListener('onRewardedVideoStarted', (info: any) => {
            console.log("onRewardedVideoStarted" + info);
        });
        AdMob.addListener('onRewardedVideoAdClosed', (info: any) => {
            console.log("onRewardedVideoAdClosed" + info);
        });
        AdMob.addListener('onRewarded', (info: { type: string, coin: number }) => {
            console.log("onRewarded onRewarded" + info);
        });
        AdMob.addListener('onRewardedVideoAdLeftApplication', (info: any) => {
            console.log("onRewardedVideoAdLeftApplication " + info);
        });
        AdMob.addListener('onRewardedVideoAdFailedToLoad', (info: any) => {
            console.log("onRewardedVideoAdFailedToLoad" + info);
        });
        AdMob.addListener('onRewardedVideoCompleted', (info: any) => {
            console.log("onRewardedVideoCompleted" + info);
        });

        AdMob.showRewardVideoAd().then((value => {
            console.log("reward video is shown!!!")
        }))
    }

    ngOnInit() {
        this.tests = this.testService.getAllTests();
        this.refreshKeys();
    }

    addItem() {
        var keyvalue = (<HTMLInputElement>document.getElementById("keyvalue")).value;
        const arr = keyvalue.split(":")
        this.storageService.setItem(arr[0], arr[1]);
        console.info("item with key:" + arr[0] + " value:" + arr[1] + "was saved");
        this.refreshKeys();
    }

    triggerTestRefresh() {
        this.testService.syncTestShort()
    }

    refreshKeys() {
        this.storageService.keys().then(res => this.keys = res);
    }

    showSignIn() {
        this.router.navigate(['/sign-in']);
    }

    deleteUser() {
        this.userService.deleteUser()
    }
}
