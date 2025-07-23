// console.log("start");
// setTimeout(() => {
//   console.log("end");
// }, 2000);

// console.log("all process end");

function task1(cb) {
  console.log("task1 start");
  setTimeout(() => {
    console.log("task 1 end");
    const encryptedValue = "ansifoudie.jgoidn";
    cb(encryptedValue);
  }, 2000);
}

function task2(value) {
  setTimeout(() => {
    console.log("task2 start");
    console.log("task 2 end", value);
  }, 2000);
}

task1(task2);
