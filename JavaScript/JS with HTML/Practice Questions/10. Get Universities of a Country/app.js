let url = "http://universities.hipolabs.com/search?name=";
let form = document.querySelector("form");
let input = document.getElementById("search");

// function to get all universities
async function getUniversities(query) {
  try {
    let result = await axios.get(url + query);
    return result.data;
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}

// function to create a table to show data
function createTable(data) {
  const table = document.createElement("table");

  // ======= Create table header =======
  const header = table.createTHead();
  const headerRow = header.insertRow();
  const headers = ["University Name", "Country", "Domains", "Web Pages"];
  headers.forEach((text) => {
    const th = document.createElement("th");
    th.textContent = text;
    headerRow.appendChild(th);
  });

  // ======= Create table body =======
  const tbody = document.createElement("tbody");
  data.forEach((item) => {
    const row = tbody.insertRow();

    // University Name
    const nameCell = row.insertCell();
    nameCell.textContent = item.name;

    // Country
    const countryCell = row.insertCell();
    countryCell.textContent = item.country;

    // Domains (joined if multiple)
    const domainsCell = row.insertCell();
    domainsCell.textContent = Array.isArray(item.domains)
      ? item.domains.join(", ")
      : item.domains;

    // Web pages (create clickable links)
    const webPagesCell = row.insertCell();
    if (Array.isArray(item.web_pages)) {
      webPagesCell.innerHTML = item.web_pages
        .map((page) => `<a href="${page}" target="_blank">${page}</a>`)
        .join(", ");
    } else {
      webPagesCell.innerHTML = `<a href="${item.web_pages}" target="_blank">${item.web_pages}</a>`;
    }
  });

  table.appendChild(tbody);
  return table;
}

// Event listener to search universities by country name
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  let query = input.value.trim();
  const container = document.getElementById("table-container");
  container.innerHTML = ""; // Clear any previous results

  if (query) {
    let data = await getUniversities(query);
    console.log(data);

    if (data && data.length) {
      const table = createTable(data);
      container.appendChild(table);
    } else {
      container.textContent = "No result found!";
    }
  } else {
    alert("Enter a valid county name");
  }
});
