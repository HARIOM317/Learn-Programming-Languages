function min(...args) {
  let minimum = args.reduce((min, num) => {
    if (min < num) return min;
    else return num;
  });
  return minimum;
}

console.log("Minimum =", min(4, 2, 1, 3, 5, 8, 9));
console.log("Minimum =", min(7, 8, 9, -1, 3, 4, 5, -5, 10));
