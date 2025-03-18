function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) != -1) count++;
  }

  return count;
}

let str = "Apple is a Sweet and Health Fruit.";
let totalVowels = countVowels(str);
console.log("Total vowels =", totalVowels);
