// function to generate random rgb value
function generateRandomColor() {
  // generate random r, g, b value from 0 to 255
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

// select elements
let btn = document.querySelector("button");
let colorName = document.querySelector(".rgb-value");
let box = document.querySelector(".color-box");

// add event listener on button to show random color on box
btn.addEventListener("click", function () {
  let color = generateRandomColor();
  colorName.innerText = color;
  box.style.backgroundColor = color;
});
