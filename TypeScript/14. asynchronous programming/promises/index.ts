const getData = (value: boolean): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (value) {
      setTimeout(() => {
        resolve("Data fetched successfully!");
      }, 2000);
    } else {
      reject("Error found!");
    }
  });
};

// for success
getData(true)
  .then((data: string) => {
    console.log("Success :", data);
  })
  .catch((error: any) => {
    console.log("Failure :", error);
  });

// for failure
getData(false)
  .then((data: string) => {
    console.log("success :", data);
  })
  .catch((error: any) => {
    console.log("Failure :", error);
  });
