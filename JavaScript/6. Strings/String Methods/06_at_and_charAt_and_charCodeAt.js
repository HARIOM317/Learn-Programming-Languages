let greet = "Hello, developers!";

// at() - returns the character at the specified index (support negative index)
console.log("at() method:");

console.log(greet.at(0));
console.log(greet.at(1));
console.log(greet.at(-1));
console.log(greet.at(-2));

// charAt() - returns the character at a specified index (does not support negative index)
console.log("\ncharAt() method:");

console.log(greet.charAt(0));
console.log(greet.charAt(1));

// charCodeAt() - returns the UTF-16 code unit (a number) corresponding to the character at the specified index.
console.log("\ncharCodeAt() method:");

console.log(greet.charCodeAt(0));
console.log(greet.charCodeAt(1));
console.log(greet.charCodeAt(20)); // NaN for invalid index
