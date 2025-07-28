// async task try to return the object if the name is a music diector

let musicdir = ["ARR", "Anirudh", "GVP", "Vijay antony", "Yuvan", "Raaja"];
let msdir = [
  {
    name: "Anirudh",
    category: "Rock Artist",
    wellKnownProjects: ["Leo", "Coolie"],
  },
  {
    name: "A.R. Rahman",
    category: "All Genre",
    wellKnownProjects: ["Mersal", "Slumdog Millionaire", "Roja"],
  },
  {
    name: "Yuvan Shankar Raja",
    category: "Melody",
    wellKnownProjects: ["The GOAT", "Mankatha", "Kadhal Konden"],
  },
  {
    name: "G.V. Prakash",
    category: "Variations",
    wellKnownProjects: ["Polladhavan", "Asuran", "Aayirathil Oruvan"],
  },
  {
    name: "Vijay Antony",
    category: "Experimental",
    wellKnownProjects: ["Naan", "Salim", "Pichaikkaran"],
  },
  {
    name: "Ilaiyaraaja",
    category: "Maestro",
    wellKnownProjects: ["Thalapathi", "Punnagai Mannan", "Hey Ram"],
  },
  {
    name: "Harris Jayaraj",
    category: "Romantic",
    wellKnownProjects: ["Minnale", "Kaakha Kaakha", "Ghajini"],
  },
  {
    name: "Santhosh Narayanan",
    category: "Folk Fusion",
    wellKnownProjects: ["Jigarthanda", "Kaala", "Soodhu Kavvum"],
  },
  {
    name: "D. Imman",
    category: "Mass Commercial",
    wellKnownProjects: ["Myna", "Kumki", "Theri BGM"],
  },
];

function validMD(name) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const match = msdir.find((obj) => obj.name === name);

      if (!match) {
        rej({ error: "No Artist found" });
      } else {
        console.log("Found");
        res(match); // Correct: returning the matched object
      }
    }, 2000);
  });
}

// function serchhistory(result) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {

//     }, 2000);
//   });
// }

async function checking(name) {
  try {
    let validcase = await validMD(name);
    console.log(validcase);
  } catch (err) {
    console.log(err);
  }
}

checking("Anirudh");
