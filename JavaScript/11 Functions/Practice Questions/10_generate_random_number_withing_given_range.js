const generateRandomNumber = function (start, end) {
  let n = end - start + 1;
  return Math.floor(Math.random() * n) + start;
};

const randomNumber = generateRandomNumber(1, 10);
console.log("Random Number :", randomNumber);
