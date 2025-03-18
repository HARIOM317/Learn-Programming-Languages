// clear - to clear the console
console.clear();

// log
console.log("console.log() is used to print something on console!\n");

// error
console.error(
  "console.error() is used to show something in the form of error!\n"
);

// warn
console.warn(
  "console.warn() is used to show something in the form of warning!\n"
);

// info
console.info(
  "console.info() is used to show something in the form of information!\n"
);

// dir
console.dir(
  "console.dir() is used to display an interactive, hierarchical list of the properties of a specified object"
);

// table - to show object in table form
obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
console.table(obj);

// time - to show a process execution time
console.time("forLoop");

for (let i = 0; i <= 1000000; i++) {
  if (i == 1000000) {
    console.log(">>> For loop ends");
  }
}

console.timeEnd("forLoop"); // it prints the total time taken to execute the for loop
