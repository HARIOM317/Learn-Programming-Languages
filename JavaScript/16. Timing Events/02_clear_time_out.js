const timeoutId = setTimeout(() => {
  console.log("This message will never appear!");
}, 3000);

console.log("Timeout scheduled, but it will be cleared immediately.");
clearTimeout(timeoutId);
