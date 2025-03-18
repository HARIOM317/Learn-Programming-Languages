// Rest operator - Collect multiple elements into an array (It works with functions)

// function to add any indefinite number of elements
function sum(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

console.log("Sum of elements :", sum(1, 2, 3, 4, 5));
console.log("Sum of elements :", sum(1, 4, 6, 10));
