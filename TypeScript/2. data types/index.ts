// Numbers
let num1: number = 100000;
let num2: number = 125.25;
let bigNum: bigint = 100000000000000000n;

// String and Bool
let userName: string = "Hariom Singh";
let isPlaced: boolean = false;

// undefined and null
let value1: undefined = undefined;
let value2: null = null;

// any
let data: any = "Welcome!";
data = 1001;
data = true;

// Object
let obj1: object = {
  name: "HSR",
  age: 22,
};

let obj2: { name: string; gender: string; isMarried: boolean; age: number } = {
  name: "Hariom",
  gender: "Male",
  isMarried: false,
  age: 22,
};

obj1 = { ...obj1, phone: 9087658890 };

// void
function greet(message: string): void {
  console.log(message);
}

// unknown
let notSure: unknown = "a";

if (typeof notSure === "number") {
  notSure.toFixed(2);
} else if (typeof notSure === "string") {
  notSure.length;
}

// never
function infLoopFunc(): never {
  while (true) {
    // do something endlessly
    console.log("Running...");
  }
}

function throwError(message: string): never {
  throw new Error(message);
}

// Output
console.log("Num 1 = ", num1);
console.log("Num 2 = ", num2);
console.log("Big Num = ", bigNum);
console.log("User Name = ", userName);
console.log("Is Placed = ", isPlaced);
console.log("Value 1 = ", value1);
console.log("Value 2 = ", value2);
console.log("Data = ", data);
console.log("Object 1 = ", obj1);
console.log("Object 2 = ", obj2);

greet("Hello Friends!");
// throwError("Something went wrong");
// infLoopFunc();
