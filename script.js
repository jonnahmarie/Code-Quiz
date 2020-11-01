//start page global variables
var highScoreBtn = document.getElementById("high-score");
var beginQuizBtn = document.getElementById("begin-quiz");
var noStartBtn = document.getElementById("no-start");

//fun bonus button for start page
noStartBtn.addEventListener("click", function() {
    alert('$ git commit -m "I guess come back when you are ready?"');
})

//questions object
var quizQuestions = [
    {
        question: "Which of the following is not one of the three fundamental programming languages of the modern web?",
        choices: ["JavaScript", "C++", "HTML", "CSS"],
        answer: "C++"
    },
    {
        question: "A function tied to an object is called a ___.",
        choices: ["String", "Boolean", "Web API", "Method"],
        answer: "Method"
    },
    {
        question: "The symbol ___ represents the ___ logical operator.",
        choices: ["! ; NOT", "&& ; or", "=== ; equal to", ">= ; less than or equal"],
        answer: "! ; NOT"
    },
    {
        question: "HTML stands for _____.",
        choices: ["Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Text Markup Language", "Hacker Table Monitor Logout"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "What does WWW stand for?",
        choices: ["Web World Wide", "World Wide Web", "Wide Web World", "Wireless Web Window"],
        answer: "World Wide Web"
    },
    {
        question: "Syntax in coding is _____.",
        choices: ["The way you write the code.", "The coding language.", "An error that can appear in your code.", "Different languages mixed together."],
        answer: "The way you write the code."
    },
    {
        question: "How many columns make up Bootstrap's grid system?",
        choices: ["10", "14", "16", "12"],
        answer: "12"
    }
]


//more global variables
var mainDiv = document.getElementById("main-div");
var quizDiv = document.getElementById("quiz-div");
var scoreDiv = document.getElementById("score-div");
var scoreList = document.getElementById("score-list-div");
var scoreboard = document.getElementById("scoreboard");
var timer = document.getElementById("timer");
var questionText = document.getElementById("question-text");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var i = 0;
var questionIndex = quizQuestions.length - 1;
var setTime = 60;
var score = 0;
var scoreInputName = document.getElementById("initials");
var scoreText = document.getElementById("score-text");

// console.log(questionIndex);

//begins the quiz on start, hides mainDiv and displays quizDiv
beginQuizBtn.addEventListener("click", function(event) {
    mainDiv.className = "container-fluid m-3 d-none";
    quizDiv.className = "container-fluid m-3";

    timerFunction();
    startQuiz ();
});

function timerFunction (duration, display) {
    var time2 = duration, minutes, seconds
    var quizTimer = setInterval (function () {
        setTime--;
        timer.innerHTML = setTime;
        if (setTime === 0) {
            clearInterval(quizTimer);
            highScoreFunction();
        }
    }, 1000);
    // if (score <= questionIndex) {
    //     clearInterval(quizTimer);
    // }
};

//fills in the empty elements in the HTML and starts the timer
function startQuiz () {
    var correctAnswer = quizQuestions[i];
    questionText.textContent = quizQuestions[i].question;
    answer1.innerHTML = correctAnswer.choices[0];
    answer2.innerHTML = correctAnswer.choices[1];
    answer3.innerHTML = correctAnswer.choices[2];
    answer4.innerHTML = correctAnswer.choices[3];
};

//event bubbling of buttons with common class names
const answerBtns = document.getElementsByClassName("answer-btn");
for (const button of answerBtns) {
    button.addEventListener("click", function(event) {
        var correct = quizQuestions[i].answer;
        // console.log(correct);

        // if (i < questionIndex - 1) {
        //     i++;
        // }
        if (event.target.innerHTML == correct) {
            i++;
            score++;
            startQuiz();
        } else {
            i++;
            setTime -= 10;
            startQuiz();
        }
        if (setTime === 0 || i >= questionIndex) {
            highScoreFunction();
        }
    });
}

//event listeners on all buttons

// answer1.addEventListener("click", function (event) {
//     event.stopPropagation();
//     var correct = quizQuestions[i].answer;

//     if (i < questionIndex) {
//         i++;
//     }
//     if (event.target.innerHTML === correct) {
//         i ++;
//         score ++;
//         startQuiz();
//     } else {
//         startQuiz();
//         setTime -= 10;
//     }
//     // if (setTime === 0 || i >= questionIndex) {
//     //     highScoreFunction();
//     // }
// });

// answer2.addEventListener("click", function (event) {
//     event.stopPropagation();
//     var correct = quizQuestions[i].answer;

//     if (i < questionIndex) {
//         i++;
//     }
//     if (event.target.innerHTML === correct) {
//         i ++;
//         score ++;
//         startQuiz();
//     } else {
//         startQuiz();
//         setTime -= 10;
//     }
//     // if (setTime === 0 || i >= questionIndex) {
//     //     highScoreFunction();
//     // }
// });

// answer3.addEventListener("click", function (event) {
//     event.stopPropagation();
//     var correct = quizQuestions[i].answer;

//     if (i < questionIndex) {
//         i++;
//     }
//     if (event.target.innerHTML === correct) {
//         i ++;
//         score ++;
//         startQuiz();
//     } else {
//         startQuiz();
//         setTime -= 10;
//     }
//     // if (setTime === 0 || i >= questionIndex) {
//     //     highScoreFunction();
//     // }
// });

// answer4.addEventListener("click", function (event) {
//     event.stopPropagation();
//     var correct = quizQuestions[i].answer;

//     if (i < questionIndex) {
//         i++;
//     }
//     if (event.target.innerHTML === correct) {
//         i ++;
//         score ++;
//         startQuiz();
//     } else {
//         startQuiz();
//         setTime -= 10;
//     }
//     // if (setTime === 0 || i >= questionIndex) {
//     //     highScoreFunction();
//     // }
// });

function highScoreFunction() {
    if (setTime === 0 || i >= questionIndex) {
        quizDiv.className = "container-fluid m-3 d-none";
        scoreDiv.className = "container-fluid m-3 px-5";
        scoreList.className = "d-none";
        scoreText.innerHTML = "Wow... You managed to successfully answer " + score + " questions right... I'm... impressed?";
    }
}

var submitScoreBtn = document.getElementById("submitScoreBtn");
var scoreInputName = document.getElementById("initials");

// submitScoreBtn.addEventListener("click", function (event) {
//     mainDiv.className = "container-fluid m-3 d-none";
//     quizDiv.className = "container-fluid m-3 d-none";
//     // scoreDiv.className = "container-fluid m-3 d-none";
//     // scoreList.className = "container-fluid m-3";
    
//     // if (scoreInputName !== null)  {
//     //     event.stopPropagation();
//     //     // console.log("clicked");

//     //     nameDisplay.textContent = "";
//     //     scoreDisplayName.textContent = "";
     
// });

highScoreBtn.addEventListener("click", function() {
    mainDiv.className = "container-fluid m-3 d-none";
    quizDiv.className = "container-fluid m-3 d-none";
    scoreDiv.className = "d-none";
    scoreList.className = "container-fluid m-3";

    function setScore () {
        localStorage.setItem("initial", scoreInputName.value);
        localStorage.setItem("score", score);
        getScore();
    }
})

function getScore() {
    var scoreContent = localStorage.getItem("initial") + "'s high score is: " +
        localStorage.getItem("score")

    scoreText.textContent = scoreContent;
}