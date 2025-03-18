async function fetchCatFact() {
  try {
    let response = await fetch("https://catfact.ninja/fact"); // return facts about cat
    let fact = await response.json();
    console.log(fact);
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}

fetchCatFact();
