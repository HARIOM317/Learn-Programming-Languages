export function addNumbers(a: number, b: number): number {
  return a + b;
}

export function subNumbers(a: number, b: number): number {
  return a - b;
}

export const PI = 3.14;

export default class Calc {
  add(a: number, b: number): number {
    return a + b;
  }
  sub(a: number, b: number): number {
    return a - b;
  }
  mul(a: number, b: number): number {
    return a * b;
  }
  div(a: number, b: number): number {
    return a / b;
  }
}
