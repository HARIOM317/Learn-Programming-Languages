// Promise 1
let promise1 = new Promise((resolve, reject) => {
  console.log("Promise is pending...");
  setTimeout(() => {
    console.log("Promise resolved successfully!");
    resolve(true);
  }, 2000);
});

// Promise 2
let promise2 = new Promise((resolve, reject) => {
  console.log("Promise is pending...");
  setTimeout(() => {
    console.log("Promise Rejected!");
    resolve(new Error("Something went wrong!"));
  }, 4000);
});

console.log(promise1);
console.log(promise2);
