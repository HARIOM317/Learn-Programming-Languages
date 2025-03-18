function printTable(n) {
  console.log(`\n===== Table of ${n} =====\n`);

  for (let i = 1; i <= 10; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
  }
}

printTable(12);
printTable(15);
printTable(25);
