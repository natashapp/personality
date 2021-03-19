import {Test,TestType} from "../test.definition";

const beachTest: Test = {
    "id": "16",
    "name": "Beach",
    "className": "beach",
    "_productId": "com.sofisapps.personality.Beach",
    "extraDescription": undefined,
    "type": TestType.Default,
    "intro": "Take a minute and imagine following that you are walking to the <b>beach</b> . Imagine people around you, how long you need to get there,..." +
        "<p>Once the image becomes somewat clear - you are ready to start the test</p>",
    "description": "People relations",
    "free": false,
    "footerIndicator": true,
    "version":1.0,
    "questions": [{
        "id": "1",
        "message":undefined,
        "name": "How many people are on the beach?",
        "means": "Number of people that you want around you",
        "answers": [{
            "id": "1",
            "name": "Full of people, busy beach",
            "text": "You are an extroverted person and most probably a party animal. Large gatherings, clubbing, bars, feel like home to you. You love the energy that you get from the crowds; you may also seek an audience."
        }, {
            "id": "2",
            "name": "Few dozen",
            "text": "You are an extroverted person, and you need interaction with a fair amount of people. You feel great in bars and at social gatherings. Away from huge crowds, but with enough people to always have something new and interesting to do."
        }, {
            "id": "3",
            "name": "A couple",
            "text": "You like to spend time with people but at the same time, you need some space to be on your own. You are seeking the right balance between spending time in other people's company and having time for your own thoughts. You can be charming and social when needed but you like more intimate company. You think of this as the best way to interact with people."
        }, {
            "id": "4",
            "name": "Deserted beach",
            "text": "You are a reserved and introverted person. You do not mind spending some time alone, in fact, you prefer being alone most of the time. You probably are avoiding large crowds because they make you uncomfortable and can drain or compromise your energy."
        }]

    }, {
        "id": "2",
        "message":undefined,
        "name": "How far is the beach?",
        "means": "Are you always in a mood for socializing?",
        "answers": [{
            "id": "1",
            "name": "Far in the distance, more than a mile",
            "text": "You like safe distance to observe, assess the situation before getting into party mode. You like to take some time on your own before getting into the next social event."
        }, {
            "id": "2",
            "name": "I’m almost there.",
            "text": "You do not need a lot of preparation before getting into party mode. You can switch on and off easily if there are people around you."
        }]
    }, {
        "id": "3",
        "message":undefined,
        "name": "How far are the other people?",
        "means": "Do you want to have distance from the crowd?",
        "answers": [{
            "id": "1",
            "name": "They are close by. I can start chatting with someone if I want to.",
            "text": "You are a person that can easily get into chitchat. You like being close to people and socializing. You will use every chance to establish new friendships."
        }, {
            "id": "2",
            "name": "They are in the distance.",
            "text": "You are a somewhat reserved person. You highly regard your own personal space. You enjoy having a relaxing time without being constantly bothered by other people, while at the same time you like the comfort of knowing that there will be people around you if you feel like you need to talk with someone."
        }, {
            "id": "3",
            "name": "There are no people around",
            "text": "You are pleased when you are left alone with your thoughts. You are not worried that you might be missing something significant."
        }]

    }, {
        "id": "4",
        "message":undefined,
        "name": "Are there familiar faces on the beach?",
        "means": "Do you like unfamiliar crowds or do you like to socialize mostly with familiar faces?",
        "answers": [{
            "id": "1",
            "name": "Yes, all of them.",
            "text": "You enjoy yourself the most when socializing with familiar people. Constantly seeking new people and getting to know them is not that appealing to you. You do not like surprises."
        }, {
            "id": "2",
            "name": "Some of them",
            "text": "You feel most comfortable if at a gathering there are familiar faces around you. Social gatherings with total strangers make you anxious."
        }, {
            "id": "3",
            "name": "No, I do not recognize any familiar people.",
            "text": "You are not scared of introducing new faces in your life; you will utilize every opportunity to meet new people and exchange thoughts. Your social confidence level is high."
        }]

    }, {
        "id": "5",
        "message":undefined,
        "name": "Are you walking alone or with a company?",
        "means": "Do you have a “wingman” when hitting social events?",
        "answers": [{
            "id": "1",
            "name": "Alone",
            "text": "You do not depend on anyone special that needs to be with you when attending a social event. You are a self-confident person that does not need someone to watch his back."
        }, {
            "id": "2",
            "name": "Partner",
            "text": "You feel most safe in the company of your partner when it comes to attending social gatherings. You are in a place when your social life is ONE with your partner."
        }, {
            "id": "3",
            "name": "Friend/friends",
            "text": "You are not a loner; you know how to form relationships with friends. You feel most confident when getting in social gatherings with friends around."
        }]

    }],
    results:[]
}
export {
    beachTest
}