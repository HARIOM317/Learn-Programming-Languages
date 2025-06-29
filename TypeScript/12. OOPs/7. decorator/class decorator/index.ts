function Logger(constructor: Function) {
  console.log(`Logging creation of class : ${constructor.name}`);
}

// @decorator
@Logger
class People {
  constructor(public name: string) {}
}

const p = new People("Riya");
console.log(p);
