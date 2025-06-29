class Circle {
  private _radius: number;

  constructor(radius: number) {
    this._radius = radius;
  }

  // NOTE: getter and setter are helps in encapsulation
  // setter
  set radius(radius: number) {
    this._radius = radius;
  }

  // getter
  get radius(): number {
    return this._radius;
  }
}

const circle = new Circle(10);

circle.radius = 15; // calling setter as a property
console.log(circle.radius); // calling getter as a property
