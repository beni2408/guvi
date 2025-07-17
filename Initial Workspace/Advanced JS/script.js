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

let queryElement = document.querySelector(".element1");
console.log(queryElement);

let allQueryElement = document.querySelectorAll(".element1");
console.log(allQueryElement);
