/*
// Only last parameters can be default parameter

// 1. Invalid
function sum(a = 0, b) {
  return a + b;
}

// 2. Valid
function sum(a = 0) {
  return a + b;
}

// 3. Valid
function sum(a = 0, b = 0) {
  return a + b;
}
*/

// b is a default argument with value 0
function sum(a, b = 0) {
  return a + b;
}

console.log("Sum =", sum(6));
console.log("Sum =", sum(6, 10));
