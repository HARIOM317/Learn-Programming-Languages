let num = 287152;

let n = num;
let sum = 0;

while (n > 0) {
  let lastDigit = n % 10;
  sum += lastDigit;
  n = Math.floor(n / 10);
}

console.log(`Sum of digits of ${num} is ${sum}`);
