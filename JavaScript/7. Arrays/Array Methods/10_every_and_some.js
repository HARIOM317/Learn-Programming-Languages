let numbersArray = [5, -12, 8, -44, -65, 101, 90];

// 1. every() - Tests whether all elements pass the provided function (equivalent to logical && operator)
let allPositive = numbersArray.every((num) => num > 0);
console.log(allPositive);

// 2. some() - Tests whether at least one element passes the provided function (equivalent to logical || operator)
let someGreaterThan100 = numbersArray.some((num) => num > 100);
console.log(someGreaterThan100);
