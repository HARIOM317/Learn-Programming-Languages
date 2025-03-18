// 1. _____ Using appendChild() _____

// create and insert new div in body
let newDiv = document.createElement("div"); // creating new div
let body = document.querySelector("body"); // selecting body
body.appendChild(newDiv); // appending child at the last in body

// set id="mySection" for new div
newDiv.setAttribute("id", "mySection");

// set style for new div
newDiv.style.backgroundColor = "gold";
newDiv.style.height = "100px";
newDiv.style.padding = "1.5rem";

// create and insert new heading h2 in new div
let newHeading = document.createElement("h2"); // creating h2
newHeading.innerText = "New Heading"; // set content or h2
newDiv.appendChild(newHeading); // append h2 in new div

// _____________________________________________

// 2. _____ Using append() _____

// insert a new paragraph p in new div
let newPara = document.createElement("p"); // creating p
newPara.innerText = "This is new paragraph created by DOM Manipulation"; // set content for p
newDiv.append(newPara); // append p in new div in last

// insert 2 new list items at the end in list
let list = document.getElementById("myList"); // select list

let newListItem1 = document.createElement("li"); // create new li
newListItem1.innerText = "New Item 4"; // set list item text
list.append(newListItem1); // append at the end in list

let newListItem2 = document.createElement("li"); // create new li
newListItem2.innerText = "New Item 5"; // set li text
list.append(newListItem2); // append at the end in list

// _____________________________________________

// 3. _____ Using prepend() _____

// create and insert new list item at the start of list
let newListItem3 = document.createElement("li"); // create li
newListItem3.innerText = "New Item 0"; // set li text
list.prepend(newListItem3); // append at the start in list

// _____________________________________________

// 4. _____ Using insertAdjacentElement() _____

// append new heading h1 just before new div
let heading = document.createElement("h1");
heading.innerText = "Heading for new div";
newDiv.insertAdjacentElement("beforebegin", heading);

// add new paragraph before begin of list
let paragraph1 = document.createElement("p");
paragraph1.innerText = "This is new paragraph before begin of list";
list.insertAdjacentElement("beforebegin", paragraph1);

// add new paragraph after begin of list
let paragraph2 = document.createElement("p");
paragraph2.innerText = "This is new paragraph after begin of list";
list.insertAdjacentElement("afterbegin", paragraph2);

// add new paragraph before end of list
let paragraph3 = document.createElement("p");
paragraph3.innerText = "This is new paragraph before end of list";
list.insertAdjacentElement("beforeend", paragraph3);

// add new paragraph after end of list
let paragraph4 = document.createElement("p");
paragraph4.innerText = "This is new paragraph after end of list";
list.insertAdjacentElement("afterend", paragraph4);
