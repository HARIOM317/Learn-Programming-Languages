// throw referrence error
try {
  throw new ReferenceError("It is user defined Reference Error");
} catch (e) {
  console.log("Error Name :", e.name);
  console.log("Error Message :", e.message);
}

// throw custom user defined error
try {
  throw new Error("I am custom user defined error!");
} catch (e) {
  console.log("Error Name :", e.name);
  console.log("Error Message :", e.message);
}
