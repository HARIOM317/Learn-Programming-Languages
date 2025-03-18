const readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let number = Math.floor(Math.random() * 100 + 1);

let isCorrect = false;
let totalAttempt = 0;

function takeUserInput() {
  rl.question("Please Enter The Number: ", (userInput) => {
    totalAttempt++;
    if (userInput == number) {
      console.log(`Total Attempt : ${totalAttempt}`);
      console.log("Yes, You guess correct number!");
      isCorrect = true;
      rl.close();
    } else {
      if (userInput < number) {
        console.log(`\nIncorrect (Total Attempt : ${totalAttempt})`);
        console.log("Hint : Too low\n");
      } else {
        console.log(`\nIncorrect (Total Attempt : ${totalAttempt})`);
        console.log("Hint : Too high\n");
      }
      takeUserInput(); // Continue to prompt the user
    }
  });
}

takeUserInput(); // Start the first input prompt
