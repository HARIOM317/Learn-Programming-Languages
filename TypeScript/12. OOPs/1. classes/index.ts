// class
class Person {
  // properties
  name: string;
  age: number;

  // constructor
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // method
  greet(): string {
    return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
  }
}

// object
const new_person = new Person("Hariom", 22);
console.log(new_person.greet());
