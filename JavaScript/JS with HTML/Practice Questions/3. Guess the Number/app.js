let max = prompt("Enter the maximum number");

const randomNumber = Math.floor(Math.random() * max) + 1;

let lifeline = 10;
let attempt = 1;
let userInput = prompt(`🤔🤔🤔 Guess the number between 1 to ${max}`);

while (attempt < lifeline) {
  if (parseInt(userInput) === -1) {
    break;
  } else if (userInput < randomNumber) {
    userInput = prompt(
      ` ❌❌❌ Hint : Try greater number! attempt ${attempt} of ${lifeline} ↖️↖️↖️ `
    );
  } else if (userInput > randomNumber) {
    userInput = prompt(
      ` ❌❌❌ Hint : Try smaller number! attempt ${attempt} of ${lifeline} ↘️↘️↘️ `
    );
  } else {
    alert(
      ` 😃😃 Congratulation! You guess the correct number in ${attempt} attempt. ✅✅✅ `
    );
    break;
  }
  attempt++;
}

if (attempt === lifeline) {
  alert("Opps!😏😏 You lose the game.");
}
