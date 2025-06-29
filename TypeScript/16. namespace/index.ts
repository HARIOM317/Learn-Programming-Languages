import Calc from "../15. modules/utils";

namespace Geometry {
  export const PI = 3.14;

  export class Calc {
    rectArea(width: number, height: number): number {
      return width * height;
    }
  }

  export function circleArea(radius: number): number {
    return PI * radius * radius;
  }
}

console.log("PI =", Geometry.PI);
console.log("Area of circle =", Geometry.circleArea(10));
const calc = new Geometry.Calc();
console.log("Area of rectangle =", calc.rectArea(10, 20));
