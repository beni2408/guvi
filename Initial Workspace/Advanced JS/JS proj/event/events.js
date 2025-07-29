//
//fetch

fetch("https://restcountries.com/v3.1/independent?status=true", {
  method: "GET",
}).then((res) => console.log(res).catch((err) => console.log(err)));
