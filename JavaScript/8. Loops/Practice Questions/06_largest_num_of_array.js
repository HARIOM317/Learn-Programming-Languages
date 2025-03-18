let arr = [10, 12, 25, 16, 35, 18, 29, 43, 50, 49, 35];

let maximum = -1;

for (let num of arr) {
  maximum = Math.max(maximum, num);
}

console.log("Maximum =", maximum);
