import {beachTest} from './assets/beach';
import {waterTest} from "./assets/water";
import {forestTest} from "./assets/forest";
import {stateOfMindTest} from "./assets/stateOfMind";
import {drivingTest} from "./assets/driving";
import {knifeTest} from "./assets/knife";
import {roomTest} from "./assets/room";
import {superheroTest} from "./assets/superhero";
import {horseTest} from "./assets/horse";
import {vaseTest} from "./assets/vase";
import {knowYourselfTest} from "./assets/knowYourself";
import {strawberryTest} from "./assets/strawberry";
import {walkingTest} from "./assets/walking";
import {Test} from "./test.definition";


const tests: Array<Test> = [
    waterTest, //11
    forestTest, //10
    stateOfMindTest, //25
    drivingTest, //17
    knifeTest, //13
    roomTest, //15
    superheroTest,//18
    horseTest, //14
    vaseTest, //12
    beachTest, //16
    knowYourselfTest,//20
    strawberryTest, //26
    walkingTest//19
];

//[16, 14, 13, 15, 19, 20]


//TO DO I think this needs to be class
export {
    tests
}