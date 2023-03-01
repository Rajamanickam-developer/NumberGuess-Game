// select all needed elements
const inputVal = document.getElementById('input-number');
const checkBtn = document.getElementById("btn");
const outputEl = document.getElementById('output');
const highScoreEl = document.getElementById('high-score');
const guessesLeftEl = document.getElementById('guesses-left');
const resetBtn = document.getElementById('reset');


let highScore = 0;
let guessesLeft = 10;

highScoreEl.innerText = highScore;
guessesLeftEl.innerText = guessesLeft;

//random number generating function
const  randomNumber = function random(maxRange) {
  return Math.trunc((Math.random() * maxRange) + 1);
};
let randomValue = randomNumber(100);

// console.log(randomValue);

checkBtn.addEventListener('click', function () {
  const guessValue = Number(inputVal.value);

  if(guessValue){
    if(guessesLeft <= 0){
      outputEl.textContent = "Game Over!";
      resetBtn.style.display = 'block';
    }else{
    if(guessValue === randomValue){
      outputEl.textContent = "You are correct";
      resetBtn.style.display = 'block';
      let currentGuessValue = guessesLeft;
      let currentHighScore = highScore;
      if(currentHighScore <= currentGuessValue){
        guessesLeft = highScore;
        highScoreEl.innerText = guessesLeft;
        highScoreEl.innerText = currentGuessValue; 
      }else{
        highScoreEl.innerText = currentHighScore;
      }
    }else if(guessValue > randomValue){
      outputEl.textContent = "Your guess is to high";
      guessesLeft--;
      inputVal.value = '';
      guessesLeftEl.innerText = guessesLeft;
    }else if(guessValue < randomValue){
      outputEl.textContent = "Your guess is to low";
      guessesLeft--;
      inputVal.value = '';
      guessesLeftEl.innerText = guessesLeft;
    }}
  }else {
    alert("You should type in 1 to 100")
  }
});

resetBtn.addEventListener('click', function(){
  guessesLeft = 10;
  guessesLeftEl.innerText = guessesLeft;
  inputVal.value = '';
  outputEl.textContent = '';
  resetBtn.style.display = 'none';
  randomValue = randomNumber(100);
  // console.log(randomValue);
})