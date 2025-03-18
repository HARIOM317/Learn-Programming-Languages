// Manipulating HTML and CSS using JavaScript

// ========== getElementByClassName ==========

let images = document.getElementsByClassName("spiderManImg");
console.dir(images);

// access properties
console.log("Original Source:");
for (let i = 0; i < images.length; i++) {
  console.log(images[i].src);
}

// manipulate properties
console.log("Updated Source:");
for (let i = 0; i < images.length; i++) {
  images[i].src =
    "https://www.aceshowbiz.com/images/still/amazing-spider-man03.jpg";
  console.log(images[i].src);
}
