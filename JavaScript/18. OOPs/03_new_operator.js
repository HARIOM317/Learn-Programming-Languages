// Constructor - doesn't return anything & start with capital latter
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// defining a function for Person (prototype property)
Person.prototype.talk = function () {
  console.log(`Hi, my name is ${this.name}`);
};

// objects or instances
let p1 = new Person("adam", 25);
let p2 = new Person("jon", 21);

p1.talk();
p2.talk();
console.log(p1.talk === p2.talk); // true
