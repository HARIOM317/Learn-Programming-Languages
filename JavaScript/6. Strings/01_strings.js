// using single quote
let fname = "Hariom";
console.log("First name :", fname);

// using double quote
let lname = "Mewada";
console.log("Last name :", lname);

// concat string
let fullName = fname + " " + lname;
console.log("Full name :", fullName);

// using constructor
let address = new String("bhopal, MP, India");
console.log("Address :", address);

// multiline string
let intro = `
                    My name is Hariom Mewada.
                    I am from India.
                    I am a software developer.
                    `;
console.log("Introduction :", intro);

// Access character of string
let str = "Welcome Developers!";
console.log("str[0] =", str[0]);
console.log("str[3] =", str[3]);

// Length of a string
console.log("Length of full name is :", fullName.length);
console.log("Length of address is :", address.length);
