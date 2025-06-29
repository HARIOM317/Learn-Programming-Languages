// Method decorator
function LogMethod(
  target: Object,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Method called: ${propertyKey}`);
    return originalMethod.apply(this, args);
  };
}

class Calc {
  @LogMethod
  add(a: number, b: number): number {
    return a + b;
  }
}

const calc = new Calc();
console.log(calc.add(5, 4));
