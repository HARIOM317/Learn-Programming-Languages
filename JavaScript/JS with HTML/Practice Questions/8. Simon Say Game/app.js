let gameSequence = [];
let userSequence = [];
let btns = ["aqua", "pink", "orange", "blue"];

let started = false;
let level = 0;
let maxScore = 0;

let h2 = document.querySelector("h2");
let p = document.querySelector("p");

// Key press event to start the game
document.addEventListener("keypress", function () {
  if (started === false) {
    console.log("Game started");
    levelUp();
    started = true;
    p.innerText = "Good luck, Game started!";
  }
});

// to flash computer selected button
function computerFlash(btn) {
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 300);
}

// to flash user selected button
function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(() => {
    btn.classList.remove("userFlash");
  }, 300);
}

// to level up score
function levelUp() {
  userSequence = []; // reset user sequence for each level
  level++; // increase level

  maxScore = Math.max(maxScore, level);

  h2.innerText = `Level ${level}`; // show current level

  // choose random button
  let randIdx = Math.floor(Math.random() * 4);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);

  gameSequence.push(randColor); // push color on gameSequence
  console.log("Sequence color :", gameSequence);

  computerFlash(randBtn); // flash button for color
}

// to match compute sequence and user entered sequence
function checkSequence(idx) {
  if (userSequence[idx] === gameSequence[idx]) {
    if (userSequence.length == gameSequence.length) {
      // flash green screen on correct submission
      document.querySelector("body").style.backgroundColor = "lightgreen";
      setTimeout(() => {
        document.querySelector("body").style.backgroundColor = "white";

        // level up
        setTimeout(levelUp, 1000);
      }, 1000);
    }
  } else {
    h2.innerHTML = `Game Over! Your score was ${level} <b>(Max Score : ${maxScore})</b> <br>Press any key on keyboard to start again.`;

    // flash red screen on wrong submission
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(() => {
      document.querySelector("body").style.backgroundColor = "white";
    }, 2000);

    reset(); // reset game
  }
}

// to press button to follow computer sequence
function btnPress() {
  let btn = this;
  userFlash(btn);

  userColor = btn.getAttribute("id");
  userSequence.push(userColor);

  if (started) {
    checkSequence(userSequence.length - 1);
  }
}

// add click event on all four buttons
let allBtns = document.querySelectorAll(".btn");
allBtns.forEach((btn) => btn.addEventListener("click", btnPress));

// to reset game
function reset() {
  started = false;
  gameSequence = [];
  userSequence = [];
  level = 0;
}
