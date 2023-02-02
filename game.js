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

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions] //Using the spread operator
  getNewQuestion();
}

getNewQuestion = () => {
  if(availableQuestions.lenght === 0 || questionCounter > MAX_QUESTIONS){
    localStorage.setItem('mostRecentScore', score);
    return window.location.assign('/end.html') //redirecting to the end of the game
  }
  questionCounter++;
  progressText.innerHTML = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
  
  //Here we change the progressBar according to the number of questions
  progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`;

  //Every time the user begins we get a random question
  const questionIndex = Math.floor(Math.random() * availableQuestions.lenght);

  //This get the index of the question being shown
  currentQuestion = availableQuestions[questionIndex];

  //Putting the question in the HTML tag
  question.innerText = currentQuestion.question

  //Displaying the choices of the questions
  choices.forEach(choice => {
    const number = choice.dataset['number'];
    choice.innerText = currentQuestion['choice' + number];
  });

  availableQuestions.splice(questionIndex, 1)

  acceptingAnswers = true;
}