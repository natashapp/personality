import {Test,TestType} from "../test.definition";


const drivingTest: Test =
    {
        "id": "17",
        "name": "Driving",
        "className": "drive",
        "footerIndicator": true,
        "free": true,
        "type": TestType.Combination,
        "extraDescription": undefined,
        "intro": "Imagine the following situation: " +
            "You and your partner are driving trough a <b>new city</b> to find a restaurant.<br> " +
            "For you roads are unfamiliar, but your partner is  <b>partly</b> " +
            "familiar with the city, so she/he is giving you instructions  were to turn." +
            "<p> After a while it turns out you are <b>lost.</b></p>",
        "description": "Type of relationship with your partner",
        "version":"1.0",
        "_productId": undefined,
        "questions": [{
            "id": "1",
            "name": "What would you most likely say?",
            "message": undefined,
            "means": undefined,
            "answers": [{
                "id": "1",
                "name": "I thought you knew the way!!",
                "text": undefined
            }, {
                "id": "2",
                "name": "We enjoyed the drive anyway.",
                "text": undefined
            }, {
                "id": "3",
                "name": "I should have paid more attention. When we made that left turn back over there, I wanted to ask you about it but I didn't. My fault."
                , "text": undefined
            }]

        }, {
            "id": "2",
            "name": "What would you most likely think in your mind?",
            "message": undefined,
            "means": undefined,
            "answers": [{
                "id": "1",
                "name": "I thought you knew the way!!",
                "text": undefined
            }, {
                "id": "2",
                "name": "We enjoyed the drive anyway.",
                "text": undefined
            }, {
                "id": "3",
                "name": "I should have paid more attention. When we made that left turn back over there, I wanted to ask you about it but didn't. My fault."
                , "text": undefined
            }]
        }],
        "results": [{
            "value": "11",
            "text": "You are not a very forgiving person. You are quick in assigning responsibility to others. Hidden in the accusatory tone is also anger or dissatisfaction that you may or may not be related to the incident per se. You think of yourself as a perfectionist that always expects only the best from others."
        }, {
            "value": "12",
            "text": "Understanding by nature, but you think that you need to put your “mentor’s hat” when you are with your partner.  The need to use a tough tone may not be related to the incident per se. Presenting “tough love” is a sign of some unbalances in your relationship. The relationship may be a truly sweet one, but practicing honesty can make it better."
        }, {
            "value": "13",
            "text": "You have a self-effacing and self-accusatory relationship with your partner, but you are trying to hide it using camouflage methods, like an accusatory tone in tricky situations. Maybe you are feeling guilty for something not related to the incident per se."
        }, {
            "value": "21",
            "text": "You are not a very forgiving person in nature, but you are trying to solve some of your relationships unbalance by showing an easygoing and understanding nature. You are aware that your perfectionist's expectations should be tamed down a bit. You are on a good path to a sweet relationship."
        }, {
            "value": "22",
            "text": "Easygoing and understanding in your attitude, you generally consider your partner equal to yourself. The readiness with which you tolerate your partner's errors indicates a desire to be treated the same way in similar situations. It seems that you enjoy your relationship and it is a truly sweet one."
        }, {
            "value": "23",
            "text": "You are trying to demonstrate an easygoing and understanding attitude towards your partner, probably driven by the desire to be treated the same way in similar situations, but deep down you are feeling some kind of guilt mixed with unrealistic responsibility maybe not related to the incident."
        }, {
            "value": "31",
            "text": "You are not a very forgiving person. You are quick in assigning responsibility to others but are not ready to show it to your partner. You will present self-accusatory and accommodating nature to your partner.  Maybe you feel some insecurity toward your partner that is stopping you from showing your true feelings or you feel some kind of guilt that does not have to be related to the incident per se."
        }, {
            "value": "32",
            "text": "You are an easygoing and understanding person, but something in your relationship is stopping you from showing your true feelings. You are trying to accommodate your partner's expectations, maybe a little bit too much than necessary. A little more work should put your relationship on the right path to being a truly sweet one."
        }, {
            "value": "33",
            "text": "Self-effacing and self-accusatory, you demonstrate a tendency to bend over backward to accommodate your partner. The relationship may be a truly sweet one, but the attitude possibly hides a certain amount of insecurity. Lower your standards for self-perfectionism and you may be on a path to a truly sweet relationship."
        }]
    }
export {drivingTest}