// var - var can be update and re-declared within its scope
var a = undefined;
var b = "Hariom";

{
  var b = 1000;
}

console.log("b = ", b);

// let - let can be update but can not re-declared (Recommended)

let x = "Saurabh";
let y = 10;

{
  let x = 2000;
}

console.log("x = ", x);

// const - const can neither be update nor be re-declared
const p = "Java";
{
  // p = "HTML"; // it will throw an error
  const p = "Python";
}
console.log("p = ", p);
