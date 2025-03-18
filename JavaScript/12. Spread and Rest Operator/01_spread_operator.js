// Spread operator - Spread an iterable into its elements

// 1. Copy array or object using spread operator
let colors = ["Red", "Pink", "Green", "Yellow", "Blue"];
let newColors = [...colors, "Orange", "brown", "Black"];
console.log("New Colors :", newColors);

const userdata = {
  email: "xyz@mail.com",
  password: "abc@123!",
};

let newUserData = { ...userdata, age: 22, gender: "Male" };
console.log("New user data :", newUserData);

// 2. Spread array or string elements and Iterate using spread operator
let arr = [1, 2, 3, -1, -4, 5];
console.log("\nAll array elements :", ...arr);
console.log("Minimum element of array :", Math.min(...arr));
console.log(..."Hariom Singh Rajput"); // spread each char of string
