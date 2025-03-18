let s1 = new Set(); // create an empty set

// 1. add()
s1.add(10);
s1.add(20).add(30).add(40).add(50);
console.log("Set s1 :", s1);

// 2. delete()
s1.delete(20);
s1.delete(50);
console.log("Set s1 :", s1);

// 3. has()
console.log("Is 20 present :", s1.has(20));
console.log("Is 30 present :", s1.has(30));

// 4. keys()
console.log(s1.keys());

// 5. values()
console.log(s1.values());

// 6. clear();
s1.clear();
console.log(s1);
