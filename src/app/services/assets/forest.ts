import {Test,TestType} from "../test.definition";


const forestTest: Test = {

  "id" : "10",
  "name" : "Forest",
  "className" : "forest",
  "free" : true,
  "footerIndicator" : true,
  "extraDescription": undefined,
  "type": TestType.Default,
  "intro" : "Clear you mind and spend a minute to imagine <b>forest</b>. <p> Once image of <b>forest</b> is clear, you are ready to start the test  ...",
  "description" : "Your views on life",
  "_productId":undefined,
  "version":1.0,
  "questions" : [ {
    "id" : "1",
    "name" : "Do you feel pleasant in the forest?",
    "means" : "Are you currently satisfied with your life?",
    "message":undefined,
    "answers" : [ {
        "id" : "1",
        "name" : "Yes",
        "text" : "Your overall notion is that you feel satisfied in the present phase of your life."
      }, {
        "id" : "2",
        "name" : "No, not quite",
        "text" : "There is a certain level of dissatisfaction and discomfort at the present stage of your life; some things are not at the place where you have expected them to be."
      } ]
      }, {
    "id" : "2",
    "name" : "Is the forest light, dark or misty?",
    "means" : "Are you confused regarding some aspects of your life?",
    "message":undefined,
    "answers" : [ {
        "id" : "1",
        "name" : "Light",
        "text" : "You see things in your life as they are. There is no confusion and mystery wrapped around them. Your life is clear to you."
      }, {
        "id" : "2",
        "name" : "Dark",
        "text" : "You do feel some level of confusion, a mystery in your life on a general level. There are things that many people seem to get without any problem, but they are a paradox for you."
      }, {
        "id" : "3",
        "name" : "Misty",
        "text" : "There are things in your life that are clear, but there is some level of uncertainty about others."
      } ]
      }, {
    "id" : "3",
    "name" : "Is there some clear path that you are walking on?",
    "means" : "Do you have determined and planned goals in current stage of life?",
    "message" : "Imagine you are moving through the forest...",
    "answers" : [ {
        "id" : "1",
        "name" : "Yes, there is.",
        "text" : "At the current stage, your goals in life are pretty much determined. You just need to follow them."
      }, {
        "id" : "2",
        "name" : "There is a path, but I'm not walking on one.",
        "text" : "The goals in life are unique, you are not a mainstream person – you like to do things in your own way when you feel the time is right. You do like to leave space for changes and avoid conformability.",
        //"-next" : 5
      }, {
        "id" : "3",
        "name" : "No, I don't see any paths.",
        "text" : "There is a level of uncertainty about the next steps in your life. You do not have a clear plan for the rest of your life. You are in a process of reassessment of your goals.",
        //"-next" : 6
      } ]
      }, {
    "id" : "4",
    "name" : "Which statement best describes the path in the forest?",
    "means" : "What type of goals do you have and how much are you determined to achieve them?",
    "message":undefined,
    "answers" : [ {
        "id" : "1",
        "name" : "Wide and clearly defined.",
        "text" : "You are certain about the goals in your life; they are generally accepted and mainstream. You are certain about what you want in life and how to achieve it."
      }, {
        "id" : "2",
        "name" : "A small one fits only a single person.",
        "text" : "You have your own goals in life which are not generally accepted by everyone, they are just right for you and you don't care if they are accepted by everyone else."
      } ]
      }, {
    "id" : "5",
    "name" : "Can you see some other paths around?",
    "means" : "Is there a possibility of changing your goals?",
    "message":undefined,
    "answers" : [ {
        "id" : "1",
        "name" : "Yes, there are, and I’m choosing my path as I go.",
        "text" : "You have planned goals for your life, but you are aware that they can be reassessed and changed. They are a work in progress and you are not afraid to change them as you go."
      }, {
        "id" : "2",
        "name" : "Yes, there are, but I’m on the right one.",
        "text" : "You are a very determined person; once your goals are clear and set, you will try to finish them with a high level of certainty."
      }, {
        "id" : "3",
        "name" : "No, I don't see any other paths around.",
        "text" : "You have strongly determined goals in your life and there is only one right way to achieve them. Everything else is a waste of time."
      } ]
      }, {
    "id" : "6",
    "name" : "Which way are you going?",
    "means" : "Do you feel like your life is on the rise?",
    "message":undefined,
    "answers" : [ {
        "id" : "1",
        "name" : "Uphill",
        "text" : "At the moment you feel as if your life is on the rise. You feel that with each and every day that passes you are putting yourself in a better position in your life."
      }, {
        "id" : "2",
        "name" : "Downhill",
        "text" : "You have a feeling that you have already made significant accomplishments in your life. You would like to reach the more stable ground, somewhere quiet and peaceful."
      }, {
        "id" : "3",
        "name" : "The road is more or less flat.",
        "text" : "You feel that your life is pretty much stable; you do not expect some drastic changes in your life for better or worse. You like the current level of stability of your life."
      } ]
      }, {
    "id" : "7",
    "name" : "Are there animals in the forest?",
    "means" : "Is your life full of interactions, possible opportunities, or problems?",
    "message":undefined,
    "answers" : [ {
        "id" : "1",
        "name" : "Yes, there are",
        "text" : "Your everyday life is full of events. There are lots of people in your life that you are actively interacting with."
      }, {
        "id" : "2",
        "name" : "No",
        "text" : "You are in a phase of calmness and peace and you are often avoiding unnecessary interaction with people. Most likely, you are focused on your introspective development."
      }, {
        "id" : "3",
        "name" : "There are, but I don't see them anywhere.",
        "text" : "There are people and events in your everyday life, but you are not too focused on interacting with them. You are most pleased when you assume the role of passive spectator at this stage of your life."
      } ]
      }, {
    "id" : "8",
    "name" : "While walking you discover a cabin. Are you disturbed?",
    "means" : "What is your initial attitude towards new things in life?",
    "message":undefined,
    "answers" : [ {
        "id" : "1",
        "name" : "Yes, I do not know who might be inside.",
        "text" : "You have a level of reservation when it comes to dealing with new people or trying unknown things."
      }, {
        "id" : "2",
        "name" : "No, I'm pleasantly surprised.",
        "text" : "You do possess a high level of openness when it comes to establishing new relationships and meeting new people."
      }, {
        "id" : "3",
        "name" : "I ignore it. I'm not interested.",
        "text" : "You have a certain level of indifference towards creating new relationships. You are in a stable stage of your life and you do not expect some great surprises or life-changing experiences when you meet new people."
      } ]
      }, {
    "id" : "9",
    "name" : "Are you feeling uncomfortable to leave the forest?",
    "means" : "Are you scared of the end of life?",
    "message":undefined,
    "answers" : [ {
        "id" : "1",
        "name" : "Yes, I like staying in the forest.",
        "text" : "You do not want to think about unpleasant things that might await you further in life, like the end of life. The very thought of life-ending disturbs you."
      }, {
        "id" : "2",
        "name" : "No, not really.",
        "text" : "Everything that has a start has an end; the same goes for life. This is perfectly clear to you and you accept the natural process of life."
      } ]
      }, {
    "id" : "10",
    "name" : "Can you see the edge of the forest?",
    "means" : "Do you think often about the end of your life?",
    "message":undefined,
    "answers" : [ {
        "id" : "1",
        "name" : "Yes, I can see it.",
        "text" : "You are aware of your own mortality. In your present state of mind, you fully embrace the thought that everything will come to an end."
      }, {
        "id" : "2",
        "name" : "No, I don't.",
        "text" : "You are living in the moment; you do not think it is necessary or helpful to be preoccupied with the end. Thoughts about your own mortality do not enter your mind at this stage of your life."
      }, {
        "id" : "3",
        "name" : "No, but I’m aware that it is out there.",
        "text" : "You are aware of your own mortality. You are aware that life will inevitably come to an end, but this thought does not burden you in your everyday life. You will rather concentrate on the things that can be done in the present."
      } ]
      }, {
    "id" : "11",
    "name" : "What do you see beyond the forest?",
    "means" : "What do you think lays beyond life?",
    "message" : "You get to the edge of the forest...",
    "answers" : [ {
        "id" : "1",
        "name" : "Something pleasant, peaceful, beautiful.",
        "text" : "You live life in its natural cycle. The end has come to everyone before, and you accept it to be a perfectly normal conclusion of one's journey."
      }, {
        "id" : "2",
        "name" : "Disturbing. Not a nice sight.",
        "text" : "Death itself, though, is something that disturbs you like a chill in the core of your bones. Life is great and should never end."
      } ]
    }
  ],
  results:[]
}
export {
  forestTest
}