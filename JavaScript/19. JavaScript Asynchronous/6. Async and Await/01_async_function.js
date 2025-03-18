async function greet() {
  return "Hello, World";
}

greet().then(console.log);
greet().then((result) => console.log(result));
