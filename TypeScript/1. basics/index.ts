// Note: use "tsc" to compile index.ts with configuration

let a1: number = 45;
// a1 = "Hariom";  // Error (can not change type)

let myname: string = "Hariom Mewada";
myname = "Hariom Singh Rajput";

console.log(a1);
console.log(myname);

function add(a: number, b: number): number {
  return a + b;
}

let sum = add(10, 20);
console.log(sum);
