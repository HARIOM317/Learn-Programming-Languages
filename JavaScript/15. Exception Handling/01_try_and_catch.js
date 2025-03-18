// Example - 1
try {
  console.log("Value of a is:", a);
} catch {
  console.log("Error : variable a is not declared!");
}

//  Example - 2
try {
  let a = 10;
  let b = 0;
  let c = a / b;

  console.log(c);
  console.log(Done); // Error: Done is not defined
} catch (error) {
  console.log("Error occurred!");
}

console.log("Hey, I am Done!");
