function concat(arr) {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
    if (i < arr.length - 1) result += " ";
  }

  return result;
}

let arr = [
  "I",
  "love",
  "coding",
  "and",
  "web development",
  "with",
  "MERN",
  "stack",
];

let sentence = concat(arr);
console.log(sentence);
