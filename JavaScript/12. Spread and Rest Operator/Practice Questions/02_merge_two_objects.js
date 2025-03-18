const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

const obj1 = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

const obj2 = {
  w: 10,
  x: 20,
  y: 30,
  z: 40,
};

const merged = mergeObjects(obj1, obj2);
console.log(merged);
