let text = "JavaScript is awesome!";

// indexOf()
console.log(text.indexOf("is")); // Output: 11
console.log(text.indexOf("a")); // Output: 1  (first occurrence of 'a')
console.log(text.indexOf("Python")); // Output: -1 (not found)
console.log(text.indexOf("a", 2)); // Output: 3 (search starts from index 2)

// valueOf() - returns the value of a string
console.log(text.valueOf());

// includes
console.log(text.includes("JavaScript")); // Output: true
console.log(text.includes("Python")); // Output: false
console.log(text.includes("is", 10)); // Output: true (search starts after index 10)
