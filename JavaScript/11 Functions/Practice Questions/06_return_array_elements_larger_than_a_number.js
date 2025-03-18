function getElement(arr, n) {
  let result = [];
  for (let num of arr) {
    if (num > n) result.push(num);
  }
  return result;
}

const arr = [10, 20, 39, 60, 41, 25, 15, 22, 35, 48, 52];
let n = 30;

let elements = getElement(arr, n);
console.log(elements);
