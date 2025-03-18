let arr = [9, 6, 1, 3, 4, 7, 11, 8, 25, 2, 10];

let ans = arr.reduce((max, currNum) => {
  if (max > currNum) return max;
  else return currNum;
});
console.log("Maximum =", ans);
