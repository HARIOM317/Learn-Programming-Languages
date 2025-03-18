// Manipulating HTML element attributes

// select first img element
let imgObj = document.querySelector("img");

// select all h2 elements
let subHeadings = document.querySelectorAll("h2");

// get image id attribute
let imgId = imgObj.getAttribute("id");
console.log(imgId);

// ========== 1. MANIPULATE ID ATTRIBUTE ==========
// Note : changing id attribute will removes all styles and script applied on prev id

imgObj.setAttribute("id", "main-img");
console.log(imgObj.getAttribute("id"));

// ========== 2. MANIPULATE STYLE ATTRIBUTE ==========
// NOTE : These all style will be apply as inline CSS that will override internal or external CSS properties

// apply css using style set attribute
imgObj.setAttribute("style", "border-radius: 50%; border: 5px solid red;");

// update css for all h2 elements using for-each loop
subHeadings.forEach((heading) => {
  heading.style.color = "red";
  heading.style.backgroundColor = "yellow";
  heading.style.fontWeight = "500";
  heading.style.textTransform = "uppercase";
  heading.style.fontSize = "1.25rem";
});
