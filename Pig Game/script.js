"use strict";

const score0El = document.getElementById("score--0"),
  score1El = document.getElementById("score--1"),
  player0El = document.querySelector(".player--0"),
  player1El = document.querySelector(".player--1"),
  current0El = document.getElementById("current--0"),
  current1El = document.getElementById("current--1"),
  diceEl = document.querySelector(".dice"),
  btnNew = document.querySelector(".btn--new"),
  btnRoll = document.querySelector(".btn--roll"),
  btnHold = document.querySelector(".btn--hold");

let score, currentScore, activePlayer, playing;

const init = () => {
  score = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};

init();

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).innerHTML = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

btnRoll.addEventListener("click", () => {
  if (!playing == false) {
    let dice = Math.ceil(Math.random() * 6);
    diceEl.classList.remove("hidden");
    diceEl.src = `../Images/dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).innerHTML =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", () => {
  if (!playing == false) {
    score[activePlayer] += currentScore;
    console.log(score);
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];

    if (score[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add("hidden");

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", init);

console.log("%cTAOFIQQ", "background-color: #60b347; color: white; padding: 10px; font-size: 2rem; font-weight: bold;");