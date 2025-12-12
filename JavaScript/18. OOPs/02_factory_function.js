// Factory function
function PersonMaker(name, age) {
  const person = {
    name: name,
    age: age,
    talk() {
      console.log(`Hi, my name is ${this.name}`);
    },
  };

  return person;
}

let p1 = PersonMaker("adam", 25); // copy
let p2 = PersonMaker("jon", 21); // copy
p1.talk();
p2.talk();
console.log(p1.talk === p2.talk);
