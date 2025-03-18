// repeat() - creates a new string by repeating the original string a specified number of times.

let greet = "Good Morning!";
let repeatGreet = greet.repeat(3);
console.log(repeatGreet);

// replace() - replace first occurrence sub-string with new word
let message = "Hello World! World is Beautiful.";
let newMessage = message.replace("World", "Earth");
console.log(newMessage);

// replaceAll() - replace all occurrences of sub-string with new word
let text = "Hello World! World is Beautiful.";
let newText = message.replaceAll("World", "Earth");
console.log(newText);
