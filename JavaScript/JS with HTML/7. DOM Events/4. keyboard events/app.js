const inputField = document.getElementById("testInput");
const outputDiv1 = document.getElementById("output1");
const outputDiv2 = document.getElementById("output2");
const direction = document.querySelector("h2");

// Event Listener for keydown event
inputField.addEventListener("keydown", function (event) {
  outputDiv1.innerHTML += `You Pressed : '${event.key}' -  (${event.code}) <br>`;

  // Get key using key code
  if (event.code == "ArrowUp") {
    direction.innerText = "Object is moving in upward direction!";
  } else if (event.code == "ArrowDown") {
    direction.innerText = "Object is moving in downward direction!";
  } else if (event.code == "ArrowLeft") {
    direction.innerText = "Object is moving in leftward direction!";
  } else if (event.code == "ArrowRight") {
    direction.innerText = "Object is moving in rightward direction!";
  } else {
    direction.innerText = "Press arrow key to get direction!";
  }
});

// Event Listener for keyup event
inputField.addEventListener("keyup", function (event) {
  outputDiv2.innerHTML += `You Unpressed : '${event.key}' -  (${event.code}) <br>`;
});
