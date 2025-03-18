/*
    1. ^ and $ ensure the full string matches.
    2. [a-zA-Z0-9.]+ matches the username.
    3. @ is a required symbol.
    4. [a-zA-Z.]+ matches the domain name.
    5. \.[a-zA-Z]{2,} ensures a valid domain extension (like .com).
*/

let regex = /^[a-zA-Z0-9.]+@[a-zA-Z.]+\.[a-zA-Z]{2,}$/;

console.log(regex.test("user123@example.com")); // true
console.log(regex.test("user.name@example.in")); // true
console.log(regex.test("user.name@example")); // false
console.log(regex.test("user.name@example.")); // false
console.log(regex.test("user_name@example.com")); // false
console.log(regex.test("user.name@example123.com")); // false
