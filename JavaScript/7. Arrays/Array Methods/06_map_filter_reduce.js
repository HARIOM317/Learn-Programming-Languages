let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Array :", numbers);

// 1. map() - perform operation on all all elements of array
let squares = numbers.map((num) => num * num);
console.log("Array square :", squares);

// 2. filter() - filter array elements by condition
let evenNumbers = numbers.filter((num) => num % 2 == 0);
console.log("Even numbers :", evenNumbers);

// 3. reduce() - reduce array result in a single output value
let arraySum = numbers.reduce((accumulator, current) => accumulator + current);
console.log("Array sum :", arraySum);

// _______________________________________________________

// all map(), filter() and reduce() chaining

// Task: return sum of cube of all even elements of numbers array
let ans = numbers
  .filter((num) => num % 2 == 0)
  .map((num) => num * num * num)
  .reduce((sum, num) => sum + num, 0); // initially sum=0

console.log("Ans =", ans);
