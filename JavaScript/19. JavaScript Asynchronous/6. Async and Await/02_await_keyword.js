async function fetchData() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data received!"), 2000);
  });

  console.log("Fetching data...");
  let result = await promise;
  console.log(result); // Output after 2 seconds: Data received!
}

fetchData();
