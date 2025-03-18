// Question 1 - Write arrow function to get square of a number
const square = (n) => n * n;

console.log(square(2));
console.log(square(5));

// _____________________________________________________

// Question 2 - Write arrow function to check a number is even or not
const isEven = (n) => n % 2 == 0;

console.log(isEven(10));
console.log(isEven(7));

// _____________________________________________________

// Question 3 - Write arrow function to get average of all given numbers
const average = (...numbers) => {
  if (numbers.length == 0) return 0;

  let sum = 0;
  for (let num of numbers) sum += num;

  return sum / numbers.length;
};

console.log(average(10, 15, 20));
console.log(average(10, 20, 30, 40, 50));
