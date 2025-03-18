// Manipulating HTML and CSS using JavaScript

// ========== getElementById ==========

// a) ______ Access and manipulate img element ______
// document.getElementById("mainImg") return an object
let imgObj = document.getElementById("mainImg");

// printing all properties of imgObj
console.dir(imgObj);

// access imgObj properties
console.log("Image id :", imgObj.id);
console.log("Image src :", imgObj.src);
console.log("Image tag name :", imgObj.tagName);

// manipulate imgObj properties
imgObj.src =
  "https://i.pinimg.com/originals/2e/6a/b0/2e6ab0ae742c21987f378f38b01f8208.png";

// b) ______ Access and manipulate p element ______
let paraObj = document.getElementById("description");

// printing all properties of paraObj
console.log(paraObj);

// access paraObj properties
console.log("Paragraph id :", paraObj.id);
console.log("Paragraph tag name :", paraObj.tagName);
console.log("Paragraph content :", paraObj.innerText);

// manipulate paragraph properties
paraObj.innerText =
  "Spider-Man is one of the most popular and commercially successful superheroes.[11] He has appeared in countless forms of media, including several animated TV series";
