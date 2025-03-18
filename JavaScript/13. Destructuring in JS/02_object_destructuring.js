// 1. Basic Object Destructuring
const person = {
  name: "John",
  age: 25,
};

const { name, age } = person;

console.log("Name =", name);
console.log("Age =", age);

// 2. Rename variables while destructuring
const student = {
  studentName: "Tony Stark",
  years: 28,
  marks: 90,
};

const {
  studentName: fullName,
  years: studentAge,
  marks: studentMarks,
} = student;

console.log("\nStudent Full Name :", fullName);
console.log("Student Age :", studentAge);
console.log("Student Marks :", studentMarks);

// 3. Default Value
const car = {
  brand: "BMW",
};

const { brand, price = 5000000 } = car;
console.log("\nCar Brand = ", brand);
console.log("Car Brand = ", price);
