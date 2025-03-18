console.log("Start Program Execution");

let timeCount = 1;

// continuously run on every one second
let intervalId = setInterval(() => {
  console.log(`Executed Process : ${timeCount} Time`);
  timeCount++;

  // clear process if timeCount becomes more than 10
  if (timeCount > 10) {
    console.log("Interval cleared successfully!");
    clearInterval(intervalId); // stop execution
  }
}, 1000);

console.log("Interval :", intervalId);
console.log("End Program Execution\n");
