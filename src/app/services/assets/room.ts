import {Test,TestType} from "../test.definition";


const roomTest: Test = {
    "id": "15",
    "name": "Room",
    "className": "room",
    "_productId": "com.sofisapps.personality.Room",
    "free": false,
    "footerIndicator": true,
    "extraDescription": undefined,
    "type": TestType.Default,
    "intro": "One morning you found yourself in an <b>odd but familiar room.</b> " +
        "<p> Take a moment to imagine  the room as best as you can. </p>" +
        "<p> Once the image of the room is in you mind - you are ready to start the test.</p>",
    "description": "Your view on your childhood",
    "version":"1.0",
    "questions": [{
        "id": "1",
        "name": "What are your general feelings about the room?",
        "means": "How do you generally perceive your childhood?",
        "message": undefined,
        "answers": [{
            "id": "1",
            "name": "I like the room, I feel comfortable in it.",
            "text": "You like your childhood experience. Protection, carelessness, safety - makes your heart warm just thinking about it."
        }, {
            "id": "2",
            "name": "Normal, no special feelings.",
            "text": "You are partly ambivalent regarding your childhood, you either do not perceive your childhood as a pretty extraordinary period of your life or you could not wait to grow up and start the more significant journey."
        }, {
            "id": "3",
            "name": "I feel some kind of sadness and loneliness.",
            "text": "You perceive your childhood as a sad period when you often had feelings of loneliness."
        }, {
            "id": "4",
            "name": "I feel anxious.",
            "text": "You feel some type of anxiety regarding your childhood; you do not perceive your childhood as a carless and safe period of your life."
        }]

    }, {
        "id": "2",
        "name": "Is the room filled with light?",
        "means": "Is there some discomfort regarding your childhood?",
        "message": undefined,
        "answers": [{
            "id": "1",
            "name": "Yes, it is filled with light.",
            "text": "There is a warm and pleasant feeling whenever you think about your childhood. Seems like your childhood was a very beautiful period for you."
        }, {
            "id": "2",
            "name": "Not much, it can use more light.",
            "text": "There is some level of discomfort when you recall your childhood; there are some experiences that you would like to be different in order to have a happier perception of your childhood."
        }, {
            "id": "3",
            "name": "It is murky and I like it like that.",
            "text": "Your childhood was not a picture-perfect one, but you’ve come to some agreement and acceptance and you would not change it even if you could."
        }]

    }, {
        "id": "3",
        "name": "Are there a lot of furnishings?",
        "means": "Number of childhood memories",
        "message": undefined,
        "answers": [{
            "id": "1",
            "name": "Yes, there are pictures, pillows, lamps, curtains, etc.",
            "text": "You have an overwhelming number of childhood memories, it seems like everything just happened yesterday. You like to reminisce about childhood."
        }, {
            "id": "2",
            "name": "Normal, only the things I need to function.",
            "text": "You have a healthy amount of childhood memories. You do not mind to evoke childhood memories, but you do not crave to return to that phase of your life."
        }, {
            "id": "3",
            "name": "There is a lack of furnishing.",
            "text": "You feel a lack of memories regarding your childhood, you either do not like to evoke childhood memories for some reason or you are a person that is more interested in the future rather than the past."
        }]

    }, {
        "id": "4",
        "name": "Are the room furnishings modest or expensive?",
        "means": "Perception of the childhood material status",
        "message": undefined,
        "answers": [{
            "id": "1",
            "name": "Modest",
            "text": "Your current economic status, or the expectation for it, is better than your childhood economic status. Gaining better economic status for your family is something that you cannot ignore; it will always be in the background of your aspirations."
        }, {
            "id": "2",
            "name": "Normal",
            "text": "You did not notice or did not have a problem with the material things during your childhood. You are probably a person that does not pay a lot of attention to the material things of life."
        }, {
            "id": "3",
            "name": "Luxury",
            "text": "You either have a feeling that the material status during your childhood was better than the one you have now or you have a romantic view of wellbeing in your childhood."
        }]

    }, {
        "id": "5",
        "name": "What type of room is it?",
        "means": "Interaction with authorities in childhood",
        "message": undefined,
        "answers": [{
            "id": "1",
            "name": "Living room/kitchen",
            "text": "You gave significance to authorities in your childhood, what they think, what they expect. You perceived that their experience and expectation will best serve your needs in life. You felt most safe and confident when you spent time close to your complete family."
        }, {
            "id": "2",
            "name": "Bedroom",
            "text": "You had a great level of freedom and independence during your childhood, to be on your own with your hopes and dreams. You were pretty independent and rebellious as a child. You did not put great significance on what the authorities liked or did not like."
        }, {
            "id": "3",
            "name": "Bathroom",
            "text": "You probably were shy and independent as a child, you did not like authorities to oversee your every step, you liked to have your own space, just for yourself where you felt safe."
        }, {
            "id": "4",
            "name": "Hotel room",
            "text": "You were an adventurous person as a child and you are probably one now. You like to travel and explore. You were pretty independent as a child. Authorities in your childhood were not that important in your later life."
        }]

    }, {
        "id": "6",
        "name": "Is there a view (a window) to the outside world?",
        "means": "What were your prospects for the future?",
        "message": undefined,
        "answers": [{
            "id": "1",
            "name": "Yes, a beautiful one.",
            "text": "You had great expectations for the future ahead of you. You liked to dream and hope for the nice things in your future."
        }, {
            "id": "2",
            "name": "No, I cannot see outside.",
            "text": "You were confused regarding your future. You either did not want to leave your childhood comfort or you did not like to plan that much ahead. The possibilities for the future were open and you will adapt to them as you go."
        }, {
            "id": "3",
            "name": "Yes, something not desirable.",
            "text": "You did not spend a lot of time planning a great future as a child. You were kind of scared of your responsibilities in adult life or you felt so comfortable in your childhood that you did not want to ever leave it."
        }]

    }, {
        "id": "7",
        "name": "Are you inside or outside the room?",
        "means": "How comfortable are you in evoking childhood memories?",
        "message": undefined,
        "answers": [{
            "id": "1",
            "name": "I’m in the room.",
            "text": "You have a normal attitude towards your childhood, you are not trying to avoid thinking or evoking childhood memories."
        }, {
            "id": "2",
            "name": "No, I’m not in the room.",
            "text": "You feel that childhood was so long ago, you do not like to spend a lot of time analyzing or thinking about it."
        }]

    }, {
        "id": "8",
        "name": "Do you plan to leave the room?",
        "means": "Do you want to move on from childhood to adolescence life?",
        "message": undefined,
        "answers": [{
            "id": "1",
            "name": "Yes, I feel the urge to leave the room.",
            "text": "You had plans for your adolescent life and you wanted to grow up as soon as possible. You wanted to get your destiny into your own hands."
        }, {
            "id": "2",
            "name": "No, I’m comfortable in the room, I like to be inside.",
            "text": "You like the safety and carelessness of your childhood maybe a little too much. Childhood was a great period for you and you do not feel the urge to leave it behind."
        }, {
            "id": "3",
            "name": "Yes, I will leave the room eventually.",
            "text": "You liked the childhood period of your life, but you did not burden yourself with plans for the future. You were confident that when the time is right, you will make all the right steps."
        }]

    }],
    "results": []
}
export {roomTest}