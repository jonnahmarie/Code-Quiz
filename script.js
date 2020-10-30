var highScoreBtn = document.getElementById("high-score");
var beginQuizBtn = document.getElementById("begin-quiz");
var noStartBtn = document.getElementById("no-start");

noStartBtn.addEventListener("click", function() {
    alert("ESRCH 3 No such process\n// Come back again when you're ready.");
})

var quizQuestions = [
    {
        question: "1. Which of the following is not one of the three fundamental programming languages of the modern web?",
        choices: ['JavaScript', 'C++', 'HTML', 'CSS'],
        answer: "C++"
    },
    {
        question: "2. A function tied to an object is called a ___.",
        choices: ['String', 'Boolean', 'Web API', 'Method'],
        answer: "Method"
    },
    {
        question: "3. The symbol ___ represents the ___ logical operator.",
        choices: ['! ; NOT', '&& ; or', '=== ; equal to', '>= ; less than or equal'],
        answer: "! ; NOT"
    },
    {
        question: "4. HTML stands for _____.",
        choices: ['Home Tool Markup Language', 'Hyperlinks and Text Markup Language', 'Hyper Text Markup Language', 'Hacker Table Monitor Logout'],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "5. What does WWW stand for?",
        choices: ['Web World Wide', 'World Wide Web', 'Wide Web World', 'Wireless Web Window'],
        answer: "World Wide Web"
    }
    {
        question: "6. Syntax in coding is _____.",
        choices: ['The way you write the code.', 'The coding language.', 'An erro that can appear in your code.', 'Different languages mixed together.'],
        answer: "The way you write the code."
    }
    {
        questions: "7. How many columns make up Bootstrap's grid system?",
        choices: ['10', '14', '16', '12'],
        answer: "12"
    }
]