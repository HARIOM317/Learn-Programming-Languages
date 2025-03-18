// 1. 🎗️ ========== Global Scope ========== 🎗️

// Global scope variable - accessible for whole file
let myName = "Hariom Singh Rajput";
let sum = 100;
let product = 200;

// _____________________________________________________

// 2. 🎗️ ========== Function scope ========== 🎗️
function sayHello() {
  // Function scope variable - accessible within the function only
  const msg = "Hello, Developers!";
  console.log(msg);
}

// console.log(msg); // ReferenceError : msg is not defined
sayHello();

function getAns() {
  let sum = 500; // function local variable
  product = 1000; // global variable
  console.log(`Withing function sum = ${sum}, product = ${product}`);
}

getAns();
console.log(`Outside function sum = ${sum}, product = ${product}\n`);

// _____________________________________________________

// 3. 🎗️ ========== Block Scope ========== 🎗️
{
  // Block scope variable - accessible within this block only
  let a = 10;
  var b = 20; // accessible outside the block
}
// console.log("a =", a); // ReferenceError
console.log("b =", b); // accessible

let i = 1;
// Block Scope
while (i <= 10) {
  // Block scope variable - accessible within the loop only
  let num = i * 5;
  console.log("Inside loop :", num);
  i++;
}

// console.log("Outside loop :", num); // ReferenceError: msg is not defined

let age = 23;
if (age >= 18) {
  let str = "adult"; // Block scope variable
  console.log(str);
}

// console.log(str); // ReferenceError

// _____________________________________________________

// 4. 🎗️ ========== Lexical Scope ========== 🎗️
function outerFunc() {
  let x = 10;
  let y = 20;

  function innerFunc() {
    console.log("x = ", x); // accessible (lexical scope)
    console.log("y = ", y); // accessible (lexical scope)
    console.log("z = ", z); // accessible (lexical scope)
  }

  let z = 30; // it is accessible due to hoisting in js

  innerFunc();
}

outerFunc();

// _____________________________________________________

// access global variables
console.log("\nmyName =", myName);
console.log("sum =", sum);
console.log("product =", product);
