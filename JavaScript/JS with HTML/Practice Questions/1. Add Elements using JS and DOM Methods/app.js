// select container
const container = document.querySelector(".container");

// 1. add <p> in container with red text that says "Hey I'm red!"
let para = document.createElement("p");
para.innerText = "Hey, I'm red!";
container.append(para);
para.style.color = "red";

// 2. An <h3> in container with blue text that says "I'm blue h2!"
const heading = document.createElement("h3");
heading.innerText = "I'm blue h3!";
container.append(heading);
heading.style.color = "blue";

// 3. Add a <div> in container with a black border and pink background color
const box = document.createElement("div");
container.append(box);
box.style.border = "2px solid black";
box.style.backgroundColor = "pink";

// 3.1 Add an <h1> heading inside div that says "I'm in a div"
const innerHeading = document.createElement("h1");
innerHeading.innerText = "I'm in a div";
box.append(innerHeading);

// 3.2 Add a <p> element inside div that says "I'm inside div. Me too!" in uppercase where Me too should be bold
const innerPara = document.createElement("p");
innerPara.innerHTML = `I'm inside div. <b>Me too!</b>`;
box.append(innerPara);
innerPara.style.textTransform = "uppercase";

// 4. Remove .hero class and add new .classic class in container
container.classList.remove("hero");
container.classList.add("classic");
