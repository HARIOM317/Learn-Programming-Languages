// converting to string
console.log("Implicit String Conversion");

let a = "100" + 24;
let b = "100" + 24.25;
let c = "100" + false;
let d = "100" + null;
let e = "100" + undefined;

console.log("a = ", a);
console.log("b = ", b);
console.log("c = ", c);
console.log("d = ", d);
console.log("e = ", e);

// converting to number
console.log("\nImplicit Number Conversion");
let w = "100" + true;
let x = "100" / 50;
let y = "100" - "50";
let z = "100" - null;

let x1 = 100 + true;
let y1 = 100 - "50";

console.log("x = ", x);
console.log("y = ", y);
console.log("z = ", z);
console.log("x1= ", x1);
console.log("y1 = ", y1);
