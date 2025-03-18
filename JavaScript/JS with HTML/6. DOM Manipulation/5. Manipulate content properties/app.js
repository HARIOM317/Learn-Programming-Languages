let para1 = document.querySelector(".para1");

console.log("Inner text : ", para1.innerText); // shows only visible text
console.log("Text content : ", para1.textContent); // shows all text
console.log("Inner HTML : ", para1.innerHTML); // shows full markup

// Manipulate text using innerText property (Use when only need to change text content)
let para2 = document.querySelector(".para2");
para2.innerText = "Spider man is amazing super hero in comic-book.";

// Manipulate text using innerHTML property (Use when also want to use html elements with content)
let para3 = document.querySelector(".para3");
para3.innerHTML = `There are many different <b>Spider man</b> in <a href="#">marvel studio</a>, but my favorite one is <u>Peter Parker</u>.`;
