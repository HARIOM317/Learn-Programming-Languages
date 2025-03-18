// List of colors
const colors = [
  "red",
  "green",
  "blue",
  "pink",
  "orange",
  "brown",
  "black",
  "yellow",
  "white",
];

// For each loop : iterating over an array
colors.forEach((color, index) => {
  console.log(index + 1 + ". " + color);
});

// list of objects
let students = [
  {
    name: "Hariom",
    marks: 90,
  },
  {
    name: "Aman",
    marks: 85,
  },
  {
    name: "Ankit",
    marks: 92,
  },
];

// For each loop : iterating over an array of object
students.forEach((student) => console.log(student.marks));
