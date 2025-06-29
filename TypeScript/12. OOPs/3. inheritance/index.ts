// parent class
class Animal {
  protected color: string;
  constructor(public name: string, color: string) {
    this.name = name;
    this.color = color;
  }

  makeSound(): void {
    console.log("Some generic sound...");
  }
}

// child class
class Dog extends Animal {
  constructor(name: string, color: string) {
    super(name, color); // parent class constructor
  }

  makeSound(): void {
    console.log("Woof! Woof!");
  }

  getDetails(): string {
    return `The dog name is ${this.name} and color is ${this.color}`;
  }
}

const dog = new Dog("Puppy", "Red");
dog.makeSound();
console.log(dog.getDetails());
