const student = {
  name: "Hariom",
  age: 22,
  city: "Bhopal",
  marks: 98.85,
};

// update student city to Mumbai
student.city = "Mumbai";

// update age to 24
student["age"] = 24;

// add new property gender
student.gender = "Male";

// add new property phone
student["phone"] = "+91 55555 99999";

// add new property skills
student.skills = ["C++", "MERN", "Next.js", "Flutter", "Java"];

// delete marks property
delete student.marks;

console.log(student);
