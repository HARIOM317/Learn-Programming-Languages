// This is useful for performing cleanup actions. The return value of finally is passed through and does not affect the promise chain's result.

// Finally with resolve process
Promise.resolve("Operation successful")
  .then((result) => console.log(result))
  .finally(() => console.log("Cleanup action executed!"));

// Finally with reject process
Promise.reject("Operation Failed")
  .catch((error) => console.log(error))
  .finally(() => console.log("Cleanup action executed!"));
