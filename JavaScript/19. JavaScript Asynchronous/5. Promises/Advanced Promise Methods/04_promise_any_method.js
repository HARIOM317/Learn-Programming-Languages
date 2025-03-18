const promise1 = new Promise((resolve, reject) =>
  setTimeout(reject, 1000, "Failed promise 1")
);

const promise2 = new Promise((resolve, reject) =>
  setTimeout(resolve, 2000, "Success promise 2")
);

const promise3 = new Promise((resolve, reject) =>
  setTimeout(reject, 1500, "Failed promise 3")
);

const promise4 = new Promise((resolve, reject) =>
  setTimeout(resolve, 2500, "Success promise 4")
);

// Returns first full filled promise otherwise return Aggregate Error
Promise.any([promise1, promise2, promise3, promise4])
  .then((value) => console.log(value))
  .catch((error) => console.log(error));
