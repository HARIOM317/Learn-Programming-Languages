let regex = /hello/i; // 'i' makes it case-insensitive

let str1 = "hello world";
let str2 = "Hello World";
let str3 = "HELLO, GOOD MORNING!";

// checks if the pattern exists in the string.
console.log(regex.test(str1));
console.log(regex.test(str2));
console.log(regex.test(str3));
