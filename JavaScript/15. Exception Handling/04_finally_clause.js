// finally - code of finally block will always execute even error occur or not

try {
  let sum = a + b;
  console.log(sum); // reference error
} catch (e) {
  console.log("Error Name :", e.name);
  console.log("Error Message :", e.message);
} finally {
  console.log("\nHey, I will always execute!");
  console.log("☺️ \t ☺️ \t ☺️ \t ☺️");
}
