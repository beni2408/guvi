// //
// //fetch

// fetch("https://restcountries.com/v3.1/independent?status=true", {
//   method: "GET",
// }).then((res) => console.log(res).catch((err) => console.log(err)));

// restapi
let mainContainer = document.getElementById("main");
let cardList = document.createElement("div");
cardList.setAttribute("class", "cardList");

function createNewCard(value) {
  cardList.innerHTML += `
    <div class="card">
    <img class = "card-image" src=${value.flags.png} alt=${"image"}/>
    <div class = "card-name">${value.name.common}<div>
    </div>
    `;
}

function renderAllcard(countryArr) {
  // console.log(countryArr);
  countryArr.forEach((value) => {
    createNewCard(value);
  });
}
// fetch("https://restcountries.com/v3.1/independent?status=true", {
//   method: "GET",
// })
//   .then((response) => response.json())
//   .then((data) => renderAllcard(data))
//   .catch((err) => console.log(err));

//async method

async function getcountryData() {
  try {
    let ftdata = await fetch(
      "https://restcountries.com/v3.1/independent?status=true",
      {
        method: "GET",
      }
    );
    let gotdt = await ftdata.json();
    let render = renderAllcard(gotdt);
  } catch (err) {
    console.log(err);
  }
}
mainContainer.append(cardList);
getcountryData();

//

//REST
let someArr = ["value1", "value2", "value3"];
console.log(...someArr);

let someObj = {
  name: "value1",
  key2: "value2",
};

// console.log(...someObj);

function someFunc(param1, param2, param3) {
  console.log(param1);
  console.log(param2);
  console.log(param3);
}
function someRest(param1, ...param2) {
  console.log(param1);
  console.log(param2);
}

someFunc(...someArr); //(value1, value2, value3)
someRest("value1", "value2", "value3", "value4"); //(value1, value2, value3)

const arr1 = ["jascar", "Rohan", "Shiny"];
const arr2 = ["Sam", "rohan", "Vino"];
const movedarr = [...arr1, ...arr2];
console.log(movedarr);

const newObj = {
  name: "newObj",
  ...arr1,
};

console.log(newObj);

// array destructuring
let [idx1, idx2, idx3] = arr1;
console.log(idx1);
console.log(idx2);
console.log(idx3);
// we can give empty for 2nd value if we only need the 1st and 3rd

const { name } = someObj;
console.log(name);

const { 2: key2val } = newObj;
console.log(key2val);
