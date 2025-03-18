// Example - 1
let text = "  JavaScript is AWESOME!  ";

let result = text.trim().toLowerCase().replace("awesome", "amazing");

console.log(result);

// Example - 2
let sentence = "The quick brown fox jumps over the lazy dog";

let words = sentence
  .split(" ")
  .map((word) => word.toUpperCase())
  .join("-");

console.log(words);
