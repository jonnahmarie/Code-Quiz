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
        choices: ['JavaScript', 'C++', 'HTML', 'CSS'],
        answer: "C++"
    },
    {
        question: "A function tied to an object is called a ___.",
        choices: ['String', 'Boolean', 'Web API', 'Method'],
        answer: "Method"
    },
    {
        question: "The symbol ___ represents the ___ logical operator.",
        choices: ['! ; NOT', '&& ; or', '=== ; equal to', '>= ; less than or equal'],
        answer: "! ; NOT"
    },
    {
        question: "HTML stands for _____.",
        choices: ['Home Tool Markup Language', 'Hyperlinks and Text Markup Language', 'Hyper Text Markup Language', 'Hacker Table Monitor Logout'],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "What does WWW stand for?",
        choices: ['Web World Wide', 'World Wide Web', 'Wide Web World', 'Wireless Web Window'],
        answer: "World Wide Web"
    },
    {
        question: "Syntax in coding is _____.",
        choices: ['The way you write the code.', 'The coding language.', 'An erro that can appear in your code.', 'Different languages mixed together.'],
        answer: "The way you write the code."
    },
    {
        questions: "How many columns make up Bootstrap's grid system?",
        choices: ['10', '14', '16', '12'],
        answer: "12"
    }
]

//more global variables
var mainDiv = document.getElementById("main-div");
var quizDiv = document.getElementById("quiz-div");
var scoreDiv = document.getElementById("score-div");
var timer = document.getElementById("timer");
var questionText = document.getElementById("question-text");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var i = 0;
var setTime = 90;
var score = 0;
// var time = 90;
// var clock;

//begins the quiz on start, hides mainDiv and displays quizDiv
beginQuizBtn.addEventListener("click", function(event) {
    mainDiv.className = "container-fluid m-3 d-none";
    quizDiv.className = "container-fluid m-3";

    function timerFunction (time) {
        var quizTimer = setInterval (function () {
            setTime--;
            timer.textContent = setTime;
            if (setTime === 0) {
                clearInterval(quizTimer);
                // endQuiz();
            }
        }, 1000);
    }

    timerFunction();
    startQuiz ();
});

//fills in the empty elements in the HTML and starts the timer
function startQuiz () {
    var currentQuestion = quizQuestions[i];
    questionText.textContent = currentQuestion.question;
    answer1.textContent = currentQuestion.choices[0];
    answer2.textContent = currentQuestion.choices[1];
    answer3.textContent = currentQuestion.choices[2];
    answer4.textContent = currentQuestion.choices[3];

    // startTimer(setTime, timer);
};

// function startTimer(duration, display) {
//     var time = duration, minutes, seconds;
//     var time2 = setInterval(function () {
//         minutes = parseInt(time / 60, 10);
//         seconds = parseInt(time % 60, 10);

//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds: seconds;

//         display.textContent = minutes + ":" + seconds;

//         time--;

//         if (time === 0) {
//             clearInterval(time2);
//         }
//     }, 1000);  
// };

const answerBtns = document.getElementsByClassName("answer-btn");
for (const button of answerBtns) {
    button.addEventListener("click", function(answer) {
        correct = quizQuestions[i].answer;

        if (answer === correct && i !== quizQuestions.length) {
            score++;
            i++;
            startQuiz();
        } else if (answer !== correct && i !== quizQuestions.length) {
            i++;
            setTime -= 15;
            startQuiz();
        } else {
            highScoreFunction();
        }
    });
}