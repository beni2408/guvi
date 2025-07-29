// //
// //fetch

// fetch("https://restcountries.com/v3.1/independent?status=true", {
//   method: "GET",
// }).then((res) => console.log(res).catch((err) => console.log(err)));

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
  console.log(countryArr);
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
