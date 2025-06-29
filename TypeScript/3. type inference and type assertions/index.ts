// 1. Type Inference
let username = "Hariom"; // automatically define string type by value
let num = 100; // automatically define string type by value
console.log(typeof username);
console.log(typeof num);

// 2. Type Assertions
let someValue: any = "Hariom singh";
let len: number = (someValue as string).length;
console.log(len);
