// Manipulating HTML and CSS using JavaScript

// ========== Query Selector ==========

// _____  1. SELECT ONE _____
console.log("\n\n _____ Select first item using query selector _____\n\n");

// select first h1
const heading = document.querySelector("h1");
console.log(heading.innerText);

// select img by id
const mainImage = document.querySelector("#mainImg");
console.log(mainImage.src);

// select element by class name
const oldImg = document.querySelector(".oldImg");
console.log(oldImg.src);

// _____  2. SELECT ALL _____
console.log("\n\n _____ Select all items using query selector _____\n\n");

// select all p elements
const paragraphs = document.querySelectorAll("p");
for (let i = 0; i < paragraphs.length; i++) {
  console.log(paragraphs[i].innerText);
}

// select all img elements inside .images class
const oldImages = document.querySelectorAll(".images img");
for (let i = 0; i < oldImages.length; i++) {
  console.log(oldImages[i].src);
}

// select all h2 elements
const subHeadings = document.querySelectorAll("h2");
for (let i = 0; i < subHeadings.length; i++) {
  console.log(subHeadings[i].innerText);
}
