// 1. Basic Array Destructuring
const numbers = [10, 20, 30]; //Extract values
const [a, b, c] = numbers;

console.log("a =", a); // 10
console.log("b =", b); // 20
console.log("c =", c); // 30

// 2. Skipping Elements
const arr = [10, 20, 30, 40, 50];
const [x, , y, , z] = arr;

console.log("\nx =", x); // 10
console.log("y =", y); // 30
console.log("z =", z); // 50

// 3. Using Rest Operator(...)
const nums = [1, 2, 3, 4, 5, 6];
const [first, second, ...rest] = nums;

console.log("\nfirst =", first);
console.log("second =", second);
console.log("rest =", rest);
