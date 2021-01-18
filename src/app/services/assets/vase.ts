import {Test,TestType} from "../test.definition";


const vaseTest: Test = {
    "id": "12",
    "name": "Vase",
    "className": "vase",
    "free": false,
    "footerIndicator": true,
    "extraDescription": undefined,
    "type": TestType.Default,
    "intro": "Imagine a <b >vase</b>..., where it is placed, shape, style, color, has flowers or not. <p> " +
        "Once the image of a <b>vase</b> is clear, you can start the test.",
    "description": "What kind of partner do you prefer?",
    "_productId": undefined,
    "version":"1.0",
    "questions": [{
        "id": "1",
        "name": "How many flowers does the vase have?",
        "means": "How many ideal partners do you expect to encounter?",
        "message": undefined,
        "answers": [{
            "id": "1",
            "name": "None",
            "text": "You cannot imagine anybody fitting completely to your taste. You either feel that nobody can fit your criteria for a life partner or you are not preoccupied with searching for \"The One\" at this moment."
        }, {
            "id": "2",
            "name": "Less than three",
            "text": "Your taste is refined when it comes to choosing a life partner. You expect only a small number of possible partners to satisfy your criteria. Once you choose a partner you are prepared to commit yourself to the relationship and expect success. You will not change your opinion easily once the decision is made."
        }, {
            "id": "3",
            "name": "Three to seven",
            "text": "You do expect your partner to possess a certain set of qualities. At the same time, you are flexible about the combination of qualities that your partner must reach to be considered as a fitting life partner."
        }, {
            "id": "4",
            "name": "More than seven",
            "text": "The world is full of possibilities for a successful relationship. You are not looking for a long list of qualities from your partner. You can find interesting features in many people. Your expectations are manageable, so in any period of your life, there should be one or more people around you that can be considered as a possible match."
        }]

    }, {
        "id": "2",
        "name": "How tall is the vase together with the flowers in it?",
        "means": "Importance of your partner social status",
        "message": undefined,
        "answers": [{
            "id": "1",
            "name": "Around a foot (30 cm) or less",
            "text": "You have normal expectations regarding the social status of your partner. It does not have to be an outstanding one. You do not like to be defined by your partner’s status; you will rather have yourself in charge of your own."
        }, {
            "id": "2",
            "name": "Shorter than a kitchen table",
            "text": "You like your partner to have certain presentable social status, not necessarily the highest possible, but a solid one will match your taste."
        }, {
            "id": "3",
            "name": "Taller than a kitchen table",
            "text": "You have an expectation for your partner's social status to be near the top, to be appreciated and respected. Only a partner with such a reputation in society is a match for you."
        }]

    }, {
        "id": "3",
        "name": "Is the vase slick and elegant?",
        "means": "Do you care if your partner has a model looks?",
        "message": undefined,
        "answers": [{
            "id": "1",
            "name": "Yes",
            "text": "When it comes to looks, your partner’s physical looks are very significant to you. You like for him/her to be athletic and active with an elegant figure."
        }, {
            "id": "2",
            "name": "No",
            "text": "When it comes to looks, you are not placing expectations on your partner to have a model's body. There are a number of physical varieties that can attract you in a person."
        }]

    }, {
        "id": "4",
        "name": "Can the vase brake?",
        "means": "How fragile are your relationships?",
        "message": undefined,
        "answers": [{
            "id": "1",
            "name": "Easily",
            "text": "You are aware that something unexpected can easily change the stability of your ideal relationship. In order for your relationship to be lasting and stable, it will require a lot of energy and constant attention."
        }, {
            "id": "2",
            "name": "It can, but I don't expect that to happen.",
            "text": "Harmony in your relationship can be changed with a single event, but you are certain that problems can be avoided if you invest enough attention and energy. Problems do not come suddenly and without a hint."
        }, {
            "id": "3",
            "name": "Unlikely",
            "text": "Harmony in your relationship will not change suddenly and unexpectedly. You are confident in the stability of the relationship with your ideal partner."
        }]

    }, {
        "id": "5",
        "name": "What should first come to people's minds when they see the vase?",
        "means": "What would be the most important attribute of your partner?",
        "message": undefined,
        "answers": [{
            "id": "1",
            "name": "It's expensive",
            "text": "It seems that the good material status of your ideal partner is likely to be the most important one for you."
        }, {
            "id": "2",
            "name": "It's interesting",
            "text": "You will most appreciate it if your ideal partner is interesting. He/she should have a good sense of humor and should be able to grab everybody's attention in a non-intrusive way."
        }, {
            "id": "3",
            "name": "It's unique",
            "text": "You will most appreciate it if your ideal partner possesses uniqueness. You are searching for non-standard and interesting characteristics in your partner."
        }, {
            "id": "4",
            "name": "It is beautiful",
            "text": "You will mostly appreciate if your ideal partner possesses beauty and harmony."
        }]

    }, {
        "id": "6",
        "name": "What is the position of the vase in the space around it?",
        "means": "What position should your partner have in your life?",
        "message": undefined,
        "answers": [{
            "id": "1",
            "name": "Central (middle of the room, terrace).",
            "text": "You expect your ideal partner to have a central position in your life, you will be aware and you will take into consideration his needs and wishes at all times."
        }, {
            "id": "2",
            "name": "On a side (near the wall, in the corner)",
            "text": "Your ideal partner will not have such a central position in your life, you will be aware of his/her needs and wishes, but you will demand that he/she is aware of yours too. The central position in your life is reserved for you."
        }]

    }, {
        "id": "7",
        "name": "Is the vase transparent?",
        "means": "Are you certain that you know your partner?",
        "message": undefined,
        "answers": [{
            "id": "1",
            "name": "Yes, it's transparent",
            "text": "You expect to share everything with your partner: thoughts, expectations, and plans. Basically you would like to function as \"one\" with your ideal match."
        }, {
            "id": "2",
            "name": "No, it's opaque",
            "text": "You expect that there is going to be some level of mystery around your ideal partner. He/she will not be an open book to you; you will expect something new and interesting to happen all the time."
        }]

    }], "results": []

}
export {vaseTest}

