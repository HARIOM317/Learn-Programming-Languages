let result = document.getElementById("counterValue");
let key = "counter";

function updateCounterDisplay() {
  const count = sessionStorage.getItem("counter") || 0;
  result.textContent = count;
}

function increaseCounter() {
  let count = parseInt(sessionStorage.getItem(key)) || 0;
  count++;
  sessionStorage.setItem(key, count);
  updateCounterDisplay();
}

function resetCounter() {
  sessionStorage.setItem(key, 0);
  updateCounterDisplay();
}

document
  .getElementById("increaseCounter")
  .addEventListener("click", increaseCounter);

document.getElementById("resetCounter").addEventListener("click", resetCounter);

// Initialize counter display on page load.
window.addEventListener("load", updateCounterDisplay);
