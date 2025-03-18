// JSON.parse() - converts JSON strings to JavaScript objects

// JSON String
const myInfo = `{
   "Name": "Hariom", 
   "Age":22,
   "Department" : "Computer Science and Engineering",
   "Year": "4rd"
}`;

console.log(myInfo);
console.log(typeof myInfo); // string
// console.log(myInfo.Name); // Error : can't access in string

const obj = JSON.parse(myInfo); // converting json data into js object
console.log("\nName =", obj.Name); // Now can access
console.log("Department =", obj.Department); // Now can access
