// A simple function that simulates an asynchronous operation using setTimeout
function greetUser(name, callback) {
  console.log("Stared greeting...");

  // Simulate a delay of 1 second
  setTimeout(() => {
    const greeting = "Hello, " + name + "!";

    // Once done, invoke the callback with the greeting message
    callback(greeting);
  }, 1000);
}

// Callback function that displays the greeting
function displayGreeting(message) {
  console.log(message);
}

// Call the function with a name and the callback function
greetUser("Hariom", displayGreeting);
