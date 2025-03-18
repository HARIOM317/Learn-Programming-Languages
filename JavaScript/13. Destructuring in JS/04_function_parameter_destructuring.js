// Function Parameter Destructuring
function displayUser({ name, age }) {
  console.log(`Name : ${name}, Age : ${age}`);
}

const user = { name: "Hariom", age: 22 };

displayUser(user);
