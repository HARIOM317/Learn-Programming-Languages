// Higher Order Functions - A function who either Takes one or multiple functions() as arguments, or Returns a function(), or Both.

// 🎗️ 1. Takes one or multiple functions as arguments 🎗️

// Higher order function
function multipleGreets(func, n) {
  for (let i = 1; i <= n; i++) {
    func();
  }
  console.log();
}

const greet = function () {
  console.log("Hello, Good Morning!");
};

// function calling
multipleGreets(greet, 5);

// direct passing function as parameter
multipleGreets(function () {
  console.log("Hello, developers");
}, 5);

// ______________________________________________________

// 🎗️ 2. Return a function 🎗️
// factory function that returns a function to check a number is even or odd
function oddEvenCheck(request) {
  if (request === "odd") {
    return function (n) {
      return n % 2 === 1;
    };
  } else if (request === "even") {
    return function (n) {
      return n % 2 === 0;
    };
  } else {
    return "Invalid request!";
  }
}

let request = "odd";
const odd = oddEvenCheck(request);

const even = oddEvenCheck("even");

console.log(odd(10));
console.log(odd(5));

console.log(even(8));
console.log(even(7));

// Higher order function that returns a greeting function
function createGreeting(greeting) {
  return function (name) {
    return `${greeting}, ${name}`;
  };
}

// create a specific greeting function
const sayHello = createGreeting("Hello");

console.log(sayHello("Hariom"));
