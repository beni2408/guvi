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
