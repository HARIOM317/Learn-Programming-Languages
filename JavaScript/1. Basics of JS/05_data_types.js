// _____ PRIMITIVE DATA TYPES IN JS _____

// 1. Number
let num1 = 10;
let num2 = 10.22;
console.log("num1 + num2 = ", num1 + num2);

// 2. Boolean
let isAdult = false;
let isStudent = true;
console.log("\nadult = ", isAdult, ", student = ", isStudent);

// 3. String
let fname = "hariom";
let lname = "mewada";
let fullname = fname + " " + lname;

console.log("\nFirst name :", fname);
console.log("Last name :", lname);
console.log("Full name :", fullname);

// 4. null
let houseNo = null;
let apartment = null;

console.log("\nHouse No. =", houseNo);
console.log("Apartment =", apartment);

// 5. Bigint - for large integer
let largeNum1 = 1245646564515635412348923448234842842343546576876789n;
let largeNum2 = BigInt("76768687") + BigInt("10000000");

console.log("\nLarge Number 1 :", largeNum1);
console.log("Large Number 2 :", largeNum2);

// 6. undefined
let address;
console.log("\naddress = ", address);

// 7. Symbol
let mySymbol = Symbol("I am a nice symbol");
console.log("\nMy Symbol :", mySymbol);
