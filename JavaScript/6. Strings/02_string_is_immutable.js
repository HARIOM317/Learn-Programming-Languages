let str = "Monkey";
console.log("Before update :", str);

str[0] = "D"; // can not update, because strings are immutable in js
console.log("After update :", str);
