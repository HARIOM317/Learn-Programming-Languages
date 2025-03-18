// \w+ matches words (letters, numbers, and underscores).
// g flag finds all matches in the string.

let regex = /\w+/g;

let str = "Hello, how are you?";
console.log(str.match(regex));
