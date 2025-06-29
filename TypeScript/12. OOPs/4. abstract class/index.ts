// abstract class
abstract class Shape {
  abstract getArea(): number; // abstract method

  printArea(): void {
    console.log(`The area is ${this.getArea()}`);
  }
}

class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super();
  }

  getArea(): number {
    return this.width * this.height;
  }
}

const rect = new Rectangle(10, 15);
rect.printArea();
