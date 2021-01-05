import {Test,TestType} from "../test.definition";


function getColorCodeTest(){
var test ={
    "id": "30",
    "name": "Color4",
    "className": "colorCode",
    "free": true,
    "noFooterIndicator": true,
    "extraDescription": undefined,
    "type": TestType.Points,
    "intro": "As a KID I was ... <br> Please answer the following question",
    "descriptions": "what color are you",
    "question": [
        {
            "id": 1,
            "answers": {
                "answer": [{
                    "id": 0,
                    "name": "proactive",
                    "descr": "Acting positive, pre-emptive in resolving problems",
                    "value": "R"
                }, {
                    "id": 1,
                    "name": "nurturing",
                    "descr": "Caring, concerned, attentive",
                    "value": "B"
                }, {
                    "id": 2,
                    "name": "objective",
                    "descr": "Displaying clear and unbiased judgment, fair",
                    "value": "W"
                }, {
                    "id": 3,
                    "name": "insightful",
                    "descr": "Being perceptive of subtle ideas or concepts",
                    "value": "Y"
                }]
            }
        }, {
            "id": 2,
            "answers": {
                "answer": [{
                    "id": 0,
                    "name": "indecisive",
                    "descr": "Uncertain, hesitant, ambivalent",
                    "value": "W"
                }, {
                    "id": 1,
                    "name": "arrogant",
                    "descr": "Puffed up, conceited, air of superiority",
                    "value": "R"
                }, {
                    "id": 2,
                    "name": "a perfectionist",
                    "descr": "Insistent on eliminating all flaws and error",
                    "value": "B"
                }, {
                    "id": 3,
                    "name": "poor follow-through",
                    "descr": "Not seeing things through to the end",
                    "value": "Y"
                }]
            }
        }, {
            "id": 3,
            "answers": {
                "answer": [{
                    "id": 0,
                    "name": "enthusiastic",
                    "descr": "Eager, spirited, energetic",
                    "value": "Y"
                }, {
                    "id": 1,
                    "name": "kind",
                    "descr": "Gentle, pleasant, considerate",
                    "value": "W"
                }, {
                    "id": 2,
                    "name": "caring",
                    "descr": "Feeling and exhibiting concern and empathy for others",
                    "value": "B"
                }, {
                    "id": 3,
                    "name": "productive",
                    "descr": "Efficient, resourceful, constructive",
                    "value": "R"
                }]
            }
        }, {
            "id": 4,
            "answers": {
                "answer": [{
                    "id": 0,
                    "name": "relentless",
                    "descr": "Unyielding in severity or strictness",
                    "value": "R"
                }, {
                    "id": 1,
                    "name": "suspicious",
                    "descr": "Distrustful, skeptical, wary",
                    "value": "B"
                }, {
                    "id": 2,
                    "name": "indifferent",
                    "descr": "Apathetic, emotionally detached",
                    "value": "Y"
                }, {
                    "id": 3,
                    "name": "naive",
                    "descr": "Trusting, gullible, unsuspecting",
                    "value": "W"
                }]
            }
        }, {
            "id": 5,
            "answers": {
                "answer": [{
                    "id": 0,
                    "name": "peaceful",
                    "descr": "Calm, quiet, serene, gentle",
                    "value": "W"
                }, {
                    "id": 1,
                    "name": "carefree",
                    "descr": "Living in the moment, lighthearted, worry-free",
                    "value": "Y"
                }, {
                    "id": 2,
                    "name": "decisive",
                    "descr": "Conclusive, ready to act now",
                    "value": "R"
                }, {
                    "id": 3,
                    "name": "loyal",
                    "descr": "Dependable, faithful, reliable",
                    "value": "B"
                }]
            }
        }, {
            "id": 6,
            "answers": {
                "answer": [{
                    "id": 0,
                    "name": "silently stubborn",
                    "descr": "Quietly inflexible, obstinate",
                    "value": "W"
                }, {
                    "id": 1,
                    "name": "worry prone",
                    "descr": "Inclined to feel concerned or anxious",
                    "value": "B"
                }, {
                    "id": 2,
                    "name": "an interrupter",
                    "descr": "Speaking before others are finished",
                    "value": "Y"
                }, {
                    "id": 3,
                    "name": "obsessive",
                    "descr": "Excessively preoccupied with ideas, people, emotions, and/or behavior",
                    "value": "R"
                }]
            }
        }, {
            "id": 7,
            "answers": {
                "answer": [{
                    "id": 0,
                    "name": "sociable",
                    "descr": "Friendly, outgoing, displaying \"people skills\"",
                    "value": "Y"
                }, {
                    "id": 1,
                    "name": "assertive",
                    "descr": "Direct, to the point, determined",
                    "value": "R"
                }, {
                    "id": 2,
                    "name": "intimate",
                    "descr": "Desiring close relationships with others",
                    "value": "B"
                }, {
                    "id": 3,
                    "name": "non-discriminate",
                    "descr": "Not prejudiced or disregarding of individual merit",
                    "value": "W"
                }]
            }
        }, {
            "id": 8,
            "answers": {
                "answer": [{
                    "id": 0,
                    "name": "self-critical",
                    "descr": "Self deprecating, finding fault with self",
                    "value": "B"
                }, {
                    "id": 1,
                    "name": "bossy",
                    "descr": "Pushy, overbearing, dictatorial",
                    "value": "R"
                }, {
                    "id": 2,
                    "name": "unfocused",
                    "descr": "Easily distracted, unable to concentrate",
                    "value": "Y"
                }, {
                    "id": 3,
                    "name": "avoids conflict",
                    "descr": "Preferring quiet path of least resistance; avoiding disagreement",
                    "value": "W"
                }]
            }
        }, {
            "id": 9,
            "answers": {
                "answer": [{
                    "id": 0,
                    "name": "voice of reason",
                    "descr": "Bringing a sound sense of practicality",
                    "value": "B"
                }, {
                    "id": 1,
                    "name": "flexible",
                    "descr": "Adjusting readily to changing conditions",
                    "value": "Y"
                }, {
                    "id": 2,
                    "name": "action-oriented",
                    "descr": "Motivated to do or to make things happen",
                    "value": "R"
                }, {
                    "id": 3,
                    "name": "analytical",
                    "descr": "Complex reasoning, organized, careful",
                    "value": "W"
                }]
            }
        }, {
            "id": 10,
            "answers": {
                "answer": [{
                    "id": 0,
                    "name": "critical of others",
                    "descr": "Inclined to criticize or find fault in others",
                    "value": "R"
                }, {
                    "id": 1,
                    "name": "disinterested",
                    "descr": "not interested, unable to be inspired or moved",
                    "value": "W"
                }, {
                    "id": 2,
                    "name": "overly sensitive",
                    "descr": "Quick to take offense, touchy",
                    "value": "B"
                }, {
                    "id": 3,
                    "name": "irresponsible",
                    "descr": "Not reliable, lacking accountability",
                    "value": "Y"
                }]
            }
        }, {
            "id": 11,
            "answers": {
                "answer": [{
                    "id": 0,
                    "name": "determined",
                    "descr": "Firm, resolute, not giving up",
                    "value": "R"
                }, {
                    "id": 1,
                    "name": "thoughtful",
                    "descr": "Considerate, attentive, concerned",
                    "value": "B"
                }, {
                    "id": 2,
                    "name": "a good listener",
                    "descr": "Listening patiently/attentively without judgment",
                    "value": "W"
                }, {
                    "id": 3,
                    "name": "positive",
                    "descr": "Upbeat, optimistic, encouraging, hopeful",
                    "value": "Y"
                }]
            }
        }, {
            "id": 12,
            "answers": {
                "answer": [{
                    "id": 0,
                    "name": "unmotivated",
                    "descr": "Not easily moved to action, inactive",
                    "value": "W"
                }, {
                    "id": 1,
                    "name": "vain",
                    "descr": "Conceited, self-centered, egotistical",
                    "value": "Y"
                }, {
                    "id": 2,
                    "name": "demanding",
                    "descr": "Overly pressuring and commanding",
                    "value": "R"
                }, {
                    "id": 3,
                    "name": "unforgiving",
                    "descr": "Holding grudges",
                    "value": "B"
                }]
            }
        }, {
            "id": 13,
            "answers": {
                "answer": [{
                    "id": 0,
                    "name": "happy",
                    "descr": "Cheerful, high-spirited, joyful",
                    "value": "Y"
                }, {
                    "id": 1,
                    "name": "compassionate",
                    "descr": "Caring, empathetic, considerate",
                    "value": "B"
                }, {
                    "id": 2,
                    "name": "inventive",
                    "descr": "Creative, imaginative, practical solutions",
                    "value": "W"
                }, {
                    "id": 3,
                    "name": "responsible",
                    "descr": "Accountable, reliable, follows through",
                    "value": "R"
                }]
            }
        }, {
            "id": 14,
            "answers": {
                "answer": [{
                    "id": 0,
                    "name": "impulsive",
                    "descr": "Hasty, not thinking before acting",
                    "value": "Y"
                }, {
                    "id": 1,
                    "name": "impatient",
                    "descr": "Restless, hasty, intolerant",
                    "value": "R"
                }, {
                    "id": 2,
                    "name": "moody",
                    "descr": "Sulky, temperamental, uneven emotionally",
                    "value": "B"
                }, {
                    "id": 3,
                    "name": "indirect communicator",
                    "descr": "Not straightforward, beating around the bush",
                    "value": "W"
                }]
            }
        }, {
            "id": 15,
            "answers": {
                "answer": [{
                    "id": 0,
                    "name": "a leader",
                    "descr": "Naturally taking charge or stewardship of a group",
                    "value": "R"
                }, {
                    "id": 1,
                    "name": "patient",
                    "descr": "Calmly enduring discomfort or provocation",
                    "value": "W"
                }, {
                    "id": 2,
                    "name": "fun-loving",
                    "descr": "Enjoying the moment, playful",
                    "value": "Y"
                }, {
                    "id": 3,
                    "name": "respectful",
                    "descr": "Polite, gracious, courteous",
                    "value": "B"
                }]
            }
        }, {
            "id": 16,
            "answers": {
                "answer": [{
                    "id": 0,
                    "name": "jealous",
                    "descr": "Envious, covetous",
                    "value": "B"
                }, {
                    "id": 1,
                    "name": "reluctant",
                    "descr": "Overly hesitant, reserved, timid",
                    "value": "W"
                }, {
                    "id": 2,
                    "name": "argumentative",
                    "descr": "Quarrelsome, antagonistic, debative (debating)",
                    "value": "Y"
                }, {
                    "id": 3,
                    "name": "obnoxious",
                    "descr": "Irritating, annoying",
                    "value": "R"
                }]
            }
        }, {
            "id": 17,
            "answers": {
                "answer": [{
                    "id": 0,
                    "name": "even-tempered",
                    "descr": "Consistently easy going and calm",
                    "value": "W"
                }, {
                    "id": 1,
                    "name": "inclusive",
                    "descr": "Engaging, inviting, encouraging others to join",
                    "value": "Y"
                }, {
                    "id": 2,
                    "name": "dependable",
                    "descr": "Reliable, responsible, trustworthy",
                    "value": "B"
                }, {
                    "id": 3,
                    "name": "focused",
                    "descr": "Concentrating attention and energy on one's objective",
                    "value": "R"
                }]
            }
        }, {
            "id": 18,
            "answers": {
                "answer": [{
                    "id": 0,
                    "name": "overly aggressive",
                    "descr": "Pushy, selfish, forward",
                    "value": "R"
                }, {
                    "id": 1,
                    "name": "low self-esteem",
                    "descr": "Lacking sense of innate self-worth",
                    "value": "B"
                }, {
                    "id": 2,
                    "name": "ambivalent",
                    "descr": "Uncertain, \"I dont care\" attitude",
                    "value": "W"
                }, {
                    "id": 3,
                    "name": "inconsistent",
                    "descr": "Erratic, not stable, variable",
                    "value": "Y"
                }]
            }
        }, {
            "id": 19,
            "answers": {
                "answer": [{
                    "id": 0,
                    "name": "deliberate",
                    "descr": "Purposeful, contemplative",
                    "value": "B"
                }, {
                    "id": 1,
                    "name": "powerful",
                    "descr": "Authoritative, influential, commanding",
                    "value": "R"
                }, {
                    "id": 2,
                    "name": "balanced",
                    "descr": "Practicing practical applications of healthy life perspective",
                    "value": "W"
                }, {
                    "id": 3,
                    "name": "persuasive",
                    "descr": "Capable of convincing",
                    "value": "Y"
                }]
            }
        }, {
            "id": 20,
            "answers": {
                "answer": [{
                    "id": 0,
                    "name": "undisciplined",
                    "descr": "Not in control, indulgent",
                    "value": "Y"
                }, {
                    "id": 1,
                    "name": "timid",
                    "descr": "Shy, bashful, unassertive, quiet",
                    "value": "W"
                }, {
                    "id": 2,
                    "name": "insensitive",
                    "descr": "Lacking compassion, unfeeling",
                    "value": "R"
                }, {
                    "id": 3,
                    "name": "judgmental",
                    "descr": "Critical, fault-finding",
                    "value": "B"
                }]
            }
        }, {
            "id": 21,
            "answers": {
                "answer": [{
                    "id": 0,
                    "name": "creative thinker",
                    "descr": "Thinking imaginatively, creatively, and \"out of the box\"",
                    "value": "W"
                }, {
                    "id": 1,
                    "name": "clear perspective",
                    "descr": "Having an objective and unbiased point of view",
                    "value": "R"
                }, {
                    "id": 2,
                    "name": "detail conscious",
                    "descr": "Attentive and meticulous with particulars",
                    "value": "W"
                }, {
                    "id": 3,
                    "name": "visionary",
                    "descr": "Characterized by vision or foresight",
                    "value": "Y"
                }]
            }
        }, {
            "id": 22,
            "answers": {
                "answer": [{
                    "id": 0,
                    "name": "always right",
                    "descr": "Winning is more important than relationships; irrational need to be correct at others expense",
                    "value": "R"
                }, {
                    "id": 1,
                    "name": "uncommitted",
                    "descr": "Unwilling to commit, disloyal",
                    "value": "Y"
                }, {
                    "id": 2,
                    "name": "uninvolved",
                    "descr": "Feeling or showing no interest or concern",
                    "value": "W"
                }, {
                    "id": 3,
                    "name": "guilt prone",
                    "descr": "Quick to feel unrealistic blame",
                    "value": "B"
                }]
            }
        }, {
            "id": 23,
            "answers": {
                "answer": [{
                    "id": 0,
                    "name": "accepting",
                    "descr": "Receptive, welcoming, agreeing",
                    "value": "W"
                }, {
                    "id": 1,
                    "name": "spontaneous",
                    "descr": "Unplanned willingness to do or risk",
                    "value": "Y"
                }, {
                    "id": 2,
                    "name": "pragmatic",
                    "descr": "Practical, realistic, workable",
                    "value": "R"
                }, {
                    "id": 3,
                    "name": "well-mannered",
                    "descr": "Polite, courteous, appropriate",
                    "value": "B"
                }]
            }
        }, {
            "id": 24,
            "answers": {
                "answer": [{
                    "id": 0,
                    "name": "disorganized",
                    "descr": "Haphazard, unsystematic, cluttered",
                    "value": "Y"
                }, {
                    "id": 1,
                    "name": "selfish",
                    "descr": "Primary concern for self above others",
                    "value": "R"
                }, {
                    "id": 2,
                    "name": "emotionally intense",
                    "descr": "Being emotionally heavy, extreme, and smothering",
                    "value": "B"
                }, {
                    "id": 3,
                    "name": "detached",
                    "descr": "Emotionally separated or disconnected",
                    "value": "W"
                }]
            }
        }, {
            "id": 25,
            "answers": {
                "answer": [{
                    "id": 0,
                    "name": "motivated",
                    "descr": "Urgently driven, self-starter",
                    "value": "R"
                }, {
                    "id": 1,
                    "name": "sincere",
                    "descr": "Genuine, true, trustworthy",
                    "value": "B"
                }, {
                    "id": 2,
                    "name": "diplomatic",
                    "descr": "Concern for mutual agreement",
                    "value": "W"
                }, {
                    "id": 3,
                    "name": "engaging of others",
                    "descr": "Easily drawing in and interlocking with others",
                    "value": "Y"
                }]
            }
        }, {
            "id": 26,
            "answers": {
                "answer": [{
                    "id": 0,
                    "name": "forgetful",
                    "descr": "Failing to keep in mind",
                    "value": "Y"
                }, {
                    "id": 1,
                    "name": "boring",
                    "descr": "Tiresome, unexciting, dull",
                    "value": "W"
                }, {
                    "id": 2,
                    "name": "hard to please",
                    "descr": "Difficult to satisfy or appease",
                    "value": "B"
                }, {
                    "id": 3,
                    "name": "tactless",
                    "descr": "Rude, thoughtless, inconsiderate",
                    "value": "R"
                }]
            }
        }, {
            "id": 27,
            "answers": {
                "answer": [{
                    "id": 0,
                    "name": "articulate",
                    "descr": "Expressing oneself easily and clearly",
                    "value": "R"
                }, {
                    "id": 1,
                    "name": "quality-oriented",
                    "descr": "Performing with excellence and accuracy",
                    "value": "B"
                }, {
                    "id": 2,
                    "name": "centered",
                    "descr": "Well-balanced, solid, constant",
                    "value": "W"
                }, {
                    "id": 3,
                    "name": "forgiving",
                    "descr": "Quick to excuse others and self; makes allowances",
                    "value": "Y"
                }]
            }
        }, {
            "id": 28,
            "answers": {
                "answer": [{
                    "id": 0,
                    "name": "self-centered",
                    "descr": "Engrossed in oneself and one's own affairs",
                    "value": "R"
                }, {
                    "id": 1,
                    "name": "calculating",
                    "descr": "Cunning, scheming, manipulative",
                    "value": "Y"
                }, {
                    "id": 2,
                    "name": "self-righteous",
                    "descr": "Morally judgmental",
                    "value": "B"
                }, {
                    "id": 3,
                    "name": "unexpressive",
                    "descr": "Impassive in manner, not communicating emotion",
                    "value": "W"
                }]
            }
        }, {
            "id": 29,
            "answers": {
                "answer": [{
                    "id": 0,
                    "name": "self-regulated",
                    "descr": "Controlling one's emotional responses; disciplined",
                    "value": "W"
                }, {
                    "id": 1,
                    "name": "charismatic",
                    "descr": "Charming, magnetic, appealing",
                    "value": "Y"
                }, {
                    "id": 2,
                    "name": "confident",
                    "descr": "Self-assured, believing in one's ability",
                    "value": "R"
                }, {
                    "id": 3,
                    "name": "intuitive",
                    "descr": "Knowing or perceiving by intuition",
                    "value": "B"
                }]
            }
        }, {
            "id": 30,
            "answers": {
                "answer": [{
                    "id": 0,
                    "name": "unrealistic expectations",
                    "descr": "Setting unreasonable or impossible standards",
                    "value": "B"
                }, {
                    "id": 1,
                    "name": "unproductive",
                    "descr": "Not productive, idle",
                    "value": "W"
                }, {
                    "id": 2,
                    "name": " afraid to face facts",
                    "descr": "Unwilling to accept ownership and/or consequences of ones choices",
                    "value": "Y"
                }, {
                    "id": 3,
                    "name": "intimidating",
                    "descr": "Making others feel timid or fearful",
                    "value": "R"
                }]
            }
        }],
        "results":{ 
            "R":{
                "common":"Text for reds"
            },
            "W":{
                "common":"Common text for White"
            }, 
            "B":{
                "common":"Common text for blue"
            },
            "Y":{
                "common":"Common text for Yellow"
            }
        }

};
return test; 
}