// _____ function definition _____

// function with single argument name
function greetName(name) {
  console.log("Hello " + name + ", Good Morning!");
}

// function with multiple arguments
function printStudentData(name, age, city) {
  console.log("\n===== Student data =====");
  console.log("Name :", name);
  console.log("Age :", age);
  console.log("City :", city);
}

// _____ function calling _____

greetName("Hariom"); // "Hariom" is a parameter
greetName("Ajay"); // "Ajay" is a parameter

printStudentData("Hariom", 22, "Bhopal");
printStudentData("Abhishek", 23, "Indore");
printStudentData("Aman"); // other arguments are undefined
