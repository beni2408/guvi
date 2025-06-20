console.log("functions");
function greetMe(name) {
  console.log("Hello", name);
}

greetMe("Jascar");

//calculator
function calculator(operation, num1, num2) {
  if (operation == "add") {
    console.log(num1 + num2);
  } else if (operation == "subtract") {
    console.log(num1 - num2);
  } else if (operation == "multiply") {
    console.log(num1 * num2);
  } else if (operation == "divide") {
    console.log(num1 / num2);
  } else {
    console.log("Invalid input");
  }
}

calculator("add", 5, 25);
calculator("subtract", 5, 25);
calculator("multiply", 5, 25);
calculator("divide", 25, 5);

function returnableFn(arg) {
  return arg;
}

const value = returnableFn("jascar");
console.log(value);

//arrow function, IIFE, anonumous

// arrow function

const arrFn = (num1, num2) => {
  console.log("data from arrow func", num1 + num2);
};
arrFn(20, 20);

//anonymous function

let anFn = function () {
  console.log("data from anononymous func");
};
anFn();

//IIFE -> Immedialtely invoked function

let details = [
  {
    name: "Jascar",
    subjects: ["Physics", "Maths", "chemistry"],
    marks: [80, 40, 20],
  },
  {
    name: "Shiny",
    subjects: ["Physics", "Maths", "chemistry"],
    marks: [80, 40, 20],
  },
];
//calculate total, highscore,
(function () {
  let totalMark = 0;
  for (let i = 0; i < details.length; i++) {
    let marksArr = details[i].marks;
    for (let j = 0; j < marksArr.length; j++) {
      totalMark = totalMark += marksArr[j];
    }
    console.log(totalMark);
    totalMark = 0;
  }
})();
