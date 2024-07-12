const inputTask = document.getElementById("input-task");
const addBtn = document.getElementById("input-btn");
const task = document.getElementById("task");

function createTask(){
    const inputValue = inputTask.value;
    if(inputValue){
       console.log(inputTask.value);
    } else{
        alert("Please Write Someting...");
    }
    inputTask.value = "";
    const listDiv = document.createElement("div");
    listDiv.classList.add("task-list");

    const pasteTask = document.createElement("input");
    pasteTask.classList.add("paste-task");
    pasteTask.value = inputValue;
    pasteTask.setAttribute("readonly", "readonly");

    const btn = document.createElement("div");
    btn.classList.add("btn");

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.innerHTML = "Edit";

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML = "Delete";



    
    btn.appendChild(editBtn);
    btn.appendChild(deleteBtn);
    listDiv. appendChild(pasteTask);
    listDiv.appendChild(btn);
    task.appendChild(listDiv);


    deleteBtn.addEventListener("click", (event)=>{
        event.target.parentElement. parentElement.remove();
    });

    editBtn.addEventListener("click", (e)=>{
        if(e.target.innerText === "Edit"){
            pasteTask.removeAttribute("readonly");
            pasteTask.focus();
            editBtn.innerHTML = "Save";
        } else{
            pasteTask.setAttribute("readonly", "readonly");
            editBtn.innerHTML = "Edit";
        }
    });
}

addBtn.addEventListener("click",createTask);







