// Expected output : Pooja;Hariom;Abhishek;Aman;Ankit;Pradeep

function formatNames(namesString) {
  return (
    namesString
      //   split all name by ','
      .split(",")
      // process each names in the array
      .map((userName) => {
        // Remove extra spaces
        let formattedName = userName.trim();

        // Convert the entire name to lowercase, then capitalize the first character
        if (formatNames.length === 0) return "";
        return (
          formattedName.charAt(0).toUpperCase() +
          formattedName.slice(1).toLowerCase()
        );
      })
      .filter((userName) => userName !== "")
      .join(";")
  );
}

// Example string
let namesString = "  pooja, hariom , abhishek,   aman,    ankit,  pradeep";

let output = formatNames(namesString);

console.log(output);
