// _____ function definition _____

// function to add two numbers
function add(a, b) {
  return a + b;
}

// function to return max of two numbers
function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

// _____ function calling _____

let sum = add(10, 20); // 10 and 20 are parameters
console.log("Sum = ", sum);

let maximum = max(10, 20); // 10 and 20 are parameters
console.log("Maximum = ", maximum);
