// break statement
console.log("using break in loop");
for (let i = 1; i <= 10; i++) {
  if (i == 8) break; // break on i = 8
  console.log("i =", i);
}

// continue statement
console.log("\nusing continue in loop");
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 1) continue; // skip odd numbers
  console.log("i =", i);
}
