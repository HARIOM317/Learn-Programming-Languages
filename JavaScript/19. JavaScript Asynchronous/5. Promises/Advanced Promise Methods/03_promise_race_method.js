const promise1 = new Promise((resolve, reject) =>
  setTimeout(resolve, 500, "First resolved")
);

const promise2 = new Promise((resolve, reject) =>
  setTimeout(resolve, 200, "Second resolved")
);

const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 300, "Second resolved")
);

// It resolves or rejects as soon as the first promise settles
Promise.race([promise1, promise2, promise3])
  .then((result) => console.log("Promise race resolved with:", result))
  .catch((error) => console.log("Promise race rejected with:", error));
