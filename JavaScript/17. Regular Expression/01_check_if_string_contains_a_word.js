let regex = /hello/;

let str1 = "hello world";
let str2 = "Hello World";

// checks if the pattern exists in the string.
console.log(regex.test(str1));
console.log(regex.test(str2));
