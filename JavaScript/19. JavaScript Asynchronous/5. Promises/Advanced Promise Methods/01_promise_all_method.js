const promise1 = Promise.resolve("Task 1 completed");
const promise2 = 25; // This value is treated as a resolved promise.
const promise3 = Promise.resolve("Task 3 completed");
const promise4 = Promise.reject("Task 4 failed");

// If any promise rejects, it immediately rejects with the reason of the first rejected promise.
Promise.all([promise1, promise2, promise3, promise4])
  .then((result) => {
    console.log("Promise resolved with :", result);
  })
  .catch((error) => console.log("Error :", error));
