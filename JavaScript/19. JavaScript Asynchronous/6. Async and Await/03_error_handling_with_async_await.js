function fetchData(data) {
  // Return a promise
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    console.log("Fetching data...");

    setTimeout(() => {
      if (internetSpeed >= 5) {
        console.log("Success : Data fetched successfully!");
        resolve("Data Fetched!");
      } else {
        reject("Failed : Weak Internet Connection!");
      }
    }, 1500);
  });
}

async function getData() {
  try {
    await fetchData();
    await fetchData();
    await fetchData();
    await fetchData();
    await fetchData();
  } catch (err) {
    console.log(err);
  }

  // Other work (Now does not affect these tasks)
  console.log("\nOther task 1 executed!");
  console.log("Other task 2 executed!");
  console.log("Other task 3 executed!");
}

getData();
