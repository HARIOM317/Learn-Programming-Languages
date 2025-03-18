let count = 1;
const greetId = setInterval(() => {
  console.log("Hello, Sir");
  count++;

  // clear interval
  if (count > 5) {
    clearInterval(greetId);
    console.log("Clear interval successfully!");
  }
}, 2000);
