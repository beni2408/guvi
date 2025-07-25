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

// CALLBACK FUNCTIONS

// console.log("...................");
// console.log("callback func");

// function task1(cb) {
//   console.log("Task 1 started");
//   setTimeout(() => {
//     console.log("task 1 completed");
//     cb();
//   }, 2000);
// }
// function task2(cb) {
//   console.log("Task2 started");
//   setTimeout(() => {
//     console.log("task2 completed");
//     cb();
//   }, 3000);
// }

// function task3(cb) {
//   console.log("Task3 started");
//   setTimeout(() => {
//     console.log("task3 completed");
//     cb();
//   }, 3000);
// }
// function task4(cb) {
//   console.log("Task4 started");
//   setTimeout(() => {
//     console.log("task4 completed");
//     cb();
//   }, 4000);
// }
// function task5() {
//   console.log("Task5 started");
//   setTimeout(() => {
//     console.log("task5 completed");
//   }, 5000);
// }

// //callback hell or invension of control
// task1(() => {
//   task2(() => {
//     task3(() => {
//       task4(() => {
//         task5();
//       });
//     });
//   });
// });

//PROMISES

// producer - we can producer a promiser
// function createData(name, Age) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       if (Age > 30) {
//         rej({ error: "Rejected your request" });
//       } else {
//         res({ name, Age });
//       }
//     }, 2000);
//   });
// }
// let DB = [{ name: "Praveen", age: "22" }];
// function pushToDb(data) {
//   return new Promise((res, rej) => {
//     if (data.name == "Praveen") {
//       rej({ Error: "User already exist" });
//     } else {
//       DB.push(data);
//       res(DB);
//     }
//   });
//   DB.push(data);
//   return DB;
// }

// // Consumer
// console.log("Started");
// createData("Jascar", 22)
//   .then((data) => {
//     console.log(data);
//     return data;
//   })
//   .then((data2) => {
//     return pushToDb(data2);
//   })
//   .then((data3) => {
//     return createData("Praveen", 21);
//   })
//   .then((data4) => {
//     console.log(data4);
//     return pushToDb(data4);
//   })
//   .then((data5) => {
//     console.log(data5);
//   })

//   .catch((err) => {
//     console.log(err);
//   });

// own practice
function getData(name, course) {
  return new Promise((respond, reject) => {
    setTimeout(() => {
      if (course == "CSE" || course == "cse") {
        reject({ Error: "No Computer Science Course is available" });
      } else {
        respond({ name, course });
      }
    }, 2000);
  });
}

let database = [{ name: "Fedora", course: "CSE" }];
function databaseCorrector(data) {
  return new Promise((respond, reject) => {
    if (data.name == "fedora") {
      reject({ Error: "Duplicate value" });
    } else {
      database.push(data);
      respond(database);
    }
  });
}

console.log("started");
getData("jascar", "BioTech")
  .then((data) => {
    console.log(data);
    return data;
  })
  .then((data1) => {
    return databaseCorrector(data1);
    return data1;
  })
  .then((data2) => {
    console.log(database);
  })
  .then((data3) => {
    return getData("Rohan", "MEchanical");
  })
  .then((data4) => {
    return databaseCorrector(data4);
    console.log(data4);
  })
  .then((data5) => {
    console.log(data5);
  })
  .then((data6) => {
    return getData("Sam Leo", "CSE");
  })
  .catch((err) => {
    console.log(err);
  });
