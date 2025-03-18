// 1. Sequential Execution (Bad and Slow)

console.log("\nSequentially fetching user data :");

async function fetchUsersSequentially() {
  let user1 = await fetch("https://jsonplaceholder.typicode.com/users/1").then(
    (res) => res.json()
  );

  let user2 = await fetch("https://jsonplaceholder.typicode.com/users/2").then(
    (res) => res.json()
  );

  let user3 = await fetch("https://jsonplaceholder.typicode.com/users/3").then(
    (res) => res.json()
  );

  console.log("\nUser 1 (Sequential):", user1);
  console.log("\nUser 2 (Sequential):", user2);
  console.log("\nUser 3 (Sequential):", user3);
}

fetchUsersSequentially();

// _______________________________________________________

// 2. Parallel Execution (Good and Fast)

console.log("\nParallel fetching user data :");

async function fetchUsersParallel() {
  let user1Promise = await fetch(
    "https://jsonplaceholder.typicode.com/users/1"
  ).then((res) => res.json());

  let user2Promise = await fetch(
    "https://jsonplaceholder.typicode.com/users/2"
  ).then((res) => res.json());

  let user3Promise = await fetch(
    "https://jsonplaceholder.typicode.com/users/3"
  ).then((res) => res.json());

  // Parallel fetching data
  let [user1, user2, user3] = await Promise.all([
    user1Promise,
    user2Promise,
    user3Promise,
  ]);

  console.log("\nUser 1 (Parallel):", user1);
  console.log("\nUser 2 (Parallel):", user2);
  console.log("\nUser 3 (Parallel):", user3);
}

fetchUsersParallel(); // Mostly execute first before sequential execution
