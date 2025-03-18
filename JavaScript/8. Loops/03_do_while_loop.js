let i = 11;

// always run at least 1 time even condition false (because check condition after first iteration)
do {
  console.log("Running do while loop...");
  i++;
} while (i < 10);

let k = 1;
do {
  console.log("Do-While Loop Iteration :", k++);
} while (k <= 5);
