// For...in loop: iterating over object properties
const person = {
  name: "Alice",
  age: 25,
  gender: "Males",
  city: "New York",
  country: "USA",
};

// for-in loop
for (let key in person) {
  console.log(key + " : " + person[key]);
}

// For...in loop: iterating over array
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

// for-in loop
for (let index in colors) {
  console.log(index + " : " + colors[index]);
}
