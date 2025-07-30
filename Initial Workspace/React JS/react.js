//crud
const textInput = document.getElementById("text-input");
const addBTN = document.getElementById("add-btn");
// let currentID = 0;

addBTN.addEventListener("click", (e) => {
  e.preventDefault();
  if ((textInput.value = "")) {
    return;
  }
  const listElement = document.createElement("li");
  const spanElement = document.createElement("span");
  spanElement.innerHTML = `${textInput.value}`;
  const editBtn = document.createElement("button");
  editBtn.innerHTML = "Edit";
  editBtn.onclick = () => {
    editFunction(listElement);
  };
});

function editFunction(li) {
  const spanValue = li.querySelector("span");
  let newValue = prompt("Give a new name");
  return (listElement = listElement.newValue);
}
//create
//read
//update
//delete
