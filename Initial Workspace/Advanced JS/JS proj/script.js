let formContainer = document.createElement("div");
let mainContainer = document.getElementById("main");
formContainer.setAttribute("id", "form-box");
formContainer.innerHTML += `
<form class= " shadow-xl w-[700px] h-[400px]  flex flex-col items-center   justify-center gap-3">
<h1 class="text-2xl font-bold "> Student Portal form</h1>
<input type="text" class=" focus:outline-none p-4  bg-slate-200 rounded-md border-1  w-[90%]" placeholder = "Enter your name">
<input type="text"  class=" focus:outline-none p-4 bg-slate-200 rounded-md  border-1 w-[90%]"placeholder = "Enter your Batch no.">
<input type="text" class=" focus:outline-none p-4 bg-slate-200 rounded-md  border-1 w-[90%]" placeholder = "Enter course name">
<button class = "bg-black p-2 w-36 rounded-lg text-white font-semibold">Save</button>
</form>
`;

mainContainer.append(formContainer);
