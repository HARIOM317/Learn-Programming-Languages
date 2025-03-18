let arr = [1, 2, 3, 4, 5];

// Question 1 : Square and sum the array elements using the arrow function and then find the average of the array
let squareSum = arr.map((num) => num * num).reduce((sum, num) => sum + num);
console.log(squareSum);

let avg = squareSum / arr.length;
console.log(avg);

// __________________________________________________

// Question 2 : Create a new array using the map function whose each element is equal to the original element plus 5
let newArr = arr.map((num) => num + 5);
console.log(newArr);

// __________________________________________________

// Question 3 : Create a new array whose elements are in uppercase of words present in the original array.
let words = ["apple", "ball", "cat", "dog", "elephant"];
let upperCaseWords = words.map((word) => word.toUpperCase());
console.log(upperCaseWords);

// __________________________________________________

// Question 4 - Multiply each element by 2 and return those elements which is greater that 10?

let array = [2, 3, 4, 5, 6, 7, 8];
let arr2 = array
  .map((element) => element * 2)
  .filter((element) => element > 10);

console.log(arr2);
