let pencilPrice = 10;
let eraserPrice = 5;
let copyPrice = 50;

// without usings template literals
let output1 =
  "The total price is " + (pencilPrice + eraserPrice + copyPrice) + " Rupees.";

// Using template literals
let output2 = `The total price is ${
  pencilPrice + eraserPrice + copyPrice
} Rupees.`;

console.log("Output :", output1);
console.log("Output :", output2);
