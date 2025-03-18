const classInfo = [
  {
    name: "Aman",
    grade: "A+",
    city: "Delhi",
    rollNo: 25,
  },
  {
    name: "Hariom",
    grade: "A+",
    city: "Bhopal",
    rollNo: 28,
  },
  {
    name: "Pooja",
    grade: "A",
    city: "Indore",
    rollNo: 29,
  },
  {
    name: "Ashoka",
    grade: "B+",
    city: "Sehore",
    rollNo: 35,
  },
  {
    name: "Ravi",
    grade: "B",
    city: "Ashta",
    rollNo: 30,
  },
];

console.log(classInfo);

// access classInfo by index
console.log(classInfo[0]);
console.log(classInfo[1]);

// get name of third object of array
console.log(classInfo[2].name);

// _____ Add, Update, delete Operation _____

// add new property gender in first object of array
classInfo[0].gender = "Male";

// update city of last object to "Bhopal"
classInfo[classInfo.length - 1].city = "Bhopal";

// delete city of forth object of classInfo
delete classInfo[3].city;

console.log(classInfo);
