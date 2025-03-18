// Event bubbling - Ite occurs when we apply different event listeners for different nested elements.

// NOTE - when any child event listener trigger then its parent event listener will also trigger

let div = document.querySelector("div");
let ul = document.querySelector("ul");
let li = document.querySelectorAll("li");

div.addEventListener("click", function () {
  div.style.backgroundColor = "yellowgreen";
});

ul.addEventListener("click", function () {
  ul.style.backgroundColor = "seagreen";
});

li.forEach((item) => {
  item.addEventListener("click", function () {
    item.style.backgroundColor = "palegreen";
  });
});
