async function fetchDataNew(): Promise<string> {
  return "Data fetched!";
}

async function getDataNew(): Promise<void> {
  try {
    const data = await fetchDataNew();
    console.log("Data :", data);
  } catch (error) {
    console.log("Error :", error);
  }
}

getDataNew();
