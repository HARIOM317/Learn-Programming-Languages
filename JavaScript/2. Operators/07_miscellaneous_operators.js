// Miscellaneous  Operator
console.log("Miscellaneous Operators");

let a = 10;
let b = 20;

// 1. ternary operator
a < b ? console.log("b is greater") : console.log("a is greater");

// 2. typeof operator
console.log("type of a = ", typeof a);
console.log("type of b = ", typeof b);
a != 10 ?? console.log("Condition is true");

// 3. nullish coalescing operator (??) - returns the first operand if it is not null or undefined. Otherwise, it returns the second operand.
let x = null;
let y = x ?? 5;
console.log("y = ", y);

x = 10;
let z = x ?? 5;
console.log("z = ", z);

// 4. comma operator (,)
let programmingLanguages = ("JavaScript", "Python", "C++", "Java"); // assign the last string
console.log(programmingLanguages);

console.log("Hello world!", "I am hariom.", "age : 22", 10 * 10);
