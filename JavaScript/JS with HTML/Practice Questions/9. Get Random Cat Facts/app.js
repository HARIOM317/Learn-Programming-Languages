let url = "https://catfact.ninja/fact";

async function getFact() {
  try {
    let response = await axios.get(url);
    return response.data.fact;
  } catch (error) {
    return "No fact found!";
  }
}

// select elements
let btn = document.querySelector("button");
let p = document.querySelector("p");

btn.addEventListener("click", async () => {
  let fact = await getFact();
  p.innerText = fact;
});
