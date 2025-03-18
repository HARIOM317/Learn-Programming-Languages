// Example dataset: list of fruits
const fruits = [
  "Apple",
  "Apricot",
  "Avocado",
  "Banana",
  "Blackberry",
  "Blueberry",
  "Cherry",
  "Coconut",
  "Fig",
  "Grape",
  "Kiwi",
  "Lemon",
  "Lime",
  "Mango",
  "Melon",
  "Orange",
  "Papaya",
  "Peach",
  "Pear",
  "Pineapple",
  "Plum",
  "Raspberry",
  "Strawberry",
  "Watermelon",
];

const input = document.getElementById("fruitInput");
const suggestionsDiv = document.getElementById("suggestions");

input.addEventListener("keyup", function (event) {
  const query = event.target.value.toLowerCase();
  suggestionsDiv.innerHTML = ""; // clear previous suggestions

  if (query == "") return;

  // filter the fruits
  const suggestions = fruits.filter((fruit) =>
    fruit.toLowerCase().startsWith(query)
  );

  // display the filtered fruits
  suggestions.forEach((suggestion) => {
    const suggestionItem = document.createElement("div");
    suggestionItem.textContent = suggestion;

    // When a suggestion is clicked, update the input field and clear suggestions.
    suggestionItem.addEventListener("click", function () {
      input.value = suggestion;
      suggestionsDiv.innerHTML = "";
    });

    suggestionsDiv.appendChild(suggestionItem);
  });
});
