// demo function to save data on database (depends on internet speed)
function saveToDB(data) {
  // Return a promise
  return new Promise((success, failure) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    console.log("Promise result pending...");

    setTimeout(() => {
      if (internetSpeed >= 5) {
        success("Success : Data Saved in database!");
      } else {
        failure("Failure : Weak Internet Connection!");
      }
    }, 1500);
  });
}

// More Readable Promise chaining (Multiple Handlers in Promise)
saveToDB("data1")
  .then(() => {
    console.log("Success : Data 1 Saved in database!");
    return saveToDB("data2"); // Return the next promise
  })
  .then(() => {
    console.log("Success : Data 2 Saved in database!");
    return saveToDB("data3"); // Continue the chain
  })
  .then(() => {
    console.log("Success : Data 3 Saved in database!");
    return saveToDB("data4");
  })
  .then(() => {
    console.log("Success : Data 4 Saved in database!");
  })
  .catch((error) => console.log(error)); // Catches errors from any promise in the chain
