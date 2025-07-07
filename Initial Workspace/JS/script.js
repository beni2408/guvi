//if else conditions
//Day1
let time = 11;

let name = "Benish";

if (name == "jascar") {
  console.log(`Hello ${name}`);
} else console.log(`Couldn't identify ${name}`);

if (time < 12) {
  console.log(" Good Morning");
} else if (time < 18) {
  console.log("Good Afternoon");
} else {
  console.log("Good night");
}

// for loops
let temp = "";
for (let i = 0; i < 10; i = i + 1) {
  temp = temp += i;
  console.log(i);
}
console.log(temp);

//task
console.log("task");

for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log("Number", i, "Even");
  } else {
    console.log("Number", i, "Odd");
  }
}

// for loop string name
let arr = ["fruits", "vegetables", "groceries", "Chocolates", "Drinks"];

for (let j = 0; j < arr.length; j++) {
  console.log(arr[j]);
}

//do while and while loop

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

do {
  console.log("do", i);
  i++;
} while (i < 5);

let j = 10;
let result = j++;
console.log(j);
console.log(result);

let k = 10;
let result2 = ++k;
console.log(k);
console.log(result2);

// functions

console.log("Hi welcome");
welcome("jascar", "NNS");

function welcome(name, company) {
  console.log("Hi welcome", name, "from", company);
}

function calculator(num1, num2) {
  console.log("addition", num1 + num2);
}

calculator(5, 10);
