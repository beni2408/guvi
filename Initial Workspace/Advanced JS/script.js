// console.log(window.document);
// manipulation through ID
let mainContainer = document.getElementById("main");
console.log(mainContainer);
mainContainer.innerText = "Hello Guvi";
mainContainer.style.backgroundColor = "Red";
console.log(mainContainer.style);
mainContainer.style.color = "white";

//DOM manipulation through class
let element1 = document.getElementsByClassName("element1");
element1[0].style.backgroundColor = "green";
element1[0].style.color = "white";
element1[1].style.color = "white";
element1[1].style.backgroundColor = "blue";
console.log(element1[0]);
// taggelement - only for tags like p, h1, div etc...
let tagedElement = document.getElementsByTagName("div");
console.log("taged elemeðnts", tagedElement);

let queryElement = document.querySelector(".element1");
console.log(queryElement);

let allQueryElement = document.querySelectorAll(".element1");
console.log(allQueryElement);

let container = document.getElementById("container");

// container.innerText = `Main Container`;
container.style.border = "1px solid black";
container.style.padding = "10px";
container.style.margin = "0 auto";
container.style.width = "500px";
container.style.height = "300px";
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.justifyContent = "center";
container.style.alignItems = "center";
container.style.gap = "2rem";
container.innerHTML = `  
<h1>Hello Jascar</h1>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
      corporis esse expedita maiores earum. Hic, aperiam non magnam libero nobis
      qui suscipit iste exercitationem temporibus mollitia ex accusantium
      eveniet quam.
    </p>
    <button class="element">Save</button>`;

const styleObj = {
  border: "1px solid black",
  padding: "10px",
};
// function sample
// function setupElement(element, styleObjects, features) {
//     let ele = document.getElementById(element);
//     if(styleObjects && ele){
//         for
//     }
// }

let newContainer = document.createElement("div");
newContainer.setAttribute("class", "newelement");
newContainer.innerText = "New Element";
console.log(newContainer);

let anchorelement = document.createElement("a");
anchorelement.setAttribute("href", "https://google.com");
anchorelement.setAttribute("target", "_blank");
anchorelement.innerText = "Google";
//append child - older one ES5
//returns that child and also only one element can be added
// document.body.appendCshild(newContainer);
// document.body.appendChild(anchorelement);
//append method
//nothing is retruned undefined will be returned. Multiple nodes can be used in a single append

let imageElement = document.createElement("img");
imageElement.setAttribute(
  "src",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png"
);

imageElement.style.width = "100px";
imageElement.style.height = "100px";

document.body.append(newContainer, anchorelement, imageElement);

const inputElement = document.querySelector("input");
inputElement.setAttribute("type", "password");
const toggleBTN = document.querySelector("#pass-check");

function toggleEvent() {
  const inputType = inputElement.getAttribute("type");
  if (inputType == "password") {
    inputElement.setAttribute("type", "text");
    toggleBTN.innerText = "Hide";
  } else {
    inputElement.setAttribute("type", "password");
    toggleBTN.innerText = "Show";
  }
}
toggleBTN.addEventListener("click", () => {
  toggleEvent();
});

function getAndInvoke(nameofFN, fn) {
  console.log(nameofFN);
  fn();
}
function someFn(name) {
  console.log("SomeFn is called", name);
}
getAndInvoke("tickFN", () => {
  someFn("jascar");
});

function sampleFunC(name, fn) {
  console.log(name);
  fn();
}

const func = () => {
  console.log(
    "Function called successfully using arrow function method using another variable to store the arrow function inside the argument"
  );
};
sampleFunC("method 1", func);

sampleFunC("method 2", function call() {
  console.log(
    "Calling the function using normal function method where the function called usually inside the argument"
  );
});

sampleFunC("method 3", () => {
  console.log(
    "Function called using emplty arrow function inside the argument"
  );
});

// window.addEventListener("mouseover", () => {
//   console.log("event got triggered");
// });
// window.addEventListener("mousedwon", () => {
//   console.log("event got triggered - mouse down");
// });
// window.addEventListener("mouseup", () => {
//   console.log("event got triggered - mouse up");
// });

const myForm = document.querySelector("form");
myForm.addEventListener("input", (e) => {
  e.preventDefault();
  console.log("input has been triggered", e.target.value);
});

//hey evenes (keypress, keydown, keyup)
document.addEventListener("keydown", (e) => {
  console.log("Key Event has been triggered", e.key);
});

// window events - (load,resize)
window.addEventListener("resize", (e) => {
  console.log(
    "Page resized",
    "Height : ",
    e.target.innerHeight,
    "width :",
    e.target.innerWidth
  );
});
