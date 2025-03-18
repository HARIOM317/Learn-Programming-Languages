/*
    1. https?:\/\/ makes http:// or https:// optional.
    2. (www\.)? makes www. optional.
    3. [\w-]+(\.[a-z]+)+ matches domain names.
*/

let regex = /^(https?:\/\/)?(www\.)?[\w-]+(\.[a-z]+)+$/i;

console.log(regex.test("https://www.example.com"));
console.log(regex.test("www.example.org"));
console.log(regex.test("www.google.com"));
console.log(regex.test("http://www.xyz.in"));
console.log(regex.test("https://www.xyz.ac.in"));
console.log(regex.test("ftp://example.com"));
