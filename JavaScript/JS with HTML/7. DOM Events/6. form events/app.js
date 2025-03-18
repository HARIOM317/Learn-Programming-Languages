const form = document.querySelector("form");

let myName = document.getElementById("username");
let myPass = document.getElementById("password");
let para = document.querySelector("p");

// input event - track every character changes
myName.addEventListener("input", function () {
  console.log("Name :", myName.value);
  para.innerText = "Your name is : " + myName.value;
});

// change event - track state changes (i.e active/inactive input field)
myPass.addEventListener("change", function () {
  console.log("Password :", myPass.value);
});

// submit event - to submit form data
form.addEventListener("submit", function (event) {
  // Prevent the default form submission to avoid page reload.
  event.preventDefault();
  console.dir(form.elements);

  let username = this.elements[0];
  let password = this.elements[1];

  console.log("User Name :", username.value);
  console.log("User Password :", password.value);

  alert("Form submitted successfully!");
});
