// Select elements
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let form = document.querySelector("form");
let input = document.querySelector("input");

// Event listener to add new task
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const task = input.value.trim();
  if (task === "") return;

  // check if item already exist in list
  const isExist = Array.from(ul.children).some(
    (li) => li.dataset.task === task
  );

  if (isExist) {
    alert("Item already exist in list!");
  } else {
    // Task name
    let item = document.createElement("li");
    item.dataset.task = task; // store the task as a data attribute
    item.innerText = task;

    // Button to remove task
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Remove";
    deleteBtn.classList.add("delete");

    // Eventlistener to remove task
    deleteBtn.addEventListener("click", function () {
      item.remove();
    });

    // append item in list
    item.appendChild(deleteBtn);
    ul.appendChild(item);
  }

  input.value = ""; // reset input field
});
