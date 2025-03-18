// arrow function to add two numbers
const add = (a, b) => a + b;

// arrow function to get average og given numbers
const avg = (...numbers) => {
  if (numbers.length == 0) return 0;

  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum / numbers.length;
};

console.log("Sum =", add(10, 15));
console.log("Average =", avg(10, 20, 30, 40, 50));
