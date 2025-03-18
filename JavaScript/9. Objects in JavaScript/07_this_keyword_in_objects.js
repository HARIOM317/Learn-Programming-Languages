// Note : We can not directely access object properties inside object methods, to access that we need this keyword (this.propertyName)

const student = {
  // object properties
  name: "Hariom",
  age: 22,
  rollNo: 101,
  hindi: 95,
  english: 90,
  math: 99,
  science: 95,
  it: 92,

  // object methods
  getAvg() {
    let avg =
      (this.hindi + this.english + this.math + this.science + this.it) / 5;
    return avg;
  },

  getName() {
    return this.name;
  },

  printInfo() {
    console.log("\n===== Sudent Information =====\n");

    console.log("Student Name :", this.name);
    console.log("Student Age :", this.age);
    console.log("Student Roll Number :", this.rollNo);
    console.log("Student Percentage :", this.getAvg());

    console.log();
  },

  getStudentObject() {
    console.log(this);
  },
};

let studentName = student.getName();
console.log("Student Name :", studentName);

let percentage = student.getAvg();
console.log("Total percentage :", percentage);

student.printInfo();

student.getStudentObject();
