const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Please enter a number : ", (num) => {
  console.log(`\nTable of : ${num}\n`);

  for (let i = 1; i <= 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
  }

  r1.close();
});
