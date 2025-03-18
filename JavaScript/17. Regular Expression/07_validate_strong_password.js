/*
    1. (?=.*[a-z]) ensures at least one lowercase letter.
    2. (?=.*[A-Z]) ensures at least one uppercase letter.
    3. (?=.*\d) ensures at least one digit.
    4. (?=.*[@$!%*?&]) ensures at least one special character.
    5. [A-Za-z\d@$!%*?&]{8,} ensures at least 8 characters.
*/

let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[#@$!%*?&])[A-Za-z\d#@$!%*?&]{8,}$/;

console.log(regex.test("Hariom123"));
console.log(regex.test("#HSR@123"));
console.log(regex.test("#Hariom@123"));
console.log(regex.test("HaRiOm123!"));
