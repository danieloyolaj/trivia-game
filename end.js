const username = document.querySelector('#username');
const saveScoreBtn = document.querySelector('#saveScoreBtn');
const finalScore = document.querySelector('#finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5;

//Displays the current score in the HTML tag
finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
  saveScoreBtn.disabled = !username.value;
})

saveHighScore = e => {
  e.preventDefault();
  const score = {
    score: mostRecentScore,
    name: username.value
  }

  //Pushes the scores into the array
  highScores.push(score);

  //Orders the scores into a descending order
  highScores.sort((a, b) => {
    return b.score - a.score;
  });

  highScores.splice(5);

  //Saves the score in the localStorage
  localStorage.setItem('highScores', JSON.stringify(highScores));
  window.location.assign('/') //Takes the user to the homepage
}