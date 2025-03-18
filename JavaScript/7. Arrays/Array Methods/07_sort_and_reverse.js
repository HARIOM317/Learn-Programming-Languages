let numbers = [3, 1, 4, 1, 5, 9, 17, 28, 16, 32];

// sort() - to sort an array
// 1. By default it converts elements to strings and sorts lexicographically.
numbers.sort();
console.log("Lexicographically sorted :", numbers);

// 2. sort in ascending order using our custom comparator
numbers.sort((a, b) => a - b);
console.log("Sorted in ascending order :", numbers);

// 3. sort  in descending order using our custom comparator
numbers.sort((a, b) => b - a);
console.log("Sorted in descending order :", numbers);

// _____________________________________

// reverse() - to reverse array elements
let words = ["Hello", "World", "Welcome", "Back"];
let reverseWords = words.reverse();
console.log("Reversed array :", words);
