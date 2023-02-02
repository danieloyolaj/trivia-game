const question = document.querySelector('#question');
const choices = Array.from(document.querySelector('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question: "What is 5 + 3",
    choice1: '2',
    choice2: '4',
    choice3: '8',
    choice4: '12',
    answer: 3
  },
  {
    question: "Inside which HTML element do we put the Javascript?",
    choice1: '<script>',
    choice2: '<p>',
    choice3: '<body>',
    choice4: '<html>',
    answer: 1
  },
  {
    question: "Which type of language is Javascript?",
    choice1: 'Object-Oriented',
    choice2: 'Object-based',
    choice3: 'Assembly-Language',
    choice4: 'High-Level',
    answer: 2
  },
  {
    question: "Which one of the following also known as Conditional Expression:",
    choice1: 'Alternative to if-else',
    choice2: 'Switch statement',
    choice3: 'If-then-else statement',
    choice4: 'Immediate if',
    answer: 4
  },
];

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 4;