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
    }, 3000);
  });
}

// data object
let data = {
  name: "Hariom Mewada",
  age: 22,
  marks: 89.95,
};

// Handling the promise result (Using then() and catch() method)
saveToDB(data)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
