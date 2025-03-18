// Manipulating HTML and CSS using JavaScript

// ========== getElementTagName ==========
let heading = document.getElementsByTagName("h1");

// ______  Access element ______
console.dir(heading);
console.log(heading[0].innerHTML);
console.log(heading[0].innerText);

// Update element
heading[0].innerHTML = "Updated : The amazing Spider Man";
