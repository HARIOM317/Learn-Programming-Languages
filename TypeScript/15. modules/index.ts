import { addNumbers, subNumbers, PI } from "./utils";
import Calc from "./utils";

console.log(addNumbers(12, 3));
console.log(subNumbers(20, 10));
console.log(PI);

const calc = new Calc();
console.log(calc.add(5, 2));
console.log(calc.sub(5, 2));
console.log(calc.mul(5, 2));
console.log(calc.div(5, 2));
