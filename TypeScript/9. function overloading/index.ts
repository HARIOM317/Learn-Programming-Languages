function getDataLength(value: string): number;
function getDataLength(value: any[]): number;
function getDataLength(value: any): number {
  return value.length;
}

console.log("Length :", getDataLength("Hariom"));
console.log("Length :", getDataLength(["abc", "pqr", "xyz"]));
console.log("Length :", getDataLength([10, 20, 30, 40, 50]));
