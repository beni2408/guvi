let formContainer = document.createElement("div");
let mainContainer = document.getElementById("main");
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
mainContainer.append(formContainer);

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
