class NewCar {
  public name: string;
  private model: string;
  protected year: number;

  constructor(name: string, model: string, year: number) {
    this.name = name;
    this.model = model;
    this.year = year;
  }

  getModel(): string {
    return this.model;
  }

  getName(): string {
    return this.name;
  }

  getYear(): number {
    return this.year;
  }
}

const my_car1 = new NewCar("Tesla", "Model 10", 2024);
console.log(my_car1.name);
console.log(my_car1.getModel());
console.log(my_car1.getYear());
