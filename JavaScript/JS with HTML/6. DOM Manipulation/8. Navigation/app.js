// Select button element
const btn = document.getElementById("myButton");

// 1. Parent Element
// get parent element for button
const parent = btn.parentElement;
console.log("Parent Element :", parent);

// Manipulate parent element
parent.style.backgroundColor = "yellow";
parent.style.border = "2px solid black";
parent.style.padding = "1rem";
parent.style.borderRadius = "0.5rem";
// _______________________________________________

// 2. Children Elements
// access and manipulate all direct children of the parent container
const container = parent.children;
for (child of container) {
  child.style.color = "darkred";
}
// _______________________________________________

// 3. Previous and Next Element Sibling
// previousElementSibling - select just previous sibling element if exist
const prevSibling = btn.previousElementSibling;
prevSibling.innerText = "I am the previous sibling element of button.";
prevSibling.style.color = "green";

// nextElementSibling - select just next sibling element if exist
const nextSibling = btn.nextElementSibling;
nextSibling.style.color = "green";
