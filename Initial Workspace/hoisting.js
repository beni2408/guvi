var fnA = function () {
  var a = 15;
  console.log(a);
};
fnA();

//
// array and scoping

console.log("working");
// array
const arr = [1, 2, 3, 4];
console.log(arr); //add value from last index
arr.push(5, 6);
console.log(arr);

arr.pop(); // remove the last value
arr.pop();
console.log("after pop", arr);

arr.unshift(5); // add value from first
console.log("after unsift", arr);

arr.shift(); //remove the value from the first index
arr.shift();
console.log("after shift", arr);

const alphaArr = ["j", "a", "s", "c", "a", "r"];
const join = alphaArr.join("");
console.log("join : ", join);
const split = join.split("");
console.log("split : ", split);

//task:

// Praveen - input

//output:
//p
//r
//a
//v
//e
//e
//n

const input = "praveen";
const splitIn = input.split(""); //
for (let i = 0; i < splitIn.length; i++) {
  console.log(splitIn[i]);
}
//
//
//
//
//
//
///
//

//slice(startvalue(not index values), endvalue-exclusive)
console.log(alphaArr.slice(2, 5));

console.log("after slice :", alphaArr);
//splice
//spice (startvalue (not index values), deletecount, ...values)
alphaArr.splice(6, 0, "P");
console.log("after Splice", alphaArr);

// MRF (Map, Reduce , Filter)
const mrfArr = [2, 4, 5, 6];
let originalmultipleArr = mrfArr.map((value, index, accArr) => {
  console.log("original value", value);
  console.log("original index", index);
  return value * 2;
});

Array.prototype.newMap = function (fn) {
  let tempArr = [];
  for (let i = 0; i < this.length; i++) {
    tempArr.push(fn(this[i], i, this));
  }
  return tempArr;
};

let newmultipleArr = mrfArr.newMap((value, index, accArr) => {
  console.log(" new value", value);
  console.log("new index", index);
  return value * 2;
});

console.log(mrfArr);
console.log("new array : ", newmultipleArr);
console.log("originalmap arraay:", originalmultipleArr);

const filterArr = mrfArr.filter((value, index, accArr) => {
  return value != 5;
});

console.log(filterArr);

const reduceData = mrfArr.reduce((acc, value, index, accArr) => {
  return acc + value;
}, 10);

console.log(reduceData);

//scoping

let a = 14;
if (true) {
  console.log("inside", a);
}

const ample = 5;
console.log(ample);
