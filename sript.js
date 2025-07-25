const task=document.getElementById("task");
const btn=document.getElementById("addTask");
const taskList=document.getElementById("taskList");

btn.addEventListener("click",function(){
    if(task.value.trim()!==""){
        const li=document.createElement("li");
        li.textContent=task.value;

        const deleteBtn=document.createElement("button");
        deleteBtn.style.marginLeft="10px";
        deleteBtn.innerHTML=`<i class="fa-solid fa-trash"></i>`;

        deleteBtn.addEventListener("click",function(){
            li.remove();
        })
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        task.value="";
    }
})