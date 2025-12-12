// class
class Person {
  // constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  talk() {
    console.log(`Hi, my name is ${this.name}`);
  }

  walk() {
    console.log("Let's walk!");
  }
}

let p1 = new Person("adam", 25);
let p2 = new Person("jon", 21);

p1.talk();
p2.walk();

console.log(p1.talk === p2.talk);
console.log(p1.walk === p2.walk);
