const students = {
  aman: {
    grade: "A+",
    city: "Delhi",
    rollNo: 25,
  },
  hariom: {
    grade: "A+",
    city: "Bhopal",
    rollNo: 28,
  },
  pooja: {
    grade: "A",
    city: "Indore",
    rollNo: 29,
  },
  ashok: {
    grade: "B+",
    city: "Sehore",
    rollNo: 35,
  },
  ravi: {
    grade: "B",
    city: "Ashta",
    rollNo: 30,
  },
};

console.log(students);
console.log(students.hariom);
console.log(students.pooja.grade);

// update city of ravi to gwalior
students.ravi.city = "Gwalior";
console.log(students.ravi.city);
