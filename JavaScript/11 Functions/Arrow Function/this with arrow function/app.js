const student = {
  // Object properties
  name: "Aman",
  marks: 95,
  age: 25,
  prop: this, // global scope (this -> window object)

  // Normal function (Good use of normal function inside object)
  getName: function () {
    console.log("\nthis with normal function:", this); // object's scope (this -> student object)
    return this.name;
  },

  // Arrow function (Bed use of arrow function inside object)
  getMarks: () => {
    console.log("\nthis with arrow function:", this); // parent's scope (this -> window object)

    // can access window object properties and methods
    this.alert("This is arrow function inside student object.");

    return this.marks; // window object has no property marks
  },

  // getInfo1 with arrow setTimeOut function
  getInfo1: function () {
    // Arrow function (Good use of arrow function inside object)
    setTimeout(() => {
      console.log(this); // student object
    }, 2000);
  },

  // getInfo2 with normal setTimeOut function
  getInfo2: function () {
    // Normal function (Bed use of normal function inside object)
    setTimeout(function () {
      console.log(this); // window object
    }, 2000);
  },
};

console.log(student);
console.log("Student name :", student.getName());
console.log("Student marks :", student.getMarks());

console.log(student.getInfo1());
console.log(student.getInfo2());
