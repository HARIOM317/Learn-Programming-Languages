// 1. _____ Manipulate image class _____
let imgObj = document.querySelector("img");

console.log(imgObj.classList);

// 1. remove()
// remove all prev classes of img
imgObj.classList.remove("rounded");
imgObj.classList.remove("border-black");
// ___________________________________________

// 2. add()
// add new classes in img
imgObj.classList.add("circular");
imgObj.classList.add("border-red");
// ___________________________________________

// 3. contains()
// check h2 contains text-blue class or not
let subHeading = document.querySelector("h2");
let isContain = subHeading.classList.contains("text-blue");

if (isContain) console.log("Yes, h2 contain text-blue class.");
else console.log("No, h2 does not contain text-blue class");
// ___________________________________________

// 4. toggle()
// toggle dark and light mode
let btn = document.getElementById("btn");
let body = document.querySelector("body");

btn.addEventListener("click", function () {
  body.classList.toggle("dark-mode");
});
