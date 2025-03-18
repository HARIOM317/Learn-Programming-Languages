// Note : JavaScript automatically converts objects keys to string, even if we made the number as a key, the number will be converted to string.

let obj = {
  1: "a", // key is '1'
  2: "b", // key is '2'
  true: "c", // key is 'true'
  null: "d", // key is 'null'
  undefined: "e", // key is 'undefined'
  data: "This is how objects keys are converted into strings automatically",
};

console.log(obj);
console.log(obj[1]); // obj['1']
console.log(obj[2]); // obj['2']
console.log(obj[true]); // obj['true']
console.log(obj[null]); // obj['null']
console.log(obj[undefined]); // obj['undefined']
console.log(obj["data"]); // obj['data'] , Note : obj[data] will give an error
