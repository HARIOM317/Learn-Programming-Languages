let heroes = [
  ["saktiman", "krish", "flying jatt", "ra-one"],
  ["superman", "batman", "wonder woman"],
  ["spider man", "iron man", "thor", "hulk", "captain america"],
];

for (list of heroes) {
  console.log(list);
}

// Iterating 2D array
for (let i = 0; i < heroes.length; i++) {
  console.log(`\n_____ Iteration ${i + 1} _____\n`);

  for (let j = 0; j < heroes[i].length; j++) {
    console.log(heroes[i][j]);
  }
}
