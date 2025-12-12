const arr1 = [1, 2, 3];
const arr2 = [3, 2, 3];

arr1.sayHello = () => {
  console.log(`Hello!, I am arr`);
};

arr2.sayHello = () => {
  console.log(`Hello!, I am arr`);
};

/*
 NOTE: at, concat, find, push, pop and all array functions and properties are the part of array prototype

 Prototype(functions, properties)
*/

console.log(arr1.find === arr2.find); // referencing same memory
console.log(arr1.push === arr2.push); // referencing same memory
console.log(arr1.sayHello === arr2.sayHello); // referencing different memory
