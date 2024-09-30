const taskContainer=document.getElementById("task-container")
var tasks=[]
const maxTasks=20

let addTask=()=>{
    let newTask=document.getElementById("task-input").value
    if(newTask&&validateTaskMessage(newTask)&&(tasks.length+1<maxTasks)){
        createTaskElement(newTask)
        document.getElementById("task-input").value=""
    }
}


let validateTaskMessage=(message)=>{
    if(message!="")return true
    return false
}

let clearAllTasks=()=>{
    taskContainer.innerHTML=""
}

let getDeleteButton=(id)=>{
    let deleteButton=document.createElement("button")
    deleteButton.addEventListener('click', ()=>{
        deleteTask(id)
    })
    deleteButton.innerText="Delete"
    return deleteButton
}

let generateId=()=>{
    let valid=false
    let id=0
    do{
        id= Math.floor(Math.random() * maxTasks)
        if(!tasks.includes(id)) valid=true
    }while(!valid)
    tasks.push(id)
    return id
}

let createTaskElement=(message)=>{
    let taskId=generateId()
    let task=document.createElement("li");
    task.setAttribute("id", taskId);
    let taskMessage=document.createElement("p");
    taskMessage.innerText=message;
    task.appendChild(taskMessage)
    task.appendChild(getDeleteButton(taskId))
    taskContainer.appendChild(task)
}

let deleteTask=(taskId)=>{
    let selectedTask=document.getElementById(taskId)
    tasks.pop(taskId)
    taskContainer.removeChild(selectedTask)
}
