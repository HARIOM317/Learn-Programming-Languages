const readline = require("readline");

// Create the readline interface for terminal input/output.
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let todos = []; // To store all todo items or tasks

// Wrap r1.question in a Promise to use async/await.
function askQuestion(query) {
  return new Promise((resolve) => {
    r1.question(query, (answer) => {
      resolve(answer);
    });
  });
}

// Function to show all list items.
function showList() {
  if (todos.length === 0) {
    console.log("No list item to show!");
  } else {
    console.log("\nYour Todo List");
    // show item in the form of table
    console.table(
      todos.map((todo, index) => ({
        "No.": index + 1,
        Task: todo,
      }))
    );
  }
}

// Function to add a new task.
async function addItem() {
  let newItem = await askQuestion("Enter new task: ");
  todos.push(newItem.trim());
  console.log("Task added successfully!");
}

// Function to remove a task by index.
async function removeItem() {
  if (todos.length === 0) {
    console.log("No task to remove.");
  } else {
    let indexStr = await askQuestion(
      "Enter the item No. you want to remove: "
    );
    // Convert from 1-based index to 0-based index.
    let index = parseInt(indexStr, 10) - 1;
    if (isNaN(index) || index < 0 || index >= todos.length) {
      console.log("Invalid index.");
    } else {
      todos.splice(index, 1);
      console.log("Task removed successfully!");
    }
  }
}

// Main function to start the app.
async function main() {
  while (true) {
    // Take user input.
    let command = await askQuestion(
      "Enter a command (list, add, delete, exit): "
    );
    command = command.trim().toLowerCase();

    if (command === "list") {
      showList();
    } else if (command === "add") {
      await addItem();
    } else if (command === "delete") {
      await removeItem();
    } else if (command === "exit") {
      console.log("Exiting the todo app.");
      break;
    } else {
      console.log("Invalid input.");
    }

    console.log("\n"); // New line for clarity.
  }

  // Close the readline interface.
  r1.close();
}

// Start the app.
main();
