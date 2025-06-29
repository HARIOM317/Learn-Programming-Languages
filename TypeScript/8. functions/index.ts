// Regular functions
function add(a: number, b: number): number {
  return a + b;
}

function sub(a: number, b: number): Number {
  return a - b;
}

// Function expression
const mul = function (a: number, b: number): number {
  return a * b;
};

const div = function (a: number, b: number): Number {
  return a / b;
};

// Arrow functions
const modulo = (a: number, b: number): number => {
  return a % b;
};

const pow = (a: number, b: number): number => {
  return a ** b;
};

// default & optional parameter
function greet(msg: string = "Welcome", name?: string) {
  return `${msg} ${name ? name : ""}`;
}

// Rest parameter
function addNumbers(...args: number[]): number {
  return args.reduce((total, num) => total + num);
}

console.log("Add :", add(10, 20));
console.log("Sub :", sub(10, 20));
console.log("Mul :", mul(10, 20));
console.log("Div :", div(10, 20));
console.log("Mod :", modulo(20, 18));
console.log("Pow :", pow(2, 6));

console.log(greet());
console.log(greet("Hi"));
console.log(greet("Hi", "Hariom"));

console.log("Total :", addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
