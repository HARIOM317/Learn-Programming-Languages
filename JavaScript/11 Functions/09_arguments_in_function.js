// Note- Use Rest operator (...) instead of arguments

function getData() {
  // arguments is a collection of elements
  console.log("Data :", arguments);
  console.log("Length :", arguments.length);
}

// We can only access the elements not update or delete elements
getData(1, 2, 3, "a", "b", "Hello"); // valid
