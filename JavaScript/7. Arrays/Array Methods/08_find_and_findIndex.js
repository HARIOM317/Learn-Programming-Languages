let numbersArray = [5, 12, 8, 130, 44];

// 1. find() - Returns the value of the first element in the array that satisfies the provided testing function otherwise undefined.
let found = numbersArray.find((element) => element > 10);
console.log(found); // return 12

// 2. findIndex() - Returns the index of the first element in the array that satisfies the testing function otherwise -1.
let indexFound = numbersArray.findIndex((element) => element > 10);
console.log(indexFound); // return 1 (index of 12)
