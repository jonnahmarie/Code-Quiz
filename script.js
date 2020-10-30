var highScoreBtn = document.getElementById("high-score");
var beginQuizBtn = document.getElementById("begin-quiz");
var noStartBtn = document.getElementById("no-start");
var timer = document.getElementById("timer");
var seconds = 60;

noStartBtn.addEventListener("click", function() {
    alert('$ git commit -m "I guess come back when you are ready?"');
})

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

