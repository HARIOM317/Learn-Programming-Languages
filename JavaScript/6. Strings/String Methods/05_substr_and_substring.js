let text = "Hello, world!";

// substr() - deprecated method (include last index)
let result1 = text.substr(7, 12);

// substring() - new method (exclude last index)
let result2 = text.substring(7, 12);

console.log(result1);
console.log(result2);
