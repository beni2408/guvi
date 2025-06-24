//1
// Write a code to get the input in the given format and print the output in the given format

// Input Description:
// To take an integer value

// Output Description:
// Print the integer value

// Sample Input :
// 2
// Sample Output :
// 2

// Getting input via STDIN
// const readline = require("readline");

// const inp = readline.createInterface({
//   input: process.stdin
// });

// const userInput = [];

// inp.on("line", (data) => {
//   userInput.push(data);
// });

// inp.on("close", () => {
//   //start-here
//   //Your code goes here … replace the below line with your code logic

//   const input = parseInt(userInput[0]);
//   console.log(input);

//   //end-here
// });

//2
// Getting input via STDIN
// Write a code to get the input in the given format and print the output in the given format

// Input Description:
// A single line contains integers separated by space

// Output Description:
// Print the integer list of integers separated by space

// Sample Input :
// 2 3 4 5 6 7 8
// Sample Output :
// 2 3 4 5 6 7 8
// const readline = require("readline");

// const inp = readline.createInterface({
//   input: process.stdin
// });

// const userInput = [];

// inp.on("line", (data) => {
//   userInput.push(data);
// });

// inp.on("close", () => {
//   //start-here
//   //Your code goes here … replace the below line with your code logic
//     const input = userInput[0];
//   console.log(input);

//   //end-here
// });

//3
// Write a code to get the input in the given format and print the output in the given format.

// Input Description:
// First-line indicates two integers which are the size of array and 'K' value. Second-line indicates an integer contains elements of an array.

// Output Description:
// Print the taken input in the same format.

// Sample Input :
// 5 3
// 1 2 3 4 5
// Sample Output :
// 5 3
/*
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
  const a = userInput[0];
  const b = userInput[1];
  
  
  
  console.log(a);
  console.log(b);

  //end-here
});



//4 

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
  const a = userInput[0];
  const b = userInput[1];
  const c = userInput[2];
  console.log(a);
  console.log(b);
  console.log(c);

  //end-here
});


//5

Write a code to get the input in the given format and print the output in the given format


Input Description:
Three integers are given in line by line.

Output Description:
Print the integers in a single line separate by space.

Sample Input :
2
4
5
Sample Output :
2 4 5


// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
  
  
  const a = userInput[0];
  const b = userInput[1];
  const c = userInput[2];
  
  console.log(a,b,c);
  
  //end-here
});



//6
Write a code to get the input in the given format and print the output in the given format


Input Description:
First-line indicates two integers separated by space. Second-line indicates three integers separated by space. Third-line indicates three integers separated by space

Output Description:
Print the input in the same format.

Sample Input :
2 5
2 5 6
2 4 5
Sample Output :
2 5
2 5 6
2 4 5


// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

    const a = userInput[0];
  const b = userInput[1];
  const c = userInput[2];
  console.log(a);
  console.log(b);
  console.log(c);

  //end-here
});

//7
Write a code to get the input in the given format and print the output in the given format


Input Description:
A single line contains a string.

Output Description:
Print the characters in a string separated by space.

Sample Input :
guvi
Sample Output :
g u v i

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

  const input = userInput[0].split("").join(" ");
  console.log(input);

  //end-here
});

//Write a code to get the input in the given format and print the output in the given format.


Input Description:
A single line contains three float values separated by space.

Output Description:
Print the float value separated by line.

Sample Input :
2.3 4.5 7.8
Sample Output :
2.3
4.5
7.8

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
 const input = userInput[0].split(" ");
 
 

  
  console.log(input[0]);
  console.log(input[1]);
  console.log(input[2]);
  //end-here
});

//9
Write a code to get the input in the given format and print the output in the given format.


Input Description:
A single line contains a string.

Output Description:
Print the characters in a string separated by line.

Sample Input :
guvigeek
Sample Output :
g
u
v
i
g
e
e
k

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

  const inputs = userInput[0].split("");
 
  
  function guvigeek(input){
      for (let i =0 ; i<input.length; i++){
          console.log(input[i]);
      }
  }
  
  guvigeek(inputs);
 

  //end-here
});


//10
Write a code to get the input in the given format and print the output in the given format.


Input Description:
A single line contains a string.

Output Description:
Print the characters in a string separated by comma.

Sample Input :
guvi
Sample Output :
g,u,v,i

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
  
  let result = userInput[0].split("").join(",");
  console.log(result);
  
  
  

  
  //end-here
});

*/
