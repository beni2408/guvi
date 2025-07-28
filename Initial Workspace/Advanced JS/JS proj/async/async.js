//async

//task
// function which check for the name in allName =[]
//if we already have a name rej(username already exists)
//else username verified successfully

let allNames = [];
function verifyData(name) {
  return new Promise((res, rej) => {
    let normalizename = name.toLowerCase();
    console.log("normalizedName : ", normalizename);
    setTimeout(() => {
      if (allNames.includes(name)) {
        rej({ error: "username already taken" });
      } else {
        res({
          status: "success",
          response: "User Verified successfully",
          username: normalizename,
        });
      }
    }, 2000);
  });
}

// if array exceed length 5 na reject or else update the data

function updateData(username) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (allNames.length >= 5) {
        rej({ error: "Db Limit exceeded", username });
      } else {
        allNames.push(username);
        res({
          status: "success",
          response: "user added to the DB",
          data: allNames,
        });
      }
    }, 2000);
  });
}

// verifyData("jascar")
//   .then((data) => data.data)
//   .then((data) => updateData(data))
//   .then((result) => console.log(result))
//   .catch((err) => {
//     console.log(err);
//   });

//async and await
async function updateUserToDB(name) {
  try {
    let result = await verifyData(name);
    console.log(result);
    let dbResult = await updateData(result.username);
    console.log("DB", dbResult);
  } catch (err) {
    console.log(err);
  }
}

let needTOADDARR = ["jascar", "Joel", "Rohan", "sam", "Vino", "Antan"];
needTOADDARR.map((val, index) => {
  updateUserToDB(val);
});

// updateUserToDB("jascar");
