// console.log("start");
// setTimeout(() => {
//   console.log("end");
// }, 2000);

// console.log("all process end");

// function task1(cb) {
//   console.log("task1 start");
//   setTimeout(() => {
//     console.log("task 1 end");
//     const encryptedValue = "ansifoudie.jgoidn";
//     cb(encryptedValue);
//   }, 2000);
// }

// function task2(value) {
//   setTimeout(() => {
//     console.log("task2 start");
//     console.log("task 2 end", value);
//   }, 2000);
// }

console.log("...................");
console.log("callback func");

function task1(cb) {
  console.log("Task 1 started");
  setTimeout(() => {
    console.log("task 1 completed");
    cb();
  }, 2000);
}
function task2(cb) {
  console.log("Task2 started");
  setTimeout(() => {
    console.log("task2 completed");
    cb();
  }, 3000);
}

function task3(cb) {
  console.log("Task3 started");
  setTimeout(() => {
    console.log("task3 completed");
    cb();
  }, 3000);
}
function task4(cb) {
  console.log("Task4 started");
  setTimeout(() => {
    console.log("task4 completed");
    cb();
  }, 4000);
}
function task5() {
  console.log("Task5 started");
  setTimeout(() => {
    console.log("task5 completed");
  }, 5000);
}

//callback hell or invension of control
task1(() => {
  task2(() => {
    task3(() => {
      task4(() => {
        task5();
      });
    });
  });
});
