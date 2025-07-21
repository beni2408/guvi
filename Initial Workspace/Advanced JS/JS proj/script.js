let formContainer = document.createElement("div");
let mainContainer = document.getElementById("main");
let listContainer = document.createElement("div");
// listContainer.setAttribute("class");
formContainer.setAttribute("id", "form-box");
formContainer.innerHTML += `
<form class= " shadow-xl w-[700px] h-[400px]  flex flex-col items-center   justify-center gap-3">
<h1 class="text-3xl font-bold righteous-regular"> Student Portal form</h1>
<input required type="text" id="name-input" class="  focus:outline-none p-4  bg-slate-200 rounded-md border-1  w-[90%]" placeholder = "Enter your name">
<input required type="text" id="batch-input"  class="  focus:outline-none p-4 bg-slate-200 rounded-md  border-1 w-[90%]"placeholder = "Enter your Batch no.">
<input required type="text" id="course-input" class="  focus:outline-none p-4 bg-slate-200 rounded-md  border-1 w-[90%]" placeholder = "Enter course name">
<button  id="save-btn" class =  " righteous-regular bg-black p-2 w-36 rounded-lg text-white font-semibold">Save</button>
</form>
`;
mainContainer.append(formContainer, listContainer);

let nameInput = document.getElementById("name-input");
let batchInput = document.getElementById("batch-input");
let courseInput = document.getElementById("course-input");

const saveBtn = document.getElementById("save-btn");

function removeInputField() {
  nameInput.value = "";
  batchInput.value = "";
  courseInput.value = "";
}

formContainer.addEventListener("submit", (e) => {
  e.preventDefault();
  const newStudentObject = {
    student_name: nameInput?.value,
    student_batch: batchInput?.value,
    student_course: courseInput?.value,
  };
  if (newStudentObject) {
    console.log(newStudentObject);
    studentList.push(newStudentObject);
    removeInputField();
  }
});
const dummyObj = {
  student_name: "Jascar",
  student_batch: "B29",
  student_course: "Full Stack",
};
function createStudentCard(studentObj) {
  listContainer.innerHTML += `
    <div class="  flex justify-start p-4 flex-wrap items-center">
    <div class = "bg-slate-200 p-4 rounded-lg w-[150px] h-[200px] flex flex-col shadow-lg"> 
    <div class="text-2xl text-center font-bold righteous-regular">${studentObj.student_name}</div>
    <div class = "opacity-75 font-semibold ">${studentObj.student_batch}</div>
    <div class ="opacity-75 font-semibold " >${studentObj.student_course}</div>
    </div>
    </div>
  `;
}

createStudentCard(dummyObj);
