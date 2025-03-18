// Method - Actions that can be performed on an object.

// calculator object (Using key-value pair)
const calculator = {
  // object property
  PI: 3.1415927,

  // object methods
  add: function (a, b) {
    return a + b;
  },
  sub: function (a, b) {
    return a - b;
  },
  mul: function (a, b) {
    return a * b;
  },
  div: function (a, b) {
    return a / b;
  },
};

// calling calculator object methods
console.log("PI =", calculator.PI);
console.log("Sum =", calculator.add(10, 5));
console.log("Sub =", calculator.sub(10, 5));
console.log("Mul =", calculator.mul(10, 5));
console.log("Div =", calculator.div(10, 5));

// _________________________________________

// Another way to create object method
const area = {
  // object property
  PI: 3.14,

  // object methods
  circle(r) {
    return this.PI * r * r;
  },
  rectangle(l, b) {
    return l * b;
  },
  square(h) {
    return h * h;
  },
};

console.log("\nArea of circle :", area.circle(5));
console.log("Area of rectangle :", area.rectangle(5, 10));
console.log("Area of square :", area.square(10));
