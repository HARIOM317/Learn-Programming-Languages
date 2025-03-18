let message = "Hello, world!";

// startsWith() - Checks whether a string begins with the specified substring.
console.log(message.startsWith("Hello"));
console.log(message.startsWith("world", 7)); // from index 7
console.log(message.startsWith("world"));

// endsWith() - Checks whether a string ends with the specified substring.
console.log();
console.log(message.endsWith("world!"));
console.log(message.endsWith("hello")); // from index 7
console.log(message.endsWith("lo", 5)); // first 5 characters
