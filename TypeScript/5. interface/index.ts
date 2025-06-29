interface Person {
  name: string;
  age: number;
  address?: string; // optional field (?) (default undefined)
  greet(): void;
}

let person: Person = {
  name: "Hariom",
  age: 22,
  greet() {
    console.log("Hi!");
  },
};

person.greet();

// interface with function type
interface MathOperation {
  (a: number, b: number): number;
}

const addNum: MathOperation = (x, y) => x + y;
const subNum: MathOperation = (x, y) => x - y;

console.log(addNum(10, 20));
console.log(subNum(10, 20));
