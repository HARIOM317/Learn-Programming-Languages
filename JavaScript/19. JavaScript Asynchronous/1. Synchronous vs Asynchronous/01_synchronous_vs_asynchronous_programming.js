// Synchronous Programming
let userName = "Hariom Mewada";
let age = 22;
let address = "Ashoka Garden, Bhopal, MP";

console.log(`Task 1 : ${userName} is ${age} years old and lives in ${address}`);
console.log("Task 1 completed successfully!\n");

// Asynchronous Programming
console.log("Task 2 : (Started) Fetching User Data...");
let i = 1;
let intervalId = setInterval(() => {
  console.log(`Sending Request - ${i} to get data.`);
  i++;

  if (i > 3) {
    clearInterval(intervalId);
  }
}, 1500);

setTimeout(() => {
  console.log("User data fetched successfully!");
  console.log("Task 2 completed successfully!");
}, 5000);

// Synchronous Programming
console.log("\nTask 3 : started!");
console.log("Task 3 completed successfully!\n");
