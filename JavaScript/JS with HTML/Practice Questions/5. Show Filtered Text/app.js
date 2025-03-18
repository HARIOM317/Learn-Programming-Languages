// Task - Create a input field and paragraph and show only Alphabets (A-Z and a-z) on the paragraph by input field

let body = document.querySelector("body");

let input = document.createElement("input");
input.setAttribute("placeholder", "enter your name");
body.append(input);

let para = document.createElement("p");
body.append(para);

input.addEventListener("input", function () {
  // Regular Expression to filter text and replace other characters with ''
  let filteredValue = input.value.replace(/[^A-Za-z ]/g, "");
  para.innerText = filteredValue;
});
