let sentence = "JavaScript is versatile and fun!";
let words = sentence.split(" "); // split words by space

console.log(words);
console.log(typeof words);

let data = "apple,banana,cherry,dates";
let fruits = data.split(",", 2); // limit parameter to restricts the number of elements
console.log(fruits);
