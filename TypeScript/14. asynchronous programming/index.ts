// asynchronous programming
function fetchData(): void {
  console.log("Fetching data...");

  setTimeout(() => {
    console.log("Data fetched successfully@");
  }, 2000);
}

function anotherTask(): void {
  console.log("Another task!");
}

fetchData();
anotherTask();
