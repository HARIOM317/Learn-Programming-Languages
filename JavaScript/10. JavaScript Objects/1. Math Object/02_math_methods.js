// Methods

// abs() - Returns absolute value of a number
console.log("abs() - Absolute value of a number");
console.log("Absolute value of -10 :", Math.abs(-10));
console.log("Absolute value of 3 - 4.5 :", Math.abs(3 - 4.5));

// pow() - Returns power of a number
console.log("\npow() - Power of a number");
console.log("Pow(5, 3) :", Math.pow(5, 3));
console.log("Pow(2, 4) :", Math.pow(2, 4));

// floor() - Returns the largest integer less than or equal to a number
console.log("\nfloor() - Floor value of a number");
console.log("Floor value of -10.5 :", Math.floor(-10.5));
console.log("Floor value of 10.5 :", Math.floor(10.5));

// ceil() - Returns the smallest integer greater than or equal to a number
console.log("\nceil() - Ceil value of a number");
console.log("Ceil value of -10.3 :", Math.ceil(-10.3));
console.log("Ceil value of 10.3 :", Math.ceil(10.3));

// random() - Returns a random number between 0 to 1 (default)
console.log("\nrandom() - Random number");
console.log("Random number between 0 to 1 :", Math.random());
console.log(
  "Random number between 0 to 100 :",
  Math.floor(Math.random() * 100)
);

// round() - Returns the value of a number rounded to the nearest integer
console.log("\nround() - Round a number");
console.log("Round value of 5.49 :", Math.round(5.49));
console.log("Round value of 5.5 :", Math.round(5.5));

// sqrt() - Returns the square root of a number
console.log("\nsqrt() - Square root of a number");
console.log("Square root of 25 :", Math.sqrt(25));
console.log("Square root of 8.64 :", Math.sqrt(8.64));

// cbrt() - Finds a cube root of a given number
console.log("\ncbrt() - Cube root of a number");
console.log("Cube root of 216 :", Math.cbrt(216));
console.log("Cube root of 20 :", Math.cbrt(20));

// min() - Returns the smallest of zero or more numbers
console.log("\nmin() - Minimum number");

console.log("Minimum of -5,-15,-25,-55 :", Math.min(-5, -15, -25, -55));

let arr1 = [10, 20, 30, 40, 50, 60, 90];
console.log(`Minimum of ${arr1} : ${Math.min(...arr1)}`);

// max() - Returns the largest of zero or more numbers
console.log("\nmax() - Maximum number");

console.log("Maximum of 5,15,25,55,100 :", Math.max(5, 15, 25, 55, 100));

let arr2 = [10, 20, 30, 40, 50, 60, 90];
console.log(`Maximum of ${arr2} : ${Math.max(...arr2)}`);

// trunc() - Returns the integer part of the number
console.log("\ntrunc() - Integer part of a number");
console.log("Integer part of -9.123 :", Math.trunc(-9.123));
console.log("Integer part of 42.9876 :", Math.trunc(42.9876));
