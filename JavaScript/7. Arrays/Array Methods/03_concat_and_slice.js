// 1. concat() - Merges two or more arrays into a new array
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

let combined = arr1.concat(arr2);
console.log("Combined array :", combined);

// 2. slice() - Returns a copy of a portion of an array into a new array
let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

let sliced = letters.slice(2, 5); // from index 2 to 4 (last index is exclusive)
console.log(sliced);
