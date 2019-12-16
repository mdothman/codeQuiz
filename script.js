$(document).ready(function() {
    console.log("ready");
});
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

function buildQuiz() {
    var output = [];
    questions.each((currentQuestion, questionNumber) => {
        var answers = [];
        for (letter in currentQuestion.answers) {
            answers.push(
                `<label>
                      <input type="radio" name="question${questionNumber}" value="${letter}">
                      ${letter} :
                      ${currentQuestion.answers[letter]}
                    </label>`
            );
        }
        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
        );
    });
    quizContainer.innerHTML = output.join('');
};

function showResults() {

};
buildQuiz();
submitButton.on(showResults());
var questions = [{
        question: "",
        answers: {},
        correctAnswer: ""
    },
    {
        question: "",
        answers: {},
        correctAnswer: ""
    },
    {
        question: "",
        answers: {},
        correctAnswer: ""
    },
    {
        question: "",
        answers: {},
        correctAnswer: ""
    },
    {
        question: "",
        answers: {},
        correctAnswer: ""
    },
    {
        question: "",
        answers: {},
        correctAnswer: ""
    },
]

console.log(this);