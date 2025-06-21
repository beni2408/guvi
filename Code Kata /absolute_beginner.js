// You are given Two Numbers, A and B. If C = A + B. Find C.

// Note: Round off the output to a single decimal place.

// Input Description:
// You are provided with two numbers A and B.

// Output Description:
// Find the sum of the two numbers (A + B)

// Sample Input :
// 1
// 1
// Sample Output :
// 2

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic

  const A = parseInt(userInput[0]);
  const B = parseInt(userInput[1]);

  function addition(num1, num2) {
    const C = num1 + num2;
    console.log(C);
  }

  addition(A, B);

  //end-here
});

//2 You are given three numbers A, B & C. Print the largest amongst these three numbers.

// Input Description:
// Three numbers are provided to you.

// Output Description:
// Find and print the largest among the three

// Sample Input :
// 1
// 2
// 3
// Sample Output :
// 3

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  // start-here

  // Convert the input strings to numbers
  const A = parseInt(userInput[0]);
  const B = parseInt(userInput[1]);
  const C = parseInt(userInput[2]);

  // Find the maximum among the three
  const largest = Math.max(A, B, C);

  // Print the result
  console.log(largest);

  // end-here
});

//3
// Print the First 3 multiples of the given number "N". (N is a positive integer)

// Note: print the characters with a single space between them.

// Input Description:
// A positive integer is provided to you as an input.

// Output Description:
// Print the First 3 multiples of the number with single spaces between them as an output.

// Sample Input :
// 2
// Sample Output :
// 2 4 6

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic
  const A = userInput[0];

  function multiples(num) {
    console.log(num * 1, num * 2, num * 3);
  }

  multiples(userInput[0]);

  //end-here
});

//4
// You are provided with a number "N", Find the Nth term of the series: 1, 4, 9, 16, 25, 36, 49, 64, 81, .......

// (Print "Error" if N = negative value and 0 if N = 0).

// Input Description:
// An integer N is provided to you as the input.

// Output Description:
// Find the Nth term in the provided series.

// Sample Input :
// 18
// Sample Output :
// 324
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic
  const N = parseInt(userInput[0]);

  function square(num1) {
    ans = Math.pow(num1, 2);
    console.log(ans);
  }

  square(N);

  //end-here
});
//5
// You are provided with two numbers. Find and print the smaller number.

// Input Description:
// You are provided with two numbers as input.

// Output Description:
// Print the small number out of the two numbers.

// Sample Input :
// 23 1
// Sample Output :
// 1
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  // start-here

  // Split the first line into two numbers
  const numbers = userInput[0].split(" ").map(Number);

  //"23 1".split(" ") ➝ ["23", "1"]
  //["23", "1"].map(Number) ➝ [23, 1]

  const A = numbers[0];
  const B = numbers[1];

  const smallest = Math.min(A, B);
  console.log(smallest);

  // end-here
});

//6
// You are given with Principle amount($), Interest Rate(%) and Time (years) in that order. Find Simple Interest.

// Print the output up to two decimal places (Round-off if necessary).

// (S.I. = P*T*R/100)

// Input Description:
// Three values are given to you as the input. these values correspond to Principle amount, Interest Rate and Time in that particular order.

// Output Description:
// Find the Simple interest and print it up to two decimal places. Round off if required.

// Sample Input :
// 1000 2 5
// Sample Output :
// 100.00

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic

  const numbers = userInput[0].split(" ").map(Number);

  const pricipleAmount = numbers[0];
  const interestRate = numbers[1];
  const timeYears = numbers[2];

  const simpleInterest = (pricipleAmount * timeYears * interestRate) / 100;
  console.log(simpleInterest);

  //end-here
});

//7
// You are provided with a number check whether its odd or even.

// Print "Odd" or "Even" for the corresponding cases.

// Note: In case of a decimal, Round off to nearest integer and then find the output. Incase the input is zero, print "Zero".

// Input Description:
// A number is provided as the input.

// Output Description:
// Find out whether the number is odd or even. Print "Odd" or "Even" for the corresponding cases. Note: In case of a decimal, Round off to nearest integer and then find the output. In case the input is zero, print "Zero".

// Sample Input :
// 2
// Sample Output :
// Even

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic

  const num = parseInt(userInput[0]);

  function oddorEven(num) {
    if (num % 2 == 0) {
      console.log("Even");
    } else {
      console.log("Odd");
    }
  }
  oddorEven(num);

  //end-here
});

//8
//You are given with a number A i.e. the temperature in Celcius. Write a program to convert this into Fahrenheit.

// Note: In case of decimal values, round-off to two decimal places.

// Input Description:
// A number is provided in Celcius as the input of the program.

// Output Description:
// The output shall be the temperature converted into Fahrenheit corresponding to the input value print up to two decimal places and round off if required.

// Sample Input :
// 12
// Sample Output :
// 53.60
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic

  const celcius = parseInt(userInput[0]);

  function celciustoF(degree) {
    formula = degree * (9 / 5) + 32;
    let rounded = formula.toFixed(2);
    console.log(rounded);
  }
  celciustoF(celcius);

  //end-here
});

//9
// You are given with a number "N", find its cube.

// Input Description:
// A positive integer is provided.

// Output Description:
// Find the cube of the number.

// Sample Input :
// 2
// Sample Output :
// 8
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic
  const num = parseInt(userInput[0]);
  const cube = num * num * num;
  console.log(cube);

  //end-here
});

//10
// You will be provided with a number. Print the number of days in the month corresponding to that number.

// Note: In case the input is February, print 28 days. If the Input is not in valid range print "Error".

// Input Description:
// The input is in the form of a number.

// Output Description:
// Find the days in the month corresponding to the input number. Print Error if the input is not in a valid range.

// Sample Input :
// 8
// Sample Output :
// 31
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic
  const month = parseInt(userInput[0]);

  function calCulate(month) {
    if (month <= 1 && month <= 2 && !month == 2) {
      console.log("31");
    } else if (month <= 0 || month >= 13) {
      console.log("Error");
    } else {
      console.log("28");
    }
  }
  calCulate(month);

  //end-here
});

//11
// Using the method of looping, write a program to print the table of 9 till N in the format as follows:
// (N is input by the user)

// 9 18 27...

// Print NULL if 0 is input

// Input Description:
// A positive integer is provided as an input.

// Output Description:
// Print the table of nine with single space between the elements till the number that is input.

// Sample Input :
// 3
// Sample Output :
// 9 18 27

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  // start-here

  const N = parseInt(userInput[0]);

  if (N === 0) {
    console.log("NULL");
  } else {
    let result = "";
    for (let i = 1; i <= N; i++) {
      result += 9 * i + " ";
    }
    console.log(result.trim());
  }

  // end-here
});

//12

// You are provided with a number, "N". Find its factorial.

// Input Description:
// A positive integer is provided as an input.

// Output Description:
// Print the factorial of the integer.

// Sample Input :
// 2
// Sample Output :
// 2// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  // start-here

  const N = parseInt(userInput[0]);

  function factorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    console.log(result);
  }

  factorial(N);

  // end-here
});

//13
// You are given a number A in Kilometers. Convert this into B: Meters and C: Centi-Metres.

// Input Description:
// A number "A" representing some distance in kilometer is provided to you as the input.

// Output Description:
// Convert and print this value in meters and centimeters.

// Sample Input :
// 2
// Sample Output :
// 2000
// 200000
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic

  const A = parseInt(userInput[0]);

  function conversion(distance) {
    const B = distance * 1000;
    const C = distance * 100000;
    console.log(B);
    console.log(C);
  }
  conversion(A);

  //end-here
});

//14
// Let "A" be a year, write a program to check whether this year is a leap year or not.

// Print "Y" if its a leap year and "N" if its a common year.

// Input Description:
// A Year is the input in the form of a positive integer.

// Output Description:
// Print "Y" if its a leap year and "N" if its a common year.

// Sample Input :
// 2020
// Sample Output :
// Y
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic

  const A = parseInt(userInput[0]);

  function yearFinder(year) {
    if (year % 4 == 0) {
      console.log("Y");
    } else {
      console.log("N");
    }
  }
  yearFinder(A);

  //end-here
});

//15
// The area of an equilateral triangle is ¼(√3a2) where "a" represents a side of the triangle. You are provided with the side "a". Find the area of the equilateral triangle.

// Input Description:
// The side of an equilateral triangle is provided as the input.

// Output Description:
// Find the area of the equilateral triangle and print the answer up to 2 decimal places after rounding off.

// Sample Input :
// 20
// Sample Output :
// 173.21
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic
  const a = parseInt(userInput[0]);

  function area(num) {
    formula = (1 / 4) * (Math.sqrt(3) * (num * num));
    console.log(formula.toFixed(2));
  }
  area(a);

  //end-here
});

//16
// Let "A"  be a string. Remove all the whitespaces and find it's length.

// Input Description:
// A string is provide as an input

// Output Description:
// Remove all the whitespaces and then print the length of the remaining string.

// Sample Input :
// Lorem Ipsum
// Sample Output :
// 10
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  // start-here

  const inputStr = userInput[0];

  // Remove all whitespace characters using regex
  const noSpacesStr = inputStr.replace(/\s/g, "");

  // Print the length of the string without spaces
  console.log(noSpacesStr.length);

  // end-here
});
//17

// Write a code to get an integer N and print the sum of  values from 1 to N.

// Input Description:
// A single line contains an integer N.

// Output Description:
// Print the sum of values from 1 to N.

// Sample Input :
// 10
// Sample Output :
// 55

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic
  const N = parseInt(userInput[0]);

  function sum(num) {
    let result = 0;
    for (i = 1; i <= num; i++) {
      result += i;
    }
    console.log(result);
  }
  sum(N);

  //end-here
});

//18
// Write a code to get an integer N and print the even values from 1 till N in a separate line.

// Input Description:
// A single line contains an integer N.

// Output Description:
// Print the even values from 1 to N in a separate line.

// Sample Input :
// 6
// Sample Output :
// 2
// 4
// 6

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  // start-here

  const num = parseInt(userInput[0]);

  function evennum(n) {
    for (let i = 1; i <= n; i++) {
      if (i % 2 === 0) {
        console.log(i);
      }
    }
  }

  evennum(num);

  // end-here
});

//19
// Write a code to get an integer N and print the digits of the integer.

// Input Description:
// A single line contains an integer N.

// Output Description:
// Print the digits of the integer in a single line separated by space,

// Sample Input :
// 348
// Sample Output :
// 3 4 8
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic
  const N = userInput[0];

  const ans = N.split("").join(" ");

  console.log(ans);

  //end-here
});

//20
// You are provided with the radius of a circle "A". Find the length of its circumference.

// Note: In case the output is coming in decimal, roundoff to 2nd decimal place. In case the input is a negative number, print "Error".

// Input Description:
// The Radius of a circle is provided as the input of the program.

// Output Description:
// Calculate and print the Circumference of the circle corresponding to the input radius up to two decimal places.

// Sample Input :
// 2
// Sample Output :
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  // start-here

  const radius = parseFloat(userInput[0]); // use parseFloat for decimal inputs too

  function getCircumference(r) {
    const result = 2 * 3.14159 * r;
    console.log(result.toFixed(2));
  }

  getCircumference(radius);

  // end-here
});

//21
// Write a code to get 2 integers A and N. Print the integer A, N times in separate line.

// Input Description:
// First line contains an integer A. Second line contains an Integer N.

// Output Description:
// Print the integer A, N times in a separate line.

// Sample Input :
// 2 3
// Sample Output :
// 2
// 2
// 2
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  // start-here

  const [A, N] = userInput[0].split(" ").map(Number);

  for (let i = 0; i < N; i++) {
    console.log(A);
  }

  // end-here
});

//22
// Write a code get an integer number as input and print the odd and even digits of the number separately.

// Input Description:
// A single line containing an integer.

// Output Description:
// Print the even and odd integers of the integer in a separate line.

// Sample Input :
// 1234
// Sample Output :
// 2 4
// 1 3
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  const numberStr = userInput[0]; // Example: "535225324"

  let even = [];
  let odd = [];

  for (let i = 0; i < numberStr.length; i++) {
    const digit = parseInt(numberStr[i]);

    if (digit % 2 === 0) {
      even.push(digit);
    } else {
      odd.push(digit);
    }
  }

  even.sort((a, b) => a - b);
  odd.sort((a, b) => a - b);

  console.log(even.join(" "));
  console.log(odd.join(" "));
});

//23
// Write a code to get the input and print it 5 times.

// Input Description:
// A single line contains an integer N.

// Output Description:
// Output contains 5 lines with each line having the value N.

// Sample Input :
// 4
// Sample Output :
// 4
// 4
// 4
// 4
// 4
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic
  const N = parseInt(userInput[0]);

  function repeat(num) {
    for (let i = 0; i <= 4; i++) {
      result = num;
      console.log(result);
    }
  }
  repeat(N);

  //end-here
});

//24
// Write a code to get 2 integers as input and find the HCF of the 2 integer without using recursion or Euclidean algorithm.

// Input Description:
// A single line containing 2 integers separated by space.

// Output Description:
// Print the HCF of the integers.

// Sample Input :
// 2 3
// Sample Output :
// 1
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  // start-here

  const [A, B] = userInput[0].split(" ").map(Number);
  let hcf = 1;

  const min = Math.min(A, B);

  for (let i = 1; i <= min; i++) {
    if (A % i === 0 && B % i === 0) {
      hcf = i;
    }
  }

  console.log(hcf);

  // end-here
});

//25
// Write a code to get an integer N and print the values from N to 1.

// Input Description:
// A single line contains an integer N.

// Output Description:
// Print the values from N to 1 in a separate line.

// Sample Input :
// 10
// Sample Output :
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  // start-here
  const N = parseInt(userInput[0]);

  function printDescending(num) {
    for (let i = num; i >= 1; i--) {
      console.log(i);
    }
  }

  printDescending(N);
  // end-here
});

//26
// You are given the coefficients of a quadratic equation in order A, B & C.

// Where A is the coefficient of X2,  B is the coefficient of X and C is the constant term in the most simplified form.

// Example: For  X2 + 5X + 6 = 0, you are given the input as: 1 5 6.

// Write a program to find all of the roots of the quadratic.

// Note: The output should be up to 2nd decimal place (round off if needed) and in case of a recurring decimal use braces i.e. for eg: 0.33333..... => 0.33.

// Note: Use Shri Dharacharya's Method to solve i.e. X = {-b + √(b² - 4ac) } / 2a & {-b-√(b² -4ac)} / 2a

// Input Description:
// Three numbers corresponding to the coefficients of x(squared), x and constant are given as an input in that particular order

// Output Description:
// Print the two values of X after rounding off to 2 decimal places if required.

// Sample Input :
// 1 5 6
// Sample Output :
// -2.00
// -3.00

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic
  const [A, B, C] = userInput[0].split(" ").map(Number);

  const D = Math.pow(B, 2) - 4 * (A * C);

  if (D < 0) {
    console.log("Complex roots");
  } else {
    const sqrtD = Math.sqrt(D);
    const x1 = (-B + sqrtD) / (2 * A);
    const x2 = (-B - sqrtD) / (2 * A);

    console.log(x1.toFixed(2));
    console.log(x2.toFixed(2));

    //end-here
  }
});

//27
// You are given A = Length of a rectangle & B = breadth of a rectangle. Find its area “C”.

// (A and B are natural numbers)

// Input Description:
// The inputs are two natural numbers representing the length and the breadth of a rectangle.

// Output Description:
// Find the area of the rectangle formed by the provided input. Round off the answer to the first decimal place if required.

// Sample Input :
// 2
// 3
// Sample Output :
// 6// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic
  const A = parseInt(userInput[0]);
  const B = parseInt(userInput[1]);

  const C = B * A;
  console.log(C.toFixed(2));

  //end-here
});

//28
// Write a code to get an integer N and print values from 1 till N in a separate line.

// Input Description:
// A single line contains an integer N.

// Output Description:
// Print the values from 1 to N in a separate line.

// Sample Input :
// 5
// Sample Output :
// 1
// 2
// 3
// 4
// 5
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic

  const N = parseInt(userInput[0]);

  function printAscending(num) {
    for (let i = 1; i <= num; i++) {
      console.log(i);
    }
  }
  printAscending(N);
  //end-here
});

//29
// Write a code get an integer number as input and print the sum of the digits.

// Input Description:
// A single line containing an integer.

// Output Description:
// Print the sum of the digits of the integer.

// Sample Input :
// 124
// Sample Output :
// 7
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic

  const numStr = userInput[0];
  let sum = 0;

  for (let i = 0; i < numStr.length; i++) {
    sum += parseInt(numStr[i]);
  }

  console.log(sum);
  //end-here
});

//30
// Write a program to get a string as input and reverse the string without using temporary variable.

// Input Description:
// A single line containing a string.

// Output Description:
// Print the reversed string.

// Sample Input :
// GUVI
// Sample Output :
// IVUG
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic

  const str = userInput[0];
  const reversed = str.split("").reverse().join("");
  console.log(reversed);

  //end-here
});

//30
