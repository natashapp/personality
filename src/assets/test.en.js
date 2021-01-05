
//[16, 14, 13, 15, 19, 20]
function getEnTests() {
    var arr_test = [];
    arr_test.push(getWaterTest());//11
    arr_test.push(getForestTest());//10
    arr_test.push(getStateOfMindTest());// 25
    arr_test.push(getDrivingTest()); //17
    arr_test.push(getKnifeTest());//13
    arr_test.push(getRoomTest());//15
    arr_test.push(getSuperheroTest());//18
    arr_test.push(getHorseTest()); //14
    arr_test.push(getVaseTest());//12
    arr_test.push(getBeachTest());//16
    arr_test.push(getKnowYourselfTest()); //20
    arr_test.push(getStrawberryTest()); //26
    //arr_test.push(getColorCodeTest());
    arr_test.push(getWalkingTest()); //19

    return {
        "all": arr_test
    };
};