let a = 10;
let b = 20;

console.log("a = ", a);
console.log("b = ", b);

// Comparison Operator
console.log("\nComparison Operators");
console.log("a == b : ", a == b);
console.log("a > b : ", a > b);
console.log("a < b : ", a < b);
console.log("a <= b : ", a <= b);
console.log("a >= b : ", a >= b);
console.log("a != b : ", a != b);

// check strict equality or inequality
let x = 5;
let y = "5";

console.log(`\nx = ${x} (${typeof x})`);
console.log(`y = ${y} (${typeof y})`);

// Normal equality - check only values
console.log("\nNormal equality or inequality");
console.log("x == y :", x == y);
console.log("x != y :", x != y);

// Strict equality - check values as well as type
console.log("\nStrict equality or inequality");
console.log("x === y :", x === y); // strict equality
console.log("x !== y :", x !== y); // strict inequality
