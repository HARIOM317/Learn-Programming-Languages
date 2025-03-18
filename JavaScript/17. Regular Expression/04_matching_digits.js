let regex = /\d+/; // Matches one or more digits

let str1 = "Order 12345";
let str2 = "Order 101";
let str3 = "Order 112233";

console.log(str1.match(regex));
console.log(str2.match(regex));
console.log(str3.match(regex));
