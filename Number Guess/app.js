"use strict";

const again = document.querySelector(".again"),
  number = document.querySelector(".number"),
  guess = document.querySelector(".guess"),
  check = document.querySelector(".check"),
  message = document.querySelector(".message"),
  score = document.querySelector(".score"),
  attemptText = document.querySelector(".attemptScore");

function randomNum() {
  return Math.ceil(Math.random() * 20);
}
let random = randomNum();
let attemptScore = 0;
let scoreNum = 20;

function innerContents(text, num, scr, attp) {
  message.innerHTML = text;
  number.innerHTML = num;
  score.innerHTML = scr;
  attemptText.innerHTML = attp;
}

const statement = () => {

  let guessNum = Number(guess.value);
  
  if (guessNum && guessNum < random) {
    attemptScore++;
    scoreNum--;
    innerContents("📉 Too low!", "?", scoreNum, 0);
    document.body.classList.remove("correct");
  } else if (guessNum && guessNum > random) {
    attemptScore++;
    scoreNum--;
    innerContents("📈 Too high!", "?", scoreNum, 0);
    document.body.classList.remove("correct");
  } else if (guessNum && guessNum === random) {
    attemptScore++;
    innerContents("correct number!", random, scoreNum, attemptScore);
    document.body.classList.add("correct");
  } else {
    innerContents("enter a number", "??", scoreNum, 0);
  }
}

check.addEventListener("click",statement)

again.addEventListener("click", () => {
  randomNum();
  random = randomNum();
  attemptScore = 0;
  scoreNum = 20;
  innerContents("Start guessing...", "?", scoreNum, attemptScore);
  guess.value = "";
  document.body.classList.remove("correct");
});
console.log("%cTAOFIQQ", "background-color: #60b347; color: white; padding: 10px; font-size: 2rem; font-weight: bold;");