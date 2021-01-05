var arr_test = [
    {
        "id": "10",
        "name": "Forest",
        "className": "forest",
        "free": "true",
        "intro": "Clear you mind and  imagine <b>forest</b>. <p> Once image of <b>forest</b> is clear, you are ready to start the test  ...",
        "decription": "Your views on life",
        "question": [
            {
                "id": "1",
                "name": "Do you feel pleasant in the forest?",
                "means": "Are you currently satisfied with your life?",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "Yes.",
                            "text": "Your overall notion is that you feel satisfied in the present phase of your life."
                        },
                        {
                            "id": "2",
                            "name": "No, not quite.",
                            "text": " There is a certain level of dissatisfaction and discomfort at the present stage of your life; some things are not at the place where you have expected them to be."
                        }
                    ]
                }
            },
            {
                "id": "2",
                "name": "Is the forest light, dark or misty?",
                "means": "Are you confused regarding some aspects of your life?",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "Light.",
                            "text": " You see things in your life as they are. There is no confusion and mystery wrapped around them. Your life is clear to you."
                        },
                        {
                            "id": "2",
                            "name": "Dark.",
                            "text": " You do feel some level of confusion, mystery in your life on a general level. There are things that many people seem to get without any problem, but they are a paradox for you."
                        },
                        {
                            "id": "3",
                            "name": "Misty.",
                            "text": " There are things in your life that are clear, but there is some level of uncertainty about others."
                        }
                    ]
                }
            },
            {
                "id": "3",
                "name": "Is there some clear path that you are walking on?",
                "message": "Imagine you are moving through the forest...",
                "means": "Do you have determined goals that you've planned for?",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "Yes, there is.",
                            "text": " At the current stage your goals in life are pretty much determined. You just need to follow them."
                        },
                        {
                            "id": "2",
                            "name": "There is a path, but I'm not walking on one.",
                            "-next": "5",
                            "text": " The goals in life are unique, you are not a mainstream person – you like to do things in your own way, when you feel the time is right. You do like to leave a space for changes and avoid conformability. "
                        },
                        {
                            "id": "3",
                            "name": "No, I don't see any paths.",
                            "-next": "6",
                            "text": " There is a level of uncertainty about the next steps in your life. You do not have a clear plan for the rest of your life. You are in a process of reassessment of your goals."
                        }
                    ]
                }
            },
            {
                "id": "4",
                "name": "Which statement best describes the path in the forest?",
                "means": "What type of goals do you have and how much are you determined to achieve them?",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "Wide and clearly defined.",
                            "text": " You are certain about the goals in your life; they are generally accepted and mainstream. You are certain about what you want in life and how to achieve it."
                        },
                        {
                            "id": "2",
                            "name": "Small one, fits only a single person.",
                            "text": " You have your own goals in life which are not generally accepted by everyone, they are just right for you and you don't care if they are accepted by everyone else."
                        }
                    ]
                }
            },
            {
                "id": "5",
                "name": "Can you see some other paths around?",
                "means": "Is there possibility for changing your goals",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "Yes, there are, and I’m choosing my path as I go.",
                            "text": " You have planned goals for your life, but you are aware that they can be reassessed and changed. They are a work in progress and you are not afraid to change them as you go."
                        },
                        {
                            "id": "2",
                            "name": "Yes, there are, but I’m on the right one.",
                            "text": " You are a very determined person; once your goals are clear and set you will try to finish them with a high level of certainty."
                        },
                        {
                            "id": "3",
                            "name": "No, I don't see any other paths around.",
                            "text": " You have strongly determined goals in your life and there is only one right way to achieve them. Everything else is a waste of time."
                        }
                    ]
                }
            },
            {
                "id": "6",
                "name": "Which way are you going?",
                "means": "Do you feel like your life is on the rise?",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "Uphill.",
                            "text": " At the moment you feel as is if your life is on the rise. You feel that with every each day that passes you are putting yourself on the better position in your life."
                        },
                        {
                            "id": "2",
                            "name": "Downhill.",
                            "text": " You have a feeling that you have already made significant accomplishments in your life. You would like to reach more stable ground, somewhere quiet and peaceful."
                        },
                        {
                            "id": "3",
                            "name": "The road is more or less flat.",
                            "text": " You feel that your life is pretty much stable; you do not expect some drastic changes in your life for better or worst. You like current level of stability of your life."
                        }
                    ]
                }
            },
            {
                "id": "7",
                "name": "Are there animals in the forest?",
                "means": "Is your life full of interactions, possible opportunities or problems?",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "Yes, there are.",
                            "text": " Your everyday life is full of events. There are lots of people in your life that you are actively interacting with."
                        },
                        {
                            "id": "2",
                            "name": "No.",
                            "text": " You are in a phase of calmness and peace and you are often avoiding unnecessary interaction with people. Most likely, your focus is on introspective development of yourself."
                        },
                        {
                            "id": "3",
                            "name": "There are, but I don't see them anywhere.",
                            "text": " There are people and events in your everyday life, but you are not too much focused on interacting with them. You are most pleased when you assume the role of passive spectator at this stage of your life."
                        }
                    ]
                }
            },
            {
                "id": "8",
                "name": "While walking you discover a cabin. Are you disturbed?",
                "means": "What is your initial attitude towards new things in life?",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "Yes, I do not know who might be inside.",
                            "text": " You have a level of reservation when it comes to dealing with new people or trying unknown things."
                        },
                        {
                            "id": "2",
                            "name": "No, I'm pleasantly surprised.",
                            "text": " You do possess a high level of openness when it comes to establishing new relationships and meeting new people."
                        },
                        {
                            "id": "3",
                            "name": "I ignore it. I'm not interested.",
                            "text": " You have a certain level of indifference towards creating new relationships. You are in a stable stage of your life and you do not expect some great surprises or life changing experiences when you meet new people."
                        }
                    ]
                }
            },
            {
                "id": "9",
                "name": "Are you feeling uncomfortable to leave the forest?",
                "means": "Are you scared of the end of the life?",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "Yes, I like staying in the forest.",
                            "text": " You do not want to think about unpleasant things that might await you further in life, like the end of the life. The very thought of life ending disturbs you."
                        },
                        {
                            "id": "2",
                            "name": "No, not really.",
                            "text": " Everything that has a start has an end, same goes for life. This is perfectly clear to you and you accept the natural process of life."
                        }
                    ]
                }
            },
            {
                "id": "10",
                "name": "Can you see the edge of the forest?",
                "means": "Do you think often about the end of your life?",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "Yes, I can see it.",
                            "text": " You are aware of your own mortality. In your present state of mind you fully embrace the thought that everything will come to an end."
                        },
                        {
                            "id": "2",
                            "name": "No, I don't.",
                            "text": " You are living in the moment; you do not think it is necessary or helpful to be preoccupied with the end. Thoughts about your own mortality do not enter your mind at this stage of your life."
                        },
                        {
                            "id": "3",
                            "name": "No, but I’m aware that it is out there.",
                            "text": " You are aware of your own mortality. You are aware that the life will inevitably come to an end, but this thought does not burden you in your everyday life. You will rather concentrate on the things that can be done in the present."
                        }
                    ]
                }
            },
            {
                "id": "11",
                "name": "What do you see beyond the forest?",
                "message": "You get to the edge of the forest...",
                "means": "What do you think lays beyond life?",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "Something pleasant, peaceful, beautiful.",
                            "text": " You live life in its natural cycle. The end has come to everyone before, and you accept it to be a perfectly normal conclusion of one's journey."
                        },
                        {
                            "id": "2",
                            "name": "Disturbing. Not a nice sight.",
                            "text": " Death itself, though, is something that disturbs you like a chill in the core of your bones. Life is great and should never end."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "11",
        "name": "Water",
        "className": "water",
        "decription": "Your love life",
        "free": "true",
        "intro": "Imagine water ...",
        "question": [
            {
                "id": "1",
                "name": "What do you see?",
                "means": "Love potential.",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "Large body of water (ocean, sea, lake).",
                            "text": " Your love potential is enormous, your love life is full of opportunities and the number of possibilities is huge."
                        },
                        {
                            "id": "2",
                            "name": "A water in a glass, pot, bottle or similar type of container.",
                            "text": " You see your love prospects as stable, contained and manageable."
                        },
                        {
                            "id": "3",
                            "name": "Small or narrow body of water (a river, waterfall, creek).",
                            "text": " You see your love life as a highly dynamic and full of potential action."
                        }
                    ]
                }
            },
            {
                "id": "2",
                "name": "How does the water feel?",
                "means": "Level of comfort in love.",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "Warm and pleasant.",
                            "text": " You enjoy every part of the love life. You like to breathe love, give love, fall in love – simply putted when it comes to love you feel like a “fish in the water”."
                        },
                        {
                            "id": "2",
                            "name": "Coldish, but pleasant.",
                            "text": " While you enjoy your love life, at the same time, there are certain reservation. You do however, consider the reservation as a healthy habit when your heart is at stake. You do not have problem in enjoying love, as long as there are some safety limits to shield you from harm."
                        },
                        {
                            "id": "3",
                            "name": "Cold.",
                            "text": " Love life can make you feel discomfort, uneasy and reluctant. Maybe the flirting and accompanying love games are not your favorite activity at the moment. You think that you can be easily hurt when your heart is at stake, and you need to shield and prepare yourself before completely enjoying in the love."
                        },
                        {
                            "id": "4",
                            "name": "I don't know. I'm not really sure.",
                            "text": " When it comes to love life, there are things that are making you puzzled, confused, or maybe love is not your primary preoccupation at the moment. You would like for things to be more straightforward and simpler or to keep love on hold for the moment being."
                        }
                    ]
                }
            },
            {
                "id": "3",
                "name": "Are you inside or outside the water?",
                "means": "Your attitude towards practicing love.",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "You do not like to be completely in the water, you just like to touch it with you hand or feet.",
                            "text": " You are cautious person when it comes to love, you do not like to stay completely on the side, but for the moment you want a safe distance. You will probably let yourself to be fully free in love only when you are sure that it is worth of your attention and you are certain that there will not be any unpleasant surprises."
                        },
                        {
                            "id": "2",
                            "name": "Outside, assessing the situation, with plans to go inside.",
                            "text": " At the moment you have a certain reservation when it comes to love; you like to assess the situation from a safe distance first. Once you get the needed answers, you plan to fully give yourself to love."
                        },
                        {
                            "id": "3",
                            "name": "Outside, on a safe side, with no plans to go inside in near future.",
                            "text": " You are very cautious person when it comes to love; love dynamics (flirting, games) are discomfort and they are confusing to you. You will rather wait for love to find you."
                        },
                        {
                            "id": "4",
                            "name": "Inside.",
                            "text": " You like to experience and try-out love. Love is all around you. You enjoying in almost every aspect of love: falling in love, attracting love."
                        }
                    ]
                }
            },
            {
                "id": "4",
                "name": "What are your thoughts?",
                "message": "You are in the water for a period of time...",
                "means": "Is you love prospects going to change after a while?",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "You do not feel comfortable. You would rather be outside.",
                            "text": " Maneuvering skills required by the love aspects of your life can seem tiresome; they can also make you feel uncomfortable. At the moment you would like to spend your energy on some other things as well, like: career, hobby, family and friends."
                        },
                        {
                            "id": "2",
                            "name": "It's pleasant at the moment. You feel like you will be tired in a while.",
                            "text": " While you do enjoy being in love, there is part of you that is aware that intensity, freedom that you can feel in love at the moment, will naturally change - evolve in time."
                        },
                        {
                            "id": "3",
                            "name": "You feel great. You enjoy being in water.",
                            "text": " You like being in love. You feel great in every part of the love game, flirting, loving and belonging. You will never be tired of love."
                        }
                    ]
                }
            },
            {
                "id": "5",
                "name": "Are there any waves or movement inside?",
                "means": "Distractions in love and attitude towards them.",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "No, the water is perfectly calm.",
                            "text": " You think that love should make you calm and fulfilled, especially when the love is stable and lasting."
                        },
                        {
                            "id": "2",
                            "name": "There are waves – but I do not feel them around me.",
                            "text": " There is drama outside your love life, but it does not directly affect you. Love makes you calm and you enjoy love drama from a safe distance. Occasional harmless flirt is all the drama that you need."
                        },
                        {
                            "id": "3",
                            "name": "Yes, and they are making me tired.",
                            "text": " Seems like too much drama in your love life is making you tired, but somehow subconsciously you are attracting drama.Maybe you possess a magnetic personality :)."
                        },
                        {
                            "id": "4",
                            "name": "Yes, and I love them.",
                            "text": " Your potential for love is enormous, you have magnetic personality that attracts and seeks love all around you. You are enjoying highly dynamic love life and it makes you excited and fulfilled."
                        }
                    ]
                }
            },
            {
                "id": "6",
                "name": "Is the water clear?",
                "means": "Is you love life clear to you?",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "Yes, it's crystal clear.",
                            "text": " You have a clear view on love, you are aware how the things are functioning and what is to be expected. You do not anticipate any significant surprises to come out of the blue."
                        },
                        {
                            "id": "2",
                            "name": "No, it is dark and hard to see inside.",
                            "text": " There is a lot of mystery in your love life. Many of the things are not what they seem to be. There is a lot of possibilities for unexpected surprises and people's reaction when in love can be quite confusing."
                        },
                        {
                            "id": "3",
                            "name": "Clear at the top, murky downward.",
                            "text": " You are quite certain on the love field but at the same time you are aware that love does not function as simple as 1+1=2. You are looking clearly on things, but you leave the door open for unexpected surprises and suspicious conducts to some extent."
                        }
                    ]
                }
            },
            {
                "id": "7",
                "name": "Do you see any animals in the water?",
                "means": "Obstacles in love.",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "Yes, fish and other water animals; Beautiful and mostly harmless.",
                            "text": " Love is magical to you; it is full of beautiful and interesting things, events and people. There is a lot of variety of interesting things to do and explore."
                        },
                        {
                            "id": "2",
                            "name": "Yes, probably jelly fishes inside, sea urchins and some unknown possibly dangerous creatures.",
                            "text": " You are not blindly trustworthy when it comes to love; there are number of possibilities for things to go wrong. You feel that you need to be cautious and protective of your love life."
                        },
                        {
                            "id": "3",
                            "name": "No, I don't see any animals inside.",
                            "text": " You are confident in the love aspects of your life, you feel completely in control and there is nothing that can distract you from enjoyment."
                        }
                    ]
                }
            },
            {
                "id": "8",
                "name": "Will you check what it is?",
                "message": "There is something shiny at the bottom ...",
                "means": "Will you engage in harmless flirt?",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "Yes.",
                            "text": " When it comes to flirting you like to engage in a harmless flirt when opportunity arises."
                        },
                        {
                            "id": "2",
                            "name": "No.",
                            "text": " When it comes to flirting you are not likely to engage in the first opportunity for flirt. You like to communicate on more substantive level."
                        }
                    ]
                }
            },
            {
                "id": "9",
                "name": "Will you now check what it is?",
                "message": "You make a move for the shiny thing, but it seems to be moving. Visibility is not that good at the bottom ...",
                "means": "Will you engage in dangerous flirt?",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "Yes.",
                            "text": " You will try to use every opportunity for flirt; you are confident in your skills of seduction and enjoy using you powers in the game of love."
                        },
                        {
                            "id": "2",
                            "name": "No.",
                            "text": " You do like to practice safe flirting; you will not engage yourself in flirting when there is possibility to harm people that you care, or might care for in the future."
                        }
                    ]
                }
            },
            {
                "id": "10",
                "name": "You are trying to cross the water, how far would you go?",
                "means": "How afraid are you to fall love.",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "I'm not wet; I will probably wait for some transport.",
                            "text": " You are cautious when it comes to engaging in love. You need to assess the situation before involving yourself in love games."
                        },
                        {
                            "id": "2",
                            "name": "Just the feet.",
                            "text": " You are cautious but at the same time you do not like to be left on the side. You are trying to find fairly safe ways to engage yourself in love."
                        },
                        {
                            "id": "3",
                            "name": "Waist and down.",
                            "text": " You have a fairly small reservation when it comes to love. You like to be engaged in love - just keep safety on your mind as a healthy habit in general."
                        },
                        {
                            "id": "4",
                            "name": "Almost completely, I will need to swim.",
                            "text": " You do not have any reservations when it comes to engaging yourself in love. You like to let yourself completely enjoy it."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "12",
        "className": "vase",
        "name": "Vase",
        "free": "true",
        "decription": "What kind of partner do you prefer",
        "intro": "Imagine a vase...",
        "question": [
            {
                "id": "1",
                "name": "How many flowers does the vase have?",
                "means": "How many ideal partners you expect to encounter?",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "None.",
                            "text": " You cannot imagine anybody fitting completely to you taste. You either feel that nobody can fit your criteria for a life partner or you are not preoccupied with search for \"The One\" at this moment."
                        },
                        {
                            "id": "2",
                            "name": "Less than three.",
                            "text": " Your taste is refined when it comes to choosing life partner. You expect only a small number of possible partners to satisfy you criteria. Once you choose a partner you are prepared to commit yourself to the relationship and expect success. You will not change your opinion easily once the decision is made."
                        },
                        {
                            "id": "3",
                            "name": "Three to seven.",
                            "text": " You do expect for your partner to possess certain set of qualities. At the same time you are flexible on the combination of qualities that you partner must reach to be considered as a fitting life partner."
                        },
                        {
                            "id": "4",
                            "name": "More than seven.",
                            "text": " The world is full of possibilities for successful relationship. You are not looking for a long list of qualities from you partner. You can find interesting characteristics in many people. Your expectations are manageable, so in any period of your life there should be one or more person around you that can be considered as a possible match."
                        }
                    ]
                }
            },
            {
                "id": "2",
                "name": "How tall is the vase together with the flowers in it?",
                "means": "Importance of yours partner social status",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "Around a foot (30 cm) or less.",
                            "text": " You have normal expectation regarding the social status of your partner. It does not have to be an outstanding one. You do not like to be defined by your partner’s status; you will rather have yourself in charge of your own."
                        },
                        {
                            "id": "2",
                            "name": "Shorter than a kitchen table.",
                            "text": " You like your partner to have certain presentable social status, not necessary the highest possible, but a solid one will match you taste."
                        },
                        {
                            "id": "3",
                            "name": "Taller than a kitchen table.",
                            "text": " You have expectation for your partner's social status to be near the top, to be appreciated and respected. Only a partner with such reputation in society is a match for you."
                        }
                    ]
                }
            },
            {
                "id": "3",
                "name": "Is the vase slick and elegant?",
                "means": "Do you care if you partner has model looks?",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "Yes.",
                            "text": " When it comes to looks, your partner’s physical looks is very significant to you. You like for him/her to be athletic and active with an elegant figure."
                        },
                        {
                            "id": "2",
                            "name": "No.",
                            "text": " When it comes to looks you are not placing expectations on you partner to have a model's body. There are number of physical varieties that can attract you in a person."
                        }
                    ]
                }
            },
            {
                "id": "4",
                "name": "Can the vase brake?",
                "means": "How fragile are your relationships?",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "Easily.",
                            "text": " You are aware that something unexpected can easily change stability of you ideal relationship. In order for your relationship to be lasting and stable it will require a lot of energy and constant attention."
                        },
                        {
                            "id": "2",
                            "name": "It can, but I don't expect for that to happen.",
                            "text": " Harmony in your own relationship can be changed with a single event, but you are certain that problems can be avoided if you invest enough attention and energy. Problems do not come suddenly and without a hint."
                        },
                        {
                            "id": "3",
                            "name": "Unlikely.",
                            "text": " Harmony in your relationship will not change suddenly and unexpectedly. You are sure in the stability of the relationship with you ideal partner."
                        }
                    ]
                }
            },
            {
                "id": "5",
                "name": "What should first come to people's minds when they see the vase?",
                "means": "What would be the most important attribute of your partner?",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "It's expensive.",
                            "text": " It seems that the good material status of your ideal partner is likely to be the most important one to you."
                        },
                        {
                            "id": "2",
                            "name": "It's interesting.",
                            "text": " You will most appreciate if you ideal partner is interesting. He/she should have a good sense of humor and should be able to grab everybody's attention in a non-intrusive way."
                        },
                        {
                            "id": "3",
                            "name": "It's unique.",
                            "text": " You will most appreciate if you ideal partner possess uniqueness. You are searching for non-standard and interesting characteristics in your partner."
                        },
                        {
                            "id": "4",
                            "name": "It is beautiful.",
                            "text": " You will mostly appreciate if your ideal partner possess beauty and harmony."
                        }
                    ]
                }
            },
            {
                "id": "6",
                "name": "What is the position of the vase in the space around it?",
                "means": "What position should your partner have in your life?",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "Central (middle of the room, terrace).",
                            "text": " You expect for your ideal partner to have a central position in your life, you will be aware and you will take into consideration his needs and wishes at all times."
                        },
                        {
                            "id": "2",
                            "name": "On a side (near the wall, in the corner).",
                            "text": " Your ideal partner will not have such a central position in your life, you will be aware of his/her needs and wishes but you will demand that he/she is aware of yours too. The central position in your life is reserved for you."
                        }
                    ]
                }
            },
            {
                "id": "7",
                "name": "Is the vase transparent?",
                "means": "Are you certain that you know you partner?",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "Yes, it's transparent.",
                            "text": " You expect to share everything with your partner: thoughts, expectations, and plans. Basically you would like to function as \"one\" with you ideal match."
                        },
                        {
                            "id": "2",
                            "name": "No, it's opaque.",
                            "text": " You expect that there is going to be some level of mystery around your ideal partner. He/she will not be an open book to you; you will expect something new and interesting to happen all the time."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "13",
        "name": "Knife",
        "className": "knife",
        "decription": "Sex Life",
        "intro": "Imagine a knife...",
        "-productId": "com.sofisapps.personality.Knife",
        "question": [
            {
                "id": "1",
                "name": "What kind of knife is it?",
                "means": "Sexual potential.",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "A large one (sword, axe).",
                            "text": " You have enormous sexual potential, probably the sex is a substantial preoccupation of your mind and we hope you will put it in good practice."
                        },
                        {
                            "id": "2",
                            "name": "Average size (kitchen knife size).",
                            "text": " You have normal healthy sexual appetite. You are not constantly preoccupied with sex to the point of blindness, but you cannot imagine life without it."
                        },
                        {
                            "id": "3",
                            "name": "Small (Swiss army knife).",
                            "text": " You have practical view on sex; sex is not your obsession. You think of sex when accession arises, in the meantime you are preoccupied with other more important stuff."
                        }
                    ]
                }
            },
            {
                "id": "2",
                "name": "What is the primary function of the knife?",
                "means": "Your use of/view on sexuality.",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "Practical everyday usage in kitchen, gardening...",
                            "text": " You have normal, healthy and practical attitude towards sex. You expect occasional spectacles and fireworks but the rest of the time it is more about the closeness and sharing. It is enjoyable part of life and you will engage in the sexual activity whenever healthy occasion emerges."
                        },
                        {
                            "id": "2",
                            "name": "Weapon (dagger, sword, axe).",
                            "text": " Sex provides unique and primal enjoyment for you. You like every part of the sexual game. You like to use you sexual powers for seduction, flirting and getting followers."
                        },
                        {
                            "id": "3",
                            "name": "Decorative.",
                            "text": " You like to imagine sex as something beautiful and spectacular that need to be admired, but at the same time you have romantic attributes connected to it. You consider sexual relation as a reward so you will think twice before giving pleasure to someone."
                        }
                    ]
                }
            },
            {
                "id": "3",
                "name": "Are you holding the knife?",
                "means": "Are you prepared to use your sexuality?",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "It's in my hand.",
                            "-next": "5",
                            "text": " You are always prepared to use your sexual powers, in every moment and opportunity that arises you like to be prepared. Using you sexual powers comes naturally and without any additional effort."
                        },
                        {
                            "id": "2",
                            "name": "It is placed somewhere else.",
                            "text": " You do not like you sexuality excessively. You like more subtle ways to use you sexual powers. You do not like to waste you sexual powers simply because they are there to be used."
                        }
                    ]
                }
            },
            {
                "id": "4",
                "name": "Where is the knife placed?",
                "means": "Do you want to show off you sexuality?",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "Hidden from view: in a draw or garage.",
                            "text": " You do not like to overemphasize your sexuality in everyday life. You consider people that are overusing it to be vulgar. You like subtle ways to demonstrate you sexual potential."
                        },
                        {
                            "id": "2",
                            "name": "On some visible place.",
                            "text": " You are not afraid to show your sexuality. Sex is part of our nature and there is no need to be having any taboos regarding its existence and nature. You like to show off you sexual attributes either by using clever jokes, exposing you body potential or any other way that you find adequate for you."
                        }
                    ]
                }
            },
            {
                "id": "5",
                "name": "Do you feel comfortable in handling the knife",
                "means": "Are you comfortable with your sexuality?",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "Yes.",
                            "text": " You are able to use sexuality when you want to achieve something. You know when to use it, how to use it, and what are the results that you can achieve."
                        },
                        {
                            "id": "2",
                            "name": "No.",
                            "text": " Using your sexuality to get something or to achieve something is not the way you prefer to do things. You would rather choose some other means and methods that are more transparent and acceptable for you to use."
                        }
                    ]
                }
            },
            {
                "id": "6",
                "name": "Do you feel skilled in handling the knife?",
                "means": "Are you masterful in using your sexuality?",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "Yes, I feel skilled as a professional.",
                            "text": " You feel that you are a master at using your sexuality to your own advantage. You do not have to think of the strategy, using it is built-in in every cell of your body."
                        },
                        {
                            "id": "2",
                            "name": "Not as a professional, but pretty comfortable that I can do with it what is necessary.",
                            "text": " You are sure that you can use you sexuality appropriately and skillfully whenever it is needed."
                        },
                        {
                            "id": "3",
                            "name": "No, I’m not. I’ll keep it on the side",
                            "text": " You are a bit unsecure when using your sexuality. You do feel more comfortable in using other ways to make your partner yield to your wishes like: kindness, compassion, love and devotion."
                        }
                    ]
                }
            },
            {
                "id": "7",
                "name": "Is the knife sharp?",
                "means": "Can you use sexuality as a tool?",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "Yes, extremely.",
                            "text": " You are aware of yours and other people's sexual potential. You are sure that sexuality can be used to achieve goals. Consequences of those actions do not preoccupy your mind, if somebody gets hurt - \"All is Fear in Love and War\"."
                        },
                        {
                            "id": "2",
                            "name": "Normal.",
                            "text": " You like to use sexuality in a fair game to reach mutual enjoyment. Sometimes you get hurt, sometimes you can hurt somebody as a result. As long as the intensions are good it is all normal part of the game."
                        },
                        {
                            "id": "3",
                            "name": "No, quite harmless.",
                            "text": " You like to treat sexual life as a fair game for mutual enjoyment; when it comes to somebody being hurt – you will try to minimize the number of the victims and depth of the cuts. You are not brutally ruthless, you like to think of the consequences of you sexual maneuvering to the other parties in the game."
                        }
                    ]
                }
            },
            {
                "id": "8",
                "name": "Can you use the knife to hurt somebody?",
                "means": "Do you have regards towards other people when using you sexuality?",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "Nope, cannot imagine the need of hurting somebody with it.",
                            "text": " You cannot imagine intensely using your sexuality to hurt somebody; you will probably try to resolve problems by other means. Sex should be used for mutual satisfaction of all participants."
                        },
                        {
                            "id": "2",
                            "name": "Only if necessary.",
                            "text": " You will never, generally, use your sexuality to intentionally hurt somebody. However, you are aware that you can hurt somebody and will do it but only when necessary and if you think that they have deserved to be hurt. You will not hurt someone just because you can. Sex should be used for mutual satisfaction of both participants."
                        },
                        {
                            "id": "3",
                            "name": "Yes, probably.",
                            "text": " You enjoy using you sexual powers, you enjoy in sexual seduction and cannot resist the need of using it. You are not deeply concerned about the consequences. As for the victims – they are responsible for their own behavior."
                        }
                    ]
                }
            },
            {
                "id": "9",
                "name": "Can you use the knife on a person that you like?",
                "means": "Can you intentionally hurt someone that you like?",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "Yes, I can.",
                            "text": " You like to use you sexuality to the maximum regardless of the situation and consequences. You get pleasure in conquering targets with your sexuality; you go by the rule: \"only the strongest survive\"."
                        },
                        {
                            "id": "2",
                            "name": "Maybe, only as a part of a naughty game.",
                            "text": " You, you do not like somebody to get seriously hurt. You enjoy using sexuality for spicing up the atmosphere. There is something kinky in your views on sex. You like to experiment a lot."
                        },
                        {
                            "id": "3",
                            "name": "No, not at all.",
                            "text": " You will never try to hurt someone intentionally using your sexuality, especially people that you like. You are always trying to be fair and clear regarding your intentions."
                        }
                    ]
                }
            },
            {
                "id": "10",
                "name": "Is this situation possible?",
                "message": "You are drawing your knife skin deep into your partner's chest as a part of a game. There is a little blood, but no pain.",
                "means": "How extreme do you want your sex to be?",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "Yes.",
                            "text": " You like to spice up you sexual life, you like kinky sex games. Probably S&M games are not so strange to you. "
                        },
                        {
                            "id": "2",
                            "name": "Possible in my mind, but not in real life.",
                            "text": " You would like to turn the volume on you sex life - spice up things, but at the same time you are afraid to explore them till the very end. If the right partner/situation comes along you will be open for more kinky behavior."
                        },
                        {
                            "id": "3",
                            "name": "No.",
                            "text": " S&M games are not your thing. You prefer healthy sexual life. S&M games are better on videos. "
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "14",
        "name": "Horse",
        "-productId": "com.sofisapps.personality.Horse",
        "intro": "Imagine a horse...",
        "className": "horse",
        "free": "true",
        "decription": "Your view on your current relationship",
        "question": [
            {
                "id": "1",
                "name": "What color is the horse?",
                "means": "Is your partner moral and traditional or powerful and magnetic?",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "White",
                            "text": " You think of your partner as considerate, traditional, romantic and moral person."
                        },
                        {
                            "id": "2",
                            "name": "Black",
                            "text": " You think of your partner as strong and powerful with a touch “bad boy/girl” attitude that you admire."
                        },
                        {
                            "id": "3",
                            "name": "Other",
                            "text": " You do not like stereotypical partners, you do like your partners for the specific things that he/she possesses."
                        }
                    ]
                }
            },
            {
                "id": "2",
                "name": "Is the horse near you?",
                "means": "Are you feeling close to your partner?",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "In the distance.",
                            "text": " You feel a certain distance between you and your partner. You are either intentionally giving him/her space that they need or you still do not feel that close to him/her."
                        },
                        {
                            "id": "2",
                            "name": "Close to you.",
                            "text": " You feel closeness with you partner."
                        }
                    ]
                }
            },
            {
                "id": "3",
                "name": "Is the horse bridled?",
                "means": "Do you like to control your relationship?",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "Yes",
                            "text": " You need to steer, advise, guide your partner. You like to feel in control of your relationship."
                        },
                        {
                            "id": "2",
                            "name": "No",
                            "text": " You are not a control freak. You trust your partner to make his/hers own independent decisions. You do not feel the need to completely control the relationship."
                        }
                    ]
                }
            },
            {
                "id": "4",
                "name": "Which activity with the horse will be the most rewarding one to you?",
                "means": "Which attribute of your relationship do you value the most?",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "To admire it from the distance.",
                            "text": " You like when your partner is independent and grand, you like to admire him/her from distance."
                        },
                        {
                            "id": "2",
                            "name": "To caress it.",
                            "text": " In your relationship most appreciated attributes for you are: closeness, tenderness and intimacy."
                        },
                        {
                            "id": "3",
                            "name": "To ride it in gallop.",
                            "text": " You like to be one with your partner; you feel that the relationship is giving you wings. You like doing things together as a team with the greatest possible dynamic."
                        },
                        {
                            "id": "4",
                            "name": "To ride it slowly.",
                            "text": " You like to be one with you partner, doing things together as a team is the relationship's attribute that you like the most."
                        }
                    ]
                }
            },
            {
                "id": "5",
                "name": "What is the horse doing?",
                "means": "What is your most preferred activity with your partner?",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "Running",
                            "text": " You like when you partner is dynamic, active and outgoing person."
                        },
                        {
                            "id": "2",
                            "name": "Relaxing",
                            "text": " You like when you partner is calm, slightly bohemian."
                        }
                    ]
                }
            },
            {
                "id": "6",
                "name": "Is the horse in a stable?",
                "means": "Are you jealous?",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "Yes.",
                            "text": " You would like you partner to be in controlled environment at home, work, or somewhere where he/she cannot easily get into trouble."
                        },
                        {
                            "id": "2",
                            "name": "No.",
                            "text": " You have confidence in you partner to be free in any environment - you are not jealously protective person."
                        }
                    ]
                }
            },
            {
                "id": "7",
                "name": "Do you think the horse needs training?",
                "means": "Do you want to change something with your partner?",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "Yes.",
                            "text": " You think that something may achieve more sophisticated level if somebody is working with your partner. You think that there is something in your partner that needs to be corrected."
                        },
                        {
                            "id": "2",
                            "name": "No.",
                            "text": " You like your partner as he/she is, you do not feel and urge to correct his behavior. He/she is what he/she is and you like him/her just like that.."
                        },
                        {
                            "id": "3",
                            "name": "Only small touches here and there.",
                            "text": " You are generally satisfied from your partner and his/hers behavior. There are only small thinly things, that if corrected, will make your relationship perfect."
                        }
                    ]
                }
            },
            {
                "id": "8",
                "name": "If the horse comes near you, you feel anxious?",
                "means": "Are you fully open/prepared for this relationship?",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "Probably.",
                            "text": " You are not the most secure person when it comes to sharing closeness and intimacy with your partner. There is something that is making you anxious about what will be his/hers next move."
                        },
                        {
                            "id": "2",
                            "name": "No.",
                            "text": " You feel comfortable and secure around your partner. You don't expect any unsuspected surprises."
                        }
                    ]
                }
            },
            {
                "id": "9",
                "name": "Are you scared to pat it?",
                "means": "Are you scared from sharing intimacy?",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "Yes.",
                            "text": " Intimacy wise, establishing a greater level of intimacy is making you feel kind of uneasy and anxious. You would rather have some healthy distance in your relationship at the moment."
                        },
                        {
                            "id": "2",
                            "name": "No.",
                            "text": " You are feeling comfortable in sharing closeness and tenderness with your partner. When you are in love, you are not scared  to show your feelings."
                        }
                    ]
                }
            },
            {
                "id": "10",
                "name": "Is the horse aware of your presence?",
                "means": "Is you partner considerate?",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "Yes.",
                            "text": " You are certain that your partner is aware of your presence, he/she knows your needs and wishes."
                        },
                        {
                            "id": "2",
                            "name": "No.",
                            "text": " You think that your partner is not fully aware of your presence, you think he/she is not familiar with your needs and wishes."
                        },
                        {
                            "id": "3",
                            "name": "I don't know.",
                            "text": " Is your partner aware of your presence? Is he/she aware of your needs and wishes – you are not preoccupied with answering these questions. You would rather be concerned with the inspection of your own feelings."
                        }
                    ]
                }
            },
            {
                "id": "11",
                "name": "Do you think that the horse likes it when you are close?",
                "means": "Do you think that you partner needs you?",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "Yes, I think that he/she is better with me around.",
                            "text": " You are certain that your partner is better off having you around, you are sure that he/she is sharing affection towards you."
                        },
                        {
                            "id": "2",
                            "name": "I think that he/she is indifferent to my presence.",
                            "text": " You think that your partner is independent and fee spirit, you are not sure if your closeness is always the best thing for him/her. It seems like he/she needs to have his/hers own space in order for your relationship to function."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "15",
        "name": "Room",
        "className": "room",
        "free": "true",
        "-productId": "com.sofisapps.personality.Room",
        "intro": "One morning you found yourself in an odd but familiar room,...",
        "decription": "Your view on your childhood",
        "question": [
            {
                "id": "1",
                "name": "What are you general feelings about the room?",
                "means": "How do you generally perceive you childhood",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "I like the room, I feel comfortable in it.",
                            "text": " You like your childhood experience. Protection, carelessness, safety - makes your heart warm just thinking about it."
                        },
                        {
                            "id": "2",
                            "name": "Normal, no special feelings.",
                            "text": " You are partly ambivalent regarding your childhood, you either do not perceive you childhood as a pretty extraordinary period of your life or you could not wait to grow up and start the more significant journey."
                        },
                        {
                            "id": "3",
                            "name": "I feel some kind of sadness and loneliness.",
                            "text": " You perceive your childhood as a sad period when you often had feelings of loneliness."
                        },
                        {
                            "id": "4",
                            "name": "I feel anxious.",
                            "text": " You feel some type anxiousness regarding your childhood; you do not perceive your childhood as a carless and safe period of your life."
                        }
                    ]
                }
            },
            {
                "id": "2",
                "name": "Is the room filled with light?",
                "means": "Is there some discomfort regarding your childhood?",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "Yes, it is filled with light.",
                            "text": " There is warm and pleasant feeling whenever you think about you childhood. Seems like you childhood was pretty beautiful period for you."
                        },
                        {
                            "id": "2",
                            "name": "Not much, it can use more light.",
                            "text": " There is some level of discomfort when you reminiscent about your childhood; there are some experiences that you would like to be different in order to have happier perception of your childhood."
                        },
                        {
                            "id": "3",
                            "name": "It is murky and I like it like that.",
                            "text": " Your childhood was not a picture perfect one, but you’ve come to some agreement and acceptance and you would not change it even if you could."
                        }
                    ]
                }
            },
            {
                "id": "3",
                "name": "Are there a lot of furnishings?",
                "means": "Number of childhood memories",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "Yes there are: pictures, pillows, lamps, curtains, etc.",
                            "text": " You have an overwhelming number of childhood memories, seems like everything just happened yesterday. You like to reminiscent about childhood."
                        },
                        {
                            "id": "2",
                            "name": "Normal, only the things I need to function.",
                            "text": "You have healthy amount of childhood memories. You do not mind to evoke childhood memories, but you do not feel cravings to return to that phase of your life."
                        },
                        {
                            "id": "3",
                            "name": "There is a lack of furnishing.",
                            "text": " You feel lack of memories regarding your childhood, you either do not like to evoke childhood memories for some reason or you are a person that is more interested about the future rather than the past."
                        }
                    ]
                }
            },
            {
                "id": "4",
                "name": "Are the room furnishings modest or expensive?",
                "means": "Perception of the childhood material status",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "Modest",
                            "text": " Your current material status, or the expectation for it, is better than you childhood material status. Gaining better material status for your family is something that you cannot ignore; it will always be in the background of you aspirations."
                        },
                        {
                            "id": "2",
                            "name": "Normal",
                            "text": " You did not notice or did not have a problem with the material things during you childhood. You are probably a person that does not pay a lot of attention on the material things of life. "
                        },
                        {
                            "id": "3",
                            "name": "Luxury",
                            "text": " You either have a feeling that the material status during your childhood was better than the one you have now or you have a romantic view of wellbeing in your childhood."
                        }
                    ]
                }
            },
            {
                "id": "5",
                "name": "What type of a room is it?",
                "means": "Interaction with authorities in childhood",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "Living room/kitchen",
                            "text": "You gave significance to authorities in your childhood, what they think, what they expect. You perceived that their experience and expectation will best serve your needs in life. You felt most safe and confident when you spent time close to your complete family. "
                        },
                        {
                            "id": "2",
                            "name": "Bedroom ",
                            "text": " You had great level of freedom and independence during your childhood, to be on your own with your hopes and dreams. You were pretty independent and rebellious as a child. You did not put great significance of what the authorities liked or did not liked."
                        },
                        {
                            "id": "3",
                            "name": "Bathroom ",
                            "text": " You probably were shy and independent as a child, you did not like authorities to oversee your every step, you liked to have you own space, just for yourself were you felt safe."
                        },
                        {
                            "id": "4",
                            "name": "Hotel room",
                            "text": " You were an adventurous person as a child and probably are one now. You like to travel, explore. You were pretty independent as a child. Authorities in your childhood were not that important in your latter life. "
                        }
                    ]
                }
            },
            {
                "id": "6",
                "name": "Is there a view (a window) to the outside world? ",
                "means": "What were your prospects for the future?",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "Yes, a beautiful one. ",
                            "text": " You had great expectations for the future ahead of you. You liked to dream and hope for the nice things in your future."
                        },
                        {
                            "id": "2",
                            "name": "No, I cannot see outside.",
                            "text": " You were confused regarding your future. You either did not want to leave your childhood comfort or you did not like to plan that much ahead.  The possibilities for the future were open and you will adapt to them as you go."
                        },
                        {
                            "id": "3",
                            "name": "Yes, something not desirable.",
                            "text": " You did not spend a lot of time planning a great future as a child. You were kind of scared of your responsibilities of adult life or you felt so comfortable in your childhood that you did not want to ever leave it."
                        }
                    ]
                }
            },
            {
                "id": "7",
                "name": "Are you inside or outside the room?",
                "means": "How comfortable are you in evoking childhood memories?",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "I’m in the room.",
                            "text": " You have normal attitude towards you childhood, you are not trying avoid thinking or evoking childhood memories."
                        },
                        {
                            "id": "2",
                            "name": "No, I’m not in the room.",
                            "text": " You felt that the childhood was so long ago, you do not like to spend a lot of time analyzing or thinking about it."
                        }
                    ]
                }
            },
            {
                "id": "8",
                "name": "Do you plan to leave the room?",
                "means": "Do you want to move on from childhood to adolescent life",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "Yes, I feel the urge to leave the room.",
                            "text": " You had plans for your adolescent life and you wanted to grow up as soon as possible. You wanted to get your destiny in to your own hands."
                        },
                        {
                            "id": "2",
                            "name": "No, I’m comfortable in the room, I like to be inside.",
                            "text": " You like the safety and carelessness of your childhood maybe a little too much. Childhood was a great period for you and you do not feel the urge to leave it behind."
                        },
                        {
                            "id": "3",
                            "name": "Yes, I will leave the room eventually.",
                            "text": " You liked the childhood period of your life, but you did not burden yourself with plans for the future. You were confident that when the time is right, you will make all the right steps."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "16",
        "name": "Beach",
        "className": "beach",
        "-productId": "com.sofisapps.personality.Beach",
        "intro": "Imagine you are walking to the beach..",
        "decription": "People relations",
        "question": [
            {
                "id": "1",
                "name": "How many people are there?",
                "means": "Number of people that you want around you",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "Full of people, busy beach",
                            "text": "You are extrovert person and most probably a party animal. Large gatherings, clubbing, bars, feel like home to you. You love the energy that you get from the crowds; you may also seek for an audience.  "
                        },
                        {
                            "id": "2",
                            "name": "Few dozen",
                            "text": "You are an extrovert person, you need interaction with a fair amount of people. You feel great at bars, social gatherings. Away from huge crowds, but with enough people to always have something new and interesting to do."
                        },
                        {
                            "id": "3",
                            "name": "A couple",
                            "text": "You like to spend time with people but at the same time you need some space to be on your own. You are seeking for right balance between spending time in other people's company and having a time for your own thoughts. You can be charming and social when needed but you like more intimate company. You think of this as the best way to interact with people. "
                        },
                        {
                            "id": "4",
                            "name": "Deserted beach",
                            "text": "You are reserved and introvert person. You do not mind spending some time alone, in fact you prefer being alone most of the time. You probably are avoiding large crowds because they make you uncomfortable and can drain or compromise you energy."
                        }
                    ]
                }
            },
            {
                "id": "2",
                "name": "How far is the beach? ",
                "means": "Are you always in a mood for socializing?",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "Far in the distance, more than a mile. ",
                            "text": " You like safe distance to observe, assess the situation before getting into party mode. You like to take some time on your own before getting into the next social event."
                        },
                        {
                            "id": "2",
                            "name": "I’m almost there",
                            "text": " You do not need a lot of preparation before getting into party mode. You can switch on and off easily if there are people around you."
                        }
                    ]
                }
            },
            {
                "id": "3",
                "name": "How far are the other people?",
                "means": "Do you want to have distance from the crowd?",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "They are close by. I can start chatting with someone if I want to.",
                            "text": " You are a person that can easily get into chit chat. You like being close to people and socializing. You will use every chance for establishing new friendships."
                        },
                        {
                            "id": "2",
                            "name": "They are in the distance.",
                            "text": "You are somewhat reserved person. You highly regard your own personal space. You enjoy having a relaxing time without being constantly bothered by other people, while at the same time you like the comfort of knowing that there will be people around you if you feel like you need to talk with someone. "
                        },
                        {
                            "id": "3",
                            "name": "There are no people around.",
                            "text": " You are pleased when being left alone with your thoughts. You are not worried that you might be missing something significant. "
                        }
                    ]
                }
            },
            {
                "id": "4",
                "name": "Are there familiar faces on the beach? ",
                "means": "Do you like unfamiliar crowds or you like to socialize mostly with familiar company.",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "Yes, all of them.",
                            "text": " You enjoy yourself the most when socializing with familiar people. Constantly seeking new people and getting to know them is not that much appealing to you. You do not like surprises."
                        },
                        {
                            "id": "2",
                            "name": "Some of them.",
                            "text": " You feel most comfortable if on a gathering there are familiar faces around you. Social gathering with total strangers make you anxious. "
                        },
                        {
                            "id": "3",
                            "name": "No, I do not recognize any familiar people. ",
                            "text": " You are not scared from introducing new faces in your life; you will utilize every opportunity to meet new people and exchange thoughts. Your social confidence level is high."
                        }
                    ]
                }
            },
            {
                "id": "5",
                "name": "Are you walking along or with some company?",
                "means": "Do you have a “wing man” when hitting social events?",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "Alone",
                            "text": "You do not depended on anyone special that needs to be with you when attending a social event. You are a self confident person that does not need someone to watch his back."
                        },
                        {
                            "id": "2",
                            "name": "Partner",
                            "text": " You feel most safe in a company of your partner when it comes to attending social gatherings. You are in a place when you social life is ONE with you partner."
                        },
                        {
                            "id": "3",
                            "name": "Friend/friends",
                            "text": " You are not a loner; you know how to form relationship with friends. You feel most confident when getting in social gatherings with friend/friends around."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "17",
        "name": "Driving",
        "className": "drive",
        "intro": "You and your partner are driving trough a new city to find a restaurant. You are in a new city with unfamiliar roads,and your partner is only partly familiar with the city. Your partner is giving you instructions on were to turn. After a while it turns out you are lost.",
        "decription": "Type of relationship with your partner",
        "type": "combination",
        "question": [
            {
                "id": "1",
                "name": "What would you most likely say?",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "I thought you knew the way!!"
                        },
                        {
                            "id": "2",
                            "name": "We enjoyed the drive anyway."
                        },
                        {
                            "id": "3",
                            "name": "I should have paid more attention. When we made that left turn back over there, I wanted to ask you about it but didn't. My fault."
                        }
                    ]
                }
            },
            {
                "id": "2",
                "name": "What will you most likely think in your mind?",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "I thought you knew the way!!"
                        },
                        {
                            "id": "2",
                            "name": "We enjoyed the drive anyway."
                        },
                        {
                            "id": "3",
                            "name": "I should have paid more attention. When we made that left turn back over there, I wanted to ask you about it but didn't. My fault."
                        }
                    ]
                }
            }
        ],
        "results": {
            "result": [
                {
                    "value": "11",
                    "text": "You are not a very forgiving person. You are quick in assigning responsibility to others. Hidden in the accusatory tone is also anger or dissatisfaction that you may or may not be related to the incident per se. You think of yourself as a perfectionist that always expects only the best from others."
                },
                {
                    "value": "12",
                    "text": "Understanding by nature, but you think that you need to put you your “mentor hat” when with your partner.  The need to use tough tone may not be related to the incident per se. Presenting “tough love” is a sign for some unbalance in your relationship. The relationship may be a truly sweet one, but practicing honesty can make it better."
                },
                {
                    "value": "13",
                    "text": "You have a self-effacing and self-accusatory relationship with your partner, but you are trying to hide it using camouflage methods like accusatory tone in tricky situations. Maybe you are feeling guilty for something not related to the incident per se. "
                },
                {
                    "value": "21",
                    "text": " You are not a very forgiving person in nature, but you are trying to solve some of your relationship unbalance by showing an easygoing and understanding nature. You are aware that your perfectionist's expectations should be tamed down a bit. You are on a good path to a sweet relationship."
                },
                {
                    "value": "22",
                    "text": "Easygoing and understanding in your attitude, you generally consider your partner equal to yourself. The readiness with which you tolerate your partner's errors indicates a desire to be treated the same way in similar situations. It seems that you enjoy your relationship and it is a truly sweet one."
                },
                {
                    "value": "23",
                    "text": "You are trying to demonstrate easygoing and understanding attitude towards your partner, probably from the desire to be treated the same way in similar situations, but deep down you are feeling some kind of guilt mixed with unrealistic responsibility maybe not related to the incident. "
                },
                {
                    "value": "31",
                    "text": "You are not a very forgiving person. You are quick in assigning responsibility to others, but are not ready to show it to your partner. You will present self-accusatory and accommodating nature to your partner.  Maybe you feel some insecurity toward your partner that is stopping you to show your true feeling or you feel some kind of guilt that does not have to be related to the incident per se."
                },
                {
                    "value": "32",
                    "text": "You are a easygoing and understanding person, but something in your relationship is stopping you to show your true feelings. You are trying to accommodate your partner's expectations maybe a little bit too much than necessary. A little more work should put your relationship on the right path to being a truly sweet one."
                },
                {
                    "value": "33",
                    "text": "Self-effacing and self-accusatory, you demonstrate a tendency to bend over backwards to accommodate your partner. The relationship may be a truly sweet one, but possibly hidden in the attitude is also a certain amount of insecurity. Lower your standards for self-perfectionism and you may be on a path to a truly sweet relationship."
                }
            ]
        }
    },
    {
        "id": "18",
        "name": "Super hero",
        "className": "superhero",
        "intro": "Choose a super hero power",
        "decription": "Fun things about yourself",
        "-showanswers": "true",
        "question": [
            {
                "id": "1",
                "name": "If you have to choose one which one would it be? ",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "The ability to fly.",
                            "text": " You cherish freedom the most. You are irritated by the restraints in the everyday life. You like to see the big picture of things, little details annoy you. You probably like to travel and see places. It is also possible that you like flying in order to have cool and special isolated places just for yourself – the sky.",
                            "p": " Career choices: Movement artist, sports, job that will give you ability to shape policies, research group, traveling related jobs like a tourist guide, astronaut, pilot, design, architect."
                        },
                        {
                            "id": "2",
                            "name": "Time-travel ability.",
                            "text": "You are confident, self-sufficient and curious person with a desire to explore and experience things on your own. You love adventures. Emotions and attachments are not you best feature. You are fascinated by the changes that the different eras bring to humanity. You are interested in the causes of things and how past mistakes can be used to shape the future. You are probably in love with a different era, one that has passed or most probably curious about the future and you cannot wait for it to happen.",
                            "p": " Career choices: scientific research, human behavior, history, work that require self-sufficiency."
                        },
                        {
                            "id": "3",
                            "name": "Invisibility.",
                            "text": "You are probably introvert and curious person. You tend to be shy, or a very keen observer. Or both. You like to know everything that is going on around you. You are probably choosing safe options in life.",
                            "p": " Career choices: A writer, quality assurance, artist, or a private investigator."
                        },
                        {
                            "id": "4",
                            "name": "The power to change forms.",
                            "text": "You are a sociable person who likes to fit in. Perhaps you want to be admired by the group. Either way, you're a real crowd pleaser! You probably have the desire to experience the day trough someone else’s eyes.",
                            "p": " Career choices: Entertainment is probably you best option."
                        },
                        {
                            "id": "5",
                            "name": "The ability to read minds.",
                            "text": "You are mostly fascinated by social interaction between people. You're good at guessing what other people think or feel. You can read between the lines.",
                            "p": " Career choices: Most of the things that require understanding of the human nature: trade, psychology, advertisement, counselor, advocate, politics."
                        },
                        {
                            "id": "6",
                            "name": "Ability to mass-hypnotize.",
                            "text": "Power is probably you main fascination. You like to be in charge. You do not like to lose any fights. Other people's admiration is probably very important to you.",
                            "p": "Career choices: Politics, magician :), any management job,military,finance."
                        },
                        {
                            "id": "7",
                            "name": "Talking to animals.",
                            "text": "Honesty, simplicity and sincerity are you main features.  You long for a simpler world where deeds are appreciated for what they are. You like to protect the defenseless.",
                            "p": "Career choices: Anything to do with animals: veterinarian,zoologist,anything connected to ecology and protecting the earth, protecting the defenseless. Social worker. "
                        },
                        {
                            "id": "8",
                            "name": "Control the time, forward, stop, reverse for everything.",
                            "text": " You are a perfectionist. You like to buy time to change or make things better. You like to be in control of the situation. You like to explore how the cause and effect are connected. You probably can spend a lot of time over thinking you decisions and seeking perfection or overlooked answers.",
                            "p": " Career choices: medicine, science research, detective. "
                        },
                        {
                            "id": "9",
                            "name": "Seeing the future",
                            "text": "You are very creative, curious and love adventure. You would move right into the future if you could! You are always looking at what might be possible, and wondering how to make it happen sooner. You cherish your life's connections and attachments so you are not choosing to travel in time alone.",
                            "p": "Career clue: A career at the cutting edge of things may be right for you. Think about becoming an explorer, research scientist, inventor, or science fiction writer."
                        },
                        {
                            "id": "10",
                            "name": "Super strength.",
                            "text": "Strength and endurance are your main fascination. You long for a world where deeds are appreciated for what they are. You like to finish things on your own. You like to help others in need, to be a protector and gardian.",
                            "p": "  Carrier choices: Sports, military, police force, body-builder, construction "
                        }
                    ]
                }
            },
            {
                "id": "2",
                "name": "Bonus☺, you have to choose additional super power, what will you choose?",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "The ability to fly.",
                            "text": "You cherish freedom the most. You are irritated by the restraints in the everyday life. You like to see the big picture of things, little details annoy you. You probably like to travel and see places. It is also possible that you like flying in order to have cool and special isolated places just for yourself – the sky.",
                            "p": " Career choices: Movement artist, sports, job that will give you ability to shape policies, research group, traveling related jobs like a tourist guide, astronaut, pilot, design, architect."
                        },
                        {
                            "id": "2",
                            "name": "Time-travel ability.",
                            "text": "You are confident, self-sufficient and curious person with a desire to explore and experience things on your own. You love adventures. Emotions and attachments are not you best feature. You are fascinated by the changes that the different eras bring to humanity. You are interested in the causes of things and how past mistakes can be used to shape the future. You are probably in love with a different era, one that has passed or most probably curious about the future and you cannot wait for it to happen.",
                            "p": " Career choices: scientific research, human behavior, history, work that require self-sufficiency."
                        },
                        {
                            "id": "3",
                            "name": "Invisibility.",
                            "text": "You are probably introvert and curious person. You tend to be shy, or a very keen observer. Or both. You like to know everything that is going on around you. You are probably choosing safe options in life.",
                            "p": " Career choices: A writer, quality assurance, artist, or a private investigator."
                        },
                        {
                            "id": "4",
                            "name": "The power to change forms.",
                            "text": "You are a sociable person who likes to fit in. Perhaps you want to be admired by the group. Either way, you're a real crowd pleaser! You probably have the desire to experience the day trough someone else’s eyes. ",
                            "p": " Career choices: Entertainment is probably you best option."
                        },
                        {
                            "id": "5",
                            "name": "The ability to read minds.",
                            "text": "You are mostly fascinated by social interaction between people. You're good at guessing what other people think or feel. You can read between the lines.",
                            "p": " Career choices: Most of the things that require understanding of the human nature: trade, psychology, advertisement, counselor, advocate, politics."
                        },
                        {
                            "id": "6",
                            "name": "Ability to mass-hypnotize.",
                            "text": "Power is probably you main fascination. You like to be in charge. You do not like to lose any fights. Other people's admiration is probably very important to you.",
                            "p": "Career choices: Politics, magician :), any management job,military,finance."
                        },
                        {
                            "id": "7",
                            "name": "Talking to animals.",
                            "text": "Honesty, simplicity and sincerity are you main features.  You long for a simpler world where deeds are appreciated for what they are. You like to protect the defenseless.",
                            "p": "Career choices: Anything to do with animals: veterinarian,zoologist,anything connected to ecology and protecting the earth,protecting the defenseless. Social worker."
                        },
                        {
                            "id": "8",
                            "name": "Control the time, forward, stop, reverse for everything.",
                            "text": "You are a perfectionist. You like to buy time to change or make things better. You like to be in control of the situation. You like to explore how the cause and effect are connected. You probably can spend a lot of time over thinking you decisions and seeking perfection or overlooked answers.",
                            "p": " Career choices: medicine, science research, detective. "
                        },
                        {
                            "id": "9",
                            "name": "Seeing the future.",
                            "text": "You are very creative, curious and love adventure. You would move right into the future if you could! You are always looking at what might be possible, and wondering how to make it happen sooner. You cherish your life's connections and attachments so you are not choosing to travel in time alone.",
                            "p": "Career clue: A career at the cutting edge of things may be right for you. Think about becoming an explorer, research scientist, inventor, or science fiction writer."
                        },
                        {
                            "id": "10",
                            "name": "Super strength.",
                            "text": "Strength and endurance are your main fascination. You long for a world where deeds are appreciated for what they are. You like to finish things on your own. You like to help others in need, to be a protector and gardian.",
                            "p": "  Carrier choices: Sports, military, police force, body-builder, construction "
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "19",
        "name": "Walking",
        "className": "walking",
        "-productId": "com.sofisapps.personality.Walking",
        "intro": "You need to go to your boyfrend/girlfrend house",
        "decription": "Dealing with the relationship",
        "question": [
            {
                "id": "1",
                "name": "You are walking to your boyfriend's/girlfriend's house. There are two roads to get there. One is a straight path which takes you there quickly, but is very plain and boring. The other is curvy and full of wonderful sights on the way, but takes quite a while to reach your  loved one's house. Which path do you choose?",
                "means": "How easily do you fall in love",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "Short",
                            "text": "You fall in love quickly and easily."
                        },
                        {
                            "id": "2",
                            "name": "Long",
                            "text": "You take your time and do not fall in love easily."
                        }
                    ]
                }
            },
            {
                "id": "2",
                "name": "On the way, you see two rose bushes. One is full of white roses. The other is full of red roses. You decide to pick 20 roses for your boyfriend/girlfriend. What color combination do you choose?",
                "means": "Are you more of a giver or a receiver in the relationship? ",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "Only red",
                            "text": "When you analyze your relationship your main focus is how much you are giving in a relationship."
                        },
                        {
                            "id": "2",
                            "name": "Only white",
                            "text": "When you analyze your relationship you are focused only on how much you are getting from the relationship."
                        },
                        {
                            "id": "3",
                            "name": "Half and half",
                            "text": "When you analyze your relationship you are focus on the balance, you expect that your giving is equally met from the other party. You expect a balanced relationship."
                        },
                        {
                            "id": "4",
                            "name": "More red than white",
                            "text": "When you analyze your relationship you are more focused on how much you give. You are not concerned if your giving is not equally met from the other party."
                        },
                        {
                            "id": "5",
                            "name": "More white than red",
                            "text": "When you analyze your relationship you are more focused on how much you can get, you are not concerned if the other party does not get an equal share. "
                        }
                    ]
                }
            },
            {
                "id": "3",
                "name": "You finally get to your boyfriend's/girlfriend's house. You ring the bell and the maid answers. You can ask the maid to please get your loved one, or you may go and get them yourself. Which action do you take?",
                "means": "Attitude in handling relationship problems",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "Ask the maid.",
                            "text": " You are avoiding direct approach in solving relationship problems. You feel that you are right, but you like when there is a third party involved reassuring you. You care about other people's opinion in solving your type of problem. "
                        },
                        {
                            "id": "2",
                            "name": "Do it yourself.",
                            "text": " You are pretty direct. If there is a problem, you confront it and deal with it. You want to work it out right away."
                        }
                    ]
                }
            },
            {
                "id": "4",
                "name": "Now, you go up to your girlfriend's/boyfriend's room. No one is there. You can leave the roses by the window sill, or on the bed.Where do you put the roses?",
                "means": "The placement of the roses indicates how often you'd like to see your boyfriend/girlfriend.",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "On the bed.",
                            "text": " Placing the roses on the bed means you need lots of reassurance in the relationship, and you'd want to see your loved one every day, if possible."
                        },
                        {
                            "id": "2",
                            "name": "Near the window.",
                            "text": " Placing the roses by the window show that you don't expect or need to see your loved one too often."
                        }
                    ]
                }
            },
            {
                "id": "5",
                "name": "Later, it’s time for bed. You and your loved one go to sleep, in separate rooms. You wake up in the morning, and go to your boyfriend's/girlfriend's room to check up on him/her. You enter the room:Is he/she awake or sleeping?",
                "means": "Do you want to change your boyfriend/girlfriend?",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "Awake",
                            "text": " You accept your loved one just as the way they are."
                        },
                        {
                            "id": "2",
                            "name": "Sleeping",
                            "text": "You expect of him/her to change for you."
                        }
                    ]
                }
            },
            {
                "id": "6",
                "name": "It's time to go home now, and you start to head back. You can take either road home now: The plain, boring one that gets you home fast;  or the curvy, sight-filled road that you can just casually take your             time with. Which road do you choose now?",
                "means": "How willing are you to fight for your relationship?",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "Long",
                            "text": " You tend to stay in love for a long time."
                        },
                        {
                            "id": "2",
                            "name": "Short",
                            "text": "You do not agonize over the relationship, when you feel things are not working out, you're quickly up and ready for the next thing.  "
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "20",
        "name": "Know yourself",
        "className": "know",
        "-productId": "com.sofisapps.personality.KnowYourself",
        "intro": "Clear your mind and ...",
        "decription": "Your views on life",
        "question": [
            {
                "id": "1",
                "name": "Imagine that you are walking along a path. What do you see around you?",
                "means": "Your view on yourself",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "Forest, so much forest that you can hardly see the sky.",
                            "text": " Other people find you very interesting, but you are really hiding your true self. Your friends love you because you are a good listener. They'll probably still love you if you learn to be yourself with them."
                        },
                        {
                            "id": "2",
                            "name": "A yellow corn field against a brilliant blue sky.",
                            "text": " You are intelligent, honest and sweet. You are friendly to everybody and don't like conflict. Because you're so cheerful and fun people are naturally attracted to you and like to talk to you."
                        },
                        {
                            "id": "3",
                            "name": "Softly sloping green hills, with a view of mountains in the distance.",
                            "text": " You are down-to-earth and people like you because you are so straightforward. You are an efficient problem solver because you will listen to both sides of an argument before making a decision that usually appeals to both parties."
                        }
                    ]
                }
            },
            {
                "id": "2",
                "name": "What do you see near your feet?",
                "means": "The type of girlfriend/boyfriend you are looking for",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "A mirror",
                            "text": " You are not looking merely for a girlfriend/boyfriend - you are looking for your life partner. Perhaps you should be more open-minded about who you spend time with. The person you are looking for might hide their charm under their exterior."
                        },
                        {
                            "id": "2",
                            "name": "A ring",
                            "text": " You are a true romantic. When you are in love, you will do anything and everything to keep your love true."
                        },
                        {
                            "id": "3",
                            "name": "A bottle",
                            "text": " You like serious, smart and determined people. You don't judge a book by its cover, so good-looking people aren't necessarily your style. This makes you an attractive person in many people's eyes."
                        }
                    ]
                }
            },
            {
                "id": "3",
                "name": "Will you pick it up?",
                "means": "Your readiness to commit to a relationship",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "Yes",
                            "text": "You are ready to commit as soon as you meet the right person. You believe you will pretty much know that it's the right one as soon as you meet that person."
                        },
                        {
                            "id": "2",
                            "name": "No",
                            "text": " You prefer to get to know a person very well before deciding whether you will commit to the relationship."
                        }
                    ]
                }
            },
            {
                "id": "4",
                "name": "You walk along and find water. In what form is the water?",
                "means": "The seriousness of your love",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "A lake",
                            "text": "You are very serious about relationships and aren't interested in wasting time with people you don't really like. If you meet the right person, you will fall deeply and beautifully in love."
                        },
                        {
                            "id": "2",
                            "name": "A waterfall",
                            "text": "You like to flirt and behave seductively. The opposite sex finds this very attractive, and that's why you'll always have admirers hanging off your arms. But how serious are you about choosing someone to be in a relationship with?"
                        },
                        {
                            "id": "3",
                            "name": "A river",
                            "text": " Your have very sensible tactics when approaching the opposite sex. In many ways people find your straightforwardness attractive, so you will find yourself with plenty of dates."
                        }
                    ]
                }
            },
            {
                "id": "5",
                "name": "You see a key in the water and you pick it up. What does it look like?",
                "means": "Your views on education",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "An ordinary house key",
                            "text": " Education is less important than the real world out there, away from the classroom. Deep inside you want to start working, earning money and living on your own."
                        },
                        {
                            "id": "2",
                            "name": "A beautiful antique key",
                            "text": "Education is very important in life. You want to study hard and learn as much as you can."
                        },
                        {
                            "id": "3",
                            "name": "A small silver locker key",
                            "text": " You may not like to study but you have many practical ideas. You listen to your own instincts and tend to follow your heart, so you will probably end up with an unusual job."
                        }
                    ]
                }
            },
            {
                "id": "6",
                "name": "Next you stumble across a house. What type of a house is it?",
                "means": "The right job for you",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "A spacious Hollywood mansion",
                            "text": " You have many goals and want to achieve as much as you can. The jobs you enjoy are those that let you burn off your considerable excess of energy."
                        },
                        {
                            "id": "2",
                            "name": "A hut with a garden full of flowers",
                            "text": "You're a practical person and will choose a secure job with a steady income. Knowing what you like to do is important. Find a regular job doing just that and you'll be set for life."
                        },
                        {
                            "id": "3",
                            "name": " A beautiful old stone castle",
                            "text": "You have plenty of dream jobs but have little chance of doing any of them if you don't focus on something in particular. You need to choose something and go for it to be happy and achieve success."
                        }
                    ]
                }
            },
            {
                "id": "7",
                "name": "What do you do next?",
                "means": "How do you view success",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "Look into the window",
                            "text": "You are afraid of failure and scared to have a go at the career you would like to have in case you don't succeed. Don't give up when you haven't yet even started! Be courageous!"
                        },
                        {
                            "id": "2",
                            "name": "Walk right on inside and explore",
                            "text": "You are confident that you will be successful in your chosen career and nothing will stop you from trying."
                        },
                        {
                            "id": "3",
                            "name": "Walk away. You're not that interested.",
                            "text": " Success in your career is not the most important thing in life. You are content with what you have and think that being with someone you love is more than spending all of your precious time just working."
                        }
                    ]
                }
            },
            {
                "id": "8",
                "name": "Suddenly, something jumps out at you. What is it?",
                "means": "What are you most afraid of?",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "A bear",
                            "text": "You are afraid of having no one to rely on in times of trouble. You don't ever want to be unable to take care of yourself. Independence is important to you."
                        },
                        {
                            "id": "2",
                            "name": "A wizard",
                            "text": "You are afraid of things that you cannot control. Sometimes you express anger to cover up how you feel."
                        },
                        {
                            "id": "3",
                            "name": "A spider",
                            "text": "You are concerned about your image and the way others see you. This means that you try very hard to be accepted by other people. It's time for you to believe in who you are, not what you wear."
                        }
                    ]
                }
            },
            {
                "id": "9",
                "name": "Because you are so scared, you run until you see a wall blocking the path in front of you. There is a door, but it's locked, so you peek through the key hole. What do you see?",
                "means": "Who is your true self?",
                "answers": {
                    "answer": [
                        {
                            "id": "1",
                            "name": "A beautiful house with a vast garden.",
                            "text": "You are mature, reasonable, honest and give good advice. People ask for your comments on all sorts of different issues. Sometimes you might find yourself in a dilemma when trapped with a problem, which your heart rather than your head needs to solve."
                        },
                        {
                            "id": "2",
                            "name": "A pond in the middle of a desert.",
                            "text": " You like privacy very much because you enjoy spending time with your own thoughts. You like to disappear when you cannot find solutions to your own problems, but you would feel better if you learned to share your thoughts with a person you trust."
                        },
                        {
                            "id": "3",
                            "name": "A beach with waves crashing onto the sand.",
                            "text": "You are full of energy and confidence. You are unpredictable, with moods changing as quickly as an ocean. You might occasionally be calm and still, but never for long."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "25",
        "name": "State of mind",
        "className": "colortest",
        "intro": "In this test you will have to tap on the colors that you most like. <p>Do not relate colors to the clothes, furniture and decor or similar, just pick color that is most appealing from the one left on the screen until there is no colors left.",
        "decription": "Esiest and very insitful test",
        "type": "colortest",
        "question": [
            {
                "id": "1",
                "name": "Order colors from one that you most like to the one that you least like",
                "answers": {
                    "answer": [
                        {
                            "id": "0",
                            "name": "gray"
                        },
                        {
                            "id": "1",
                            "name": "blue"
                        },
                        {
                            "id": "2",
                            "name": "green"
                        }
                        ,
                        {
                            "id": "3",
                            "name": "red"
                        }
                        ,
                        {
                            "id": "4",
                            "name": "yellow"
                        }
                        ,
                        {
                            "id": "5",
                            "name": "violet"
                        }
                        ,
                        {
                            "id": "6",
                            "name": "brown"
                        }
                        ,
                        {
                            "id": "7",
                            "name": "black"
                        }
                    ]
                }
            },
            {
                "id": "2",
                "name": "Please waith  minute before proseeding with the next question",
                "callback": true,
                "answers": {
                    "answer": []
                }
            },
            {
                "id": "3",
                "name": "Order colors from most to least appeling, again",
                "answers": {
                    "answer": [
                        {
                            "id": "0",
                            "name": "gray"
                        },
                        {
                            "id": "1",
                            "name": "blue"
                        },
                        {
                            "id": "2",
                            "name": "green"
                        }
                        ,
                        {
                            "id": "3",
                            "name": "red"
                        }
                        ,
                        {
                            "id": "4",
                            "name": "yellow"
                        }
                        ,
                        {
                            "id": "5",
                            "name": "violet"
                        }
                        ,
                        {
                            "id": "6",
                            "name": "brown"
                        }
                        ,
                        {
                            "id": "7",
                            "name": "black"
                        }
                    ]
                }
            }
        ],
        "results": {
            "result": [
                {
                    "value": "11",
                    "text": "You are not a very forgiving person. You are quick in assigning responsibility to others. Hidden in the accusatory tone is also anger or dissatisfaction that you may or may not be related to the incident per se. You think of yourself as a perfectionist that always expects only the best from others."
                },
                {
                    "value": "12",
                    "text": "Understanding by nature, but you think that you need to put you your “mentor hat” when with your partner.  The need to use tough tone may not be related to the incident per se. Presenting “tough love” is a sign for some unbalance in your relationship. The relationship may be a truly sweet one, but practicing honesty can make it better."
                },
                {
                    "value": "13",
                    "text": "You have a self-effacing and self-accusatory relationship with your partner, but you are trying to hide it using camouflage methods like accusatory tone in tricky situations. Maybe you are feeling guilty for something not related to the incident per se. "
                },
                {
                    "value": "21",
                    "text": " You are not a very forgiving person in nature, but you are trying to solve some of your relationship unbalance by showing an easygoing and understanding nature. You are aware that your perfectionist's expectations should be tamed down a bit. You are on a good path to a sweet relationship."
                },
                {
                    "value": "22",
                    "text": "Easygoing and understanding in your attitude, you generally consider your partner equal to yourself. The readiness with which you tolerate your partner's errors indicates a desire to be treated the same way in similar situations. It seems that you enjoy your relationship and it is a truly sweet one."
                },
                {
                    "value": "23",
                    "text": "You are trying to demonstrate easygoing and understanding attitude towards your partner, probably from the desire to be treated the same way in similar situations, but deep down you are feeling some kind of guilt mixed with unrealistic responsibility maybe not related to the incident. "
                },
                {
                    "value": "31",
                    "text": "You are not a very forgiving person. You are quick in assigning responsibility to others, but are not ready to show it to your partner. You will present self-accusatory and accommodating nature to your partner.  Maybe you feel some insecurity toward your partner that is stopping you to show your true feeling or you feel some kind of guilt that does not have to be related to the incident per se."
                },
                {
                    "value": "32",
                    "text": "You are a easygoing and understanding person, but something in your relationship is stopping you to show your true feelings. You are trying to accommodate your partner's expectations maybe a little bit too much than necessary. A little more work should put your relationship on the right path to being a truly sweet one."
                },
                {
                    "value": "33",
                    "text": "Self-effacing and self-accusatory, you demonstrate a tendency to bend over backwards to accommodate your partner. The relationship may be a truly sweet one, but possibly hidden in the attitude is also a certain amount of insecurity. Lower your standards for self-perfectionism and you may be on a path to a truly sweet relationship."
                }
            ]
        }
    },
    {
        "id": "26",
        "name": "Strawberry Fields",
        "className": "strawberry",
        "intro": "In this test you will have to tap on the colors that you most like. <p>Do not relate colors to the clothes, furniture and decor or similar, just pick color that is most appealing from the one left on the screen until there is no colors left.",
        "decription": "Esiest and very insitful test",
        "type": "colortest",
        "question": []
    },
    {
        "id": "30",
        "name": "Color4",
        "className": "forest",
        "type": "4colors",
        "free": "true",
        "noFooterIndicator": true,
        "intro": "As a KID I was ... <br> Please answer the following question",
        "decription": "what color are you",
        "question": [
            {
                "id": 1,
                "answers": {
                    "answer": [{
                        "id": 0,
                        "name": "proactive",
                        "descr": "Acting positive, pre-emptive in resolving problems",
                        "res": "R"
                    }, {
                        "id": 1,
                        "name": "nurturing",
                        "descr": "Caring, concerned, attentive",
                        "res": "B"
                    }, {
                        "id": 2,
                        "name": "objective",
                        "descr": "Displaying clear and unbiased judgment, fair",
                        "res": "W"
                    }, {
                        "id": 3,
                        "name": "insightful",
                        "descr": "Being perceptive of subtle ideas or concepts",
                        "res": "Y"
                    }]
                }
            }, {
                "id": 2,
                "answers": {
                    "answer": [{
                        "id": 0,
                        "name": "indecisive",
                        "descr": "Uncertain, hesitant, ambivalent",
                        "res": "W"
                    }, {
                        "id": 1,
                        "name": "arrogant",
                        "descr": "Puffed up, conceited, air of superiority",
                        "res": "R"
                    }, {
                        "id": 2,
                        "name": "a perfectionist",
                        "descr": "Insistent on eliminating all flaws and error",
                        "res": "B"
                    }, {
                        "id": 3,
                        "name": "poor follow-through",
                        "descr": "Not seeing things through to the end",
                        "res": "Y"
                    }]
                }
            }, {
                "id": 3,
                "answers": {
                    "answer": [{
                        "id": 0,
                        "name": "enthusiastic",
                        "descr": "Eager, spirited, energetic",
                        "res": "Y"
                    }, {
                        "id": 1,
                        "name": "kind",
                        "descr": "Gentle, pleasant, considerate",
                        "res": "W"
                    }, {
                        "id": 2,
                        "name": "caring",
                        "descr": "Feeling and exhibiting concern and empathy for others",
                        "res": "B"
                    }, {
                        "id": 3,
                        "name": "productive",
                        "descr": "Efficient, resourceful, constructive",
                        "res": "R"
                    }]
                }
            }, {
                "id": 4,
                "answers": {
                    "answer": [{
                        "id": 0,
                        "name": "relentless",
                        "descr": "Unyielding in severity or strictness",
                        "res": "R"
                    }, {
                        "id": 1,
                        "name": "suspicious",
                        "descr": "Distrustful, skeptical, wary",
                        "res": "B"
                    }, {
                        "id": 2,
                        "name": "indifferent",
                        "descr": "Apathetic, emotionally detached",
                        "res": "Y"
                    }, {
                        "id": 3,
                        "name": "naive",
                        "descr": "Trusting, gullible, unsuspecting",
                        "res": "W"
                    }]
                }
            }, {
                "id": 5,
                "answers": {
                    "answer": [{
                        "id": 0,
                        "name": "peaceful",
                        "descr": "Calm, quiet, serene, gentle",
                        "res": "W"
                    }, {
                        "id": 1,
                        "name": "carefree",
                        "descr": "Living in the moment, lighthearted, worry-free",
                        "res": "Y"
                    }, {
                        "id": 2,
                        "name": "decisive",
                        "descr": "Conclusive, ready to act now",
                        "res": "R"
                    }, {
                        "id": 3,
                        "name": "loyal",
                        "descr": "Dependable, faithful, reliable",
                        "res": "B"
                    }]
                }
            }, {
                "id": 6,
                "answers": {
                    "answer": [{
                        "id": 0,
                        "name": "silently stubborn",
                        "descr": "Quietly inflexible, obstinate",
                        "res": "W"
                    }, {
                        "id": 1,
                        "name": "worry prone",
                        "descr": "Inclined to feel concerned or anxious",
                        "res": "B"
                    }, {
                        "id": 2,
                        "name": "an interrupter",
                        "descr": "Speaking before others are finished",
                        "res": "Y"
                    }, {
                        "id": 3,
                        "name": "obsessive",
                        "descr": "Excessively preoccupied with ideas, people, emotions, and/or behavior",
                        "res": "R"
                    }]
                }
            }, {
                "id": 7,
                "answers": {
                    "answer": [{
                        "id": 0,
                        "name": "sociable",
                        "descr": "Friendly, outgoing, displaying \"people skills\"",
                        "res": "Y"
                    }, {
                        "id": 1,
                        "name": "assertive",
                        "descr": "Direct, to the point, determined",
                        "res": "R"
                    }, {
                        "id": 2,
                        "name": "intimate",
                        "descr": "Desiring close relationships with others",
                        "res": "B"
                    }, {
                        "id": 3,
                        "name": "non-discriminate",
                        "descr": "Not prejudiced or disregarding of individual merit",
                        "res": "W"
                    }]
                }
            }, {
                "id": 8,
                "answers": {
                    "answer": [{
                        "id": 0,
                        "name": "self-critical",
                        "descr": "Self deprecating, finding fault with self",
                        "res": "B"
                    }, {
                        "id": 1,
                        "name": "bossy",
                        "descr": "Pushy, overbearing, dictatorial",
                        "res": "R"
                    }, {
                        "id": 2,
                        "name": "unfocused",
                        "descr": "Easily distracted, unable to concentrate",
                        "res": "Y"
                    }, {
                        "id": 3,
                        "name": "avoids conflict",
                        "descr": "Preferring quiet path of least resistance; avoiding disagreement",
                        "res": "W"
                    }]
                }
            }, {
                "id": 9,
                "answers": {
                    "answer": [{
                        "id": 0,
                        "name": "voice of reason",
                        "descr": "Bringing a sound sense of practicality",
                        "res": "B"
                    }, {
                        "id": 1,
                        "name": "flexible",
                        "descr": "Adjusting readily to changing conditions",
                        "res": "Y"
                    }, {
                        "id": 2,
                        "name": "action-oriented",
                        "descr": "Motivated to do or to make things happen",
                        "res": "R"
                    }, {
                        "id": 3,
                        "name": "analytical",
                        "descr": "Complex reasoning, organized, careful",
                        "res": "W"
                    }]
                }
            }, {
                "id": 10,
                "answers": {
                    "answer": [{
                        "id": 0,
                        "name": "critical of others",
                        "descr": "Inclined to criticize or find fault in others",
                        "res": "R"
                    }, {
                        "id": 1,
                        "name": "disinterested",
                        "descr": "not interested, unable to be inspired or moved",
                        "res": "W"
                    }, {
                        "id": 2,
                        "name": "overly sensitive",
                        "descr": "Quick to take offense, touchy",
                        "res": "B"
                    }, {
                        "id": 3,
                        "name": "irresponsible",
                        "descr": "Not reliable, lacking accountability",
                        "res": "Y"
                    }]
                }
            }, {
                "id": 11,
                "answers": {
                    "answer": [{
                        "id": 0,
                        "name": "determined",
                        "descr": "Firm, resolute, not giving up",
                        "res": "R"
                    }, {
                        "id": 1,
                        "name": "thoughtful",
                        "descr": "Considerate, attentive, concerned",
                        "res": "B"
                    }, {
                        "id": 2,
                        "name": "a good listener",
                        "descr": "Listening patiently/attentively without judgment",
                        "res": "W"
                    }, {
                        "id": 3,
                        "name": "positive",
                        "descr": "Upbeat, optimistic, encouraging, hopeful",
                        "res": "Y"
                    }]
                }
            }, {
                "id": 12,
                "answers": {
                    "answer": [{
                        "id": 0,
                        "name": "unmotivated",
                        "descr": "Not easily moved to action, inactive",
                        "res": "W"
                    }, {
                        "id": 1,
                        "name": "vain",
                        "descr": "Conceited, self-centered, egotistical",
                        "res": "Y"
                    }, {
                        "id": 2,
                        "name": "demanding",
                        "descr": "Overly pressuring and commanding",
                        "res": "R"
                    }, {
                        "id": 3,
                        "name": "unforgiving",
                        "descr": "Holding grudges",
                        "res": "B"
                    }]
                }
            }, {
                "id": 13,
                "answers": {
                    "answer": [{
                        "id": 0,
                        "name": "happy",
                        "descr": "Cheerful, high-spirited, joyful",
                        "res": "Y"
                    }, {
                        "id": 1,
                        "name": "compassionate",
                        "descr": "Caring, empathetic, considerate",
                        "res": "B"
                    }, {
                        "id": 2,
                        "name": "inventive",
                        "descr": "Creative, imaginative, practical solutions",
                        "res": "W"
                    }, {
                        "id": 3,
                        "name": "responsible",
                        "descr": "Accountable, reliable, follows through",
                        "res": "R"
                    }]
                }
            }, {
                "id": 14,
                "answers": {
                    "answer": [{
                        "id": 0,
                        "name": "impulsive",
                        "descr": "Hasty, not thinking before acting",
                        "res": "Y"
                    }, {
                        "id": 1,
                        "name": "impatient",
                        "descr": "Restless, hasty, intolerant",
                        "res": "R"
                    }, {
                        "id": 2,
                        "name": "moody",
                        "descr": "Sulky, temperamental, uneven emotionally",
                        "res": "B"
                    }, {
                        "id": 3,
                        "name": "indirect communicator",
                        "descr": "Not straightforward, beating around the bush",
                        "res": "W"
                    }]
                }
            }, {
                "id": 15,
                "answers": {
                    "answer": [{
                        "id": 0,
                        "name": "a leader",
                        "descr": "Naturally taking charge or stewardship of a group",
                        "res": "R"
                    }, {
                        "id": 1,
                        "name": "patient",
                        "descr": "Calmly enduring discomfort or provocation",
                        "res": "W"
                    }, {
                        "id": 2,
                        "name": "fun-loving",
                        "descr": "Enjoying the moment, playful",
                        "res": "Y"
                    }, {
                        "id": 3,
                        "name": "respectful",
                        "descr": "Polite, gracious, courteous",
                        "res": "B"
                    }]
                }
            }, {
                "id": 16,
                "answers": {
                    "answer": [{
                        "id": 0,
                        "name": "jealous",
                        "descr": "Envious, covetous",
                        "res": "B"
                    }, {
                        "id": 1,
                        "name": "reluctant",
                        "descr": "Overly hesitant, reserved, timid",
                        "res": "W"
                    }, {
                        "id": 2,
                        "name": "argumentative",
                        "descr": "Quarrelsome, antagonistic, debative (debating)",
                        "res": "Y"
                    }, {
                        "id": 3,
                        "name": "obnoxious",
                        "descr": "Irritating, annoying",
                        "res": "R"
                    }]
                }
            }, {
                "id": 17,
                "answers": {
                    "answer": [{
                        "id": 0,
                        "name": "even-tempered",
                        "descr": "Consistently easy going and calm",
                        "res": "W"
                    }, {
                        "id": 1,
                        "name": "inclusive",
                        "descr": "Engaging, inviting, encouraging others to join",
                        "res": "Y"
                    }, {
                        "id": 2,
                        "name": "dependable",
                        "descr": "Reliable, responsible, trustworthy",
                        "res": "B"
                    }, {
                        "id": 3,
                        "name": "focused",
                        "descr": "Concentrating attention and energy on one's objective",
                        "res": "R"
                    }]
                }
            }, {
                "id": 18,
                "answers": {
                    "answer": [{
                        "id": 0,
                        "name": "overly aggressive",
                        "descr": "Pushy, selfish, forward",
                        "res": "R"
                    }, {
                        "id": 1,
                        "name": "low self-esteem",
                        "descr": "Lacking sense of innate self-worth",
                        "res": "B"
                    }, {
                        "id": 2,
                        "name": "ambivalent",
                        "descr": "Uncertain, \"I dont care\" attitude",
                        "res": "W"
                    }, {
                        "id": 3,
                        "name": "inconsistent",
                        "descr": "Erratic, not stable, variable",
                        "res": "Y"
                    }]
                }
            }, {
                "id": 19,
                "answers": {
                    "answer": [{
                        "id": 0,
                        "name": "deliberate",
                        "descr": "Purposeful, contemplative",
                        "res": "B"
                    }, {
                        "id": 1,
                        "name": "powerful",
                        "descr": "Authoritative, influential, commanding",
                        "res": "R"
                    }, {
                        "id": 2,
                        "name": "balanced",
                        "descr": "Practicing practical applications of healthy life perspective",
                        "res": "W"
                    }, {
                        "id": 3,
                        "name": "persuasive",
                        "descr": "Capable of convincing",
                        "res": "Y"
                    }]
                }
            }, {
                "id": 20,
                "answers": {
                    "answer": [{
                        "id": 0,
                        "name": "undisciplined",
                        "descr": "Not in control, indulgent",
                        "res": "Y"
                    }, {
                        "id": 1,
                        "name": "timid",
                        "descr": "Shy, bashful, unassertive, quiet",
                        "res": "W"
                    }, {
                        "id": 2,
                        "name": "insensitive",
                        "descr": "Lacking compassion, unfeeling",
                        "res": "R"
                    }, {
                        "id": 3,
                        "name": "judgmental",
                        "descr": "Critical, fault-finding",
                        "res": "B"
                    }]
                }
            }, {
                "id": 21,
                "answers": {
                    "answer": [{
                        "id": 0,
                        "name": "creative thinker",
                        "descr": "Thinking imaginatively, creatively, and \"out of the box\"",
                        "res": "W"
                    }, {
                        "id": 1,
                        "name": "clear perspective",
                        "descr": "Having an objective and unbiased point of view",
                        "res": "R"
                    }, {
                        "id": 2,
                        "name": "detail conscious",
                        "descr": "Attentive and meticulous with particulars",
                        "res": "W"
                    }, {
                        "id": 3,
                        "name": "visionary",
                        "descr": "Characterized by vision or foresight",
                        "res": "Y"
                    }]
                }
            }, {
                "id": 22,
                "answers": {
                    "answer": [{
                        "id": 0,
                        "name": "always right",
                        "descr": "Winning is more important than relationships; irrational need to be correct at others expense",
                        "res": "R"
                    }, {
                        "id": 1,
                        "name": "uncommitted",
                        "descr": "Unwilling to commit, disloyal",
                        "res": "Y"
                    }, {
                        "id": 2,
                        "name": "uninvolved",
                        "descr": "Feeling or showing no interest or concern",
                        "res": "W"
                    }, {
                        "id": 3,
                        "name": "guilt prone",
                        "descr": "Quick to feel unrealistic blame",
                        "res": "B"
                    }]
                }
            }, {
                "id": 23,
                "answers": {
                    "answer": [{
                        "id": 0,
                        "name": "accepting",
                        "descr": "Receptive, welcoming, agreeing",
                        "res": "W"
                    }, {
                        "id": 1,
                        "name": "spontaneous",
                        "descr": "Unplanned willingness to do or risk",
                        "res": "Y"
                    }, {
                        "id": 2,
                        "name": "pragmatic",
                        "descr": "Practical, realistic, workable",
                        "res": "R"
                    }, {
                        "id": 3,
                        "name": "well-mannered",
                        "descr": "Polite, courteous, appropriate",
                        "res": "B"
                    }]
                }
            }, {
                "id": 24,
                "answers": {
                    "answer": [{
                        "id": 0,
                        "name": "disorganized",
                        "descr": "Haphazard, unsystematic, cluttered",
                        "res": "Y"
                    }, {
                        "id": 1,
                        "name": "selfish",
                        "descr": "Primary concern for self above others",
                        "res": "R"
                    }, {
                        "id": 2,
                        "name": "emotionally intense",
                        "descr": "Being emotionally heavy, extreme, and smothering",
                        "res": "B"
                    }, {
                        "id": 3,
                        "name": "detached",
                        "descr": "Emotionally separated or disconnected",
                        "res": "W"
                    }]
                }
            }, {
                "id": 25,
                "answers": {
                    "answer": [{
                        "id": 0,
                        "name": "motivated",
                        "descr": "Urgently driven, self-starter",
                        "res": "R"
                    }, {
                        "id": 1,
                        "name": "sincere",
                        "descr": "Genuine, true, trustworthy",
                        "res": "B"
                    }, {
                        "id": 2,
                        "name": "diplomatic",
                        "descr": "Concern for mutual agreement",
                        "res": "W"
                    }, {
                        "id": 3,
                        "name": "engaging of others",
                        "descr": "Easily drawing in and interlocking with others",
                        "res": "Y"
                    }]
                }
            }, {
                "id": 26,
                "answers": {
                    "answer": [{
                        "id": 0,
                        "name": "forgetful",
                        "descr": "Failing to keep in mind",
                        "res": "Y"
                    }, {
                        "id": 1,
                        "name": "boring",
                        "descr": "Tiresome, unexciting, dull",
                        "res": "W"
                    }, {
                        "id": 2,
                        "name": "hard to please",
                        "descr": "Difficult to satisfy or appease",
                        "res": "B"
                    }, {
                        "id": 3,
                        "name": "tactless",
                        "descr": "Rude, thoughtless, inconsiderate",
                        "res": "R"
                    }]
                }
            }, {
                "id": 27,
                "answers": {
                    "answer": [{
                        "id": 0,
                        "name": "articulate",
                        "descr": "Expressing oneself easily and clearly",
                        "res": "R"
                    }, {
                        "id": 1,
                        "name": "quality-oriented",
                        "descr": "Performing with excellence and accuracy",
                        "res": "B"
                    }, {
                        "id": 2,
                        "name": "centered",
                        "descr": "Well-balanced, solid, constant",
                        "res": "W"
                    }, {
                        "id": 3,
                        "name": "forgiving",
                        "descr": "Quick to excuse others and self; makes allowances",
                        "res": "Y"
                    }]
                }
            }, {
                "id": 28,
                "answers": {
                    "answer": [{
                        "id": 0,
                        "name": "self-centered",
                        "descr": "Engrossed in oneself and one's own affairs",
                        "res": "R"
                    }, {
                        "id": 1,
                        "name": "calculating",
                        "descr": "Cunning, scheming, manipulative",
                        "res": "Y"
                    }, {
                        "id": 2,
                        "name": "self-righteous",
                        "descr": "Morally judgmental",
                        "res": "B"
                    }, {
                        "id": 3,
                        "name": "unexpressive",
                        "descr": "Impassive in manner, not communicating emotion",
                        "res": "W"
                    }]
                }
            }, {
                "id": 29,
                "answers": {
                    "answer": [{
                        "id": 0,
                        "name": "self-regulated",
                        "descr": "Controlling one's emotional responses; disciplined",
                        "res": "W"
                    }, {
                        "id": 1,
                        "name": "charismatic",
                        "descr": "Charming, magnetic, appealing",
                        "res": "Y"
                    }, {
                        "id": 2,
                        "name": "confident",
                        "descr": "Self-assured, believing in one's ability",
                        "res": "R"
                    }, {
                        "id": 3,
                        "name": "intuitive",
                        "descr": "Knowing or perceiving by intuition",
                        "res": "B"
                    }]
                }
            }, {
                "id": 30,
                "answers": {
                    "answer": [{
                        "id": 0,
                        "name": "unrealistic expectations",
                        "descr": "Setting unreasonable or impossible standards",
                        "res": "B"
                    }, {
                        "id": 1,
                        "name": "unproductive",
                        "descr": "Not productive, idle",
                        "res": "W"
                    }, {
                        "id": 2,
                        "name": " afraid to face facts",
                        "descr": "Unwilling to accept ownership and/or consequences of ones choices",
                        "res": "Y"
                    }, {
                        "id": 3,
                        "name": "intimidating",
                        "descr": "Making others feel timid or fearful",
                        "res": "R"
                    }]
                }
            }]
    }


]
