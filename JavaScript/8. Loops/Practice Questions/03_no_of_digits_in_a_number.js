let num = 10005000;

let n = num;
let count = 0;

while (n > 0) {
  n = Math.floor(n / 10);
  count++;
}

console.log(`Total digits in ${num} is : ${count}`);
