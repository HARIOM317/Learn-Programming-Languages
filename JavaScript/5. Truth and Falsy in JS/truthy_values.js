/*
    Everything in JS is true or false (in boolean context)

    This doesn't mean their value itself is false or true, but they are treated as false or true if taken in boolean context
*/

// 2. _____ Truthy values _____
// 1) true
if (true) {
  console.log("it has true value");
} else {
  console.log("it has false value");
}

// 2) 1
if (1) {
  console.log("it has true value");
} else {
  console.log("it has false value");
}

// 3) 1n - BigInt 1
if (1n) {
  console.log("it has true value");
} else {
  console.log("it has false value");
}

// 4) any non-zero positive number
if (5) {
  console.log("it has true value");
} else {
  console.log("it has false value");
}

// 5) any non-zero negative number
if (-7) {
  console.log("it has true value");
} else {
  console.log("it has false value");
}

// 6) any non-zero decimal (floating point) number
if (9.25) {
  console.log("it has true value");
} else {
  console.log("it has false value");
}

// 7) any non-empty string
if ("abc") {
  console.log("it has true value");
} else {
  console.log("it has false value");
}

// 8) space
if (" ") {
  console.log("it has true value");
} else {
  console.log("it has false value");
}
