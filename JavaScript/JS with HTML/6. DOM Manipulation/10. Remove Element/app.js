// 1. _____ Using removeChild() _____

// remove button from document
const body = document.querySelector("body"); // select body
const btn = document.getElementById("btn"); // select button
body.removeChild(btn);

// remove last two paragraphs from document
const container = document.querySelector(".container"); // select parent container
container.removeChild(container.lastElementChild);
container.removeChild(container.lastElementChild);

// _______________________________________________

// 2. _____ Using remove() _____

// remove Last 2 List Items (Item 4 and Item 5) from list
const listItem = document.querySelectorAll("#myList li");
listItem[4].remove();
listItem[3].remove();
