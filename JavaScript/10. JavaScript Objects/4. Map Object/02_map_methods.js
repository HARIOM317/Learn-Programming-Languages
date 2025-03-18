const myMap = new Map();

// 1. set(key, value);
myMap.set("name", "Hariom");
myMap.set("age", 22);
myMap.set("city", "Bhopal");
myMap.set("gender", "Mail");
console.log(myMap);

// 2. get(key)
console.log("Name :", myMap.get("name"));
console.log("City :", myMap.get("city"));

// 3. has(key)
console.log(myMap.has("name"));
console.log(myMap.has("address"));

// 4. delete(key)
myMap.delete("age");
myMap.delete("gender");
console.log(myMap);

// 5. clear();
myMap.clear();
console.log(myMap);
