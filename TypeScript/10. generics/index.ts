/* 
Generics - Generics area a way to create components (functions, classes or interfaces) that work with different types without losing type safety
 */

// T : any type
function genericIdentity<T>(arg: T) {
  return arg;
}

console.log(genericIdentity(10));
console.log(genericIdentity("Hariom"));

console.log(genericIdentity<number>(100));
console.log(genericIdentity<string>("Welcome"));

// Generics with interface
interface KeyPair<T, U> {
  key: T;
  value: U;
}

let keyPairValue: KeyPair<string, number> = {
  key: "xyz",
  value: 100,
};
