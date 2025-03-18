const readline = require("readline");

// create interface
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// take user input by question
r1.question("Please enter your name : ", (userName) => {
  console.log("Your name is :", userName);
  r1.close(); // close interface
});
