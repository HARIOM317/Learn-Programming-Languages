/*
    Everything in JS is true or false (in boolean context)

    This doesn't mean their value itself is false or true, but they are treated as false or true if taken in boolean context
*/

// 1. _____ Falsy values _____
// 1) false
if (false) {
  console.log("it has true value");
} else {
  console.log("it has false value");
}

// 2) 0
if (0) {
  console.log("it has true value");
} else {
  console.log("it has false value");
}

// 3) -0
if (-0) {
  console.log("it has true value");
} else {
  console.log("it has false value");
}

// 4) 0.00
if (0.0) {
  console.log("it has true value");
} else {
  console.log("it has false value");
}

// 5) 0n - BigInt 0
if (0n) {
  console.log("it has true value");
} else {
  console.log("it has false value");
}

// 6) "" - empty string
if ("") {
  console.log("it has true value");
} else {
  console.log("it has false value");
}

// 7) null
if (null) {
  console.log("it has true value");
} else {
  console.log("it has false value");
}

// 8) undefined
if (undefined) {
  console.log("it has true value");
} else {
  console.log("it has false value");
}

// 9) NaN
if (NaN) {
  console.log("it has true value");
} else {
  console.log("it has false value");
}
