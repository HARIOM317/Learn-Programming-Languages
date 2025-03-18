try {
  console.log(username);
} catch (error) {
  // catch error in object
  console.log("Error Name :", error.name);
  console.log("Error Message :", error.message);
}
