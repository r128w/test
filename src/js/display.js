import dataFile from "../assets/data.json" with {type:'json'};

console.log(dataFile);

// console.log(dataFile.todo);

// console.log(dataFile.todo[0].name);

let currentTimestamp = Math.floor(Date.now() / 1000);
console.log(currentTimestamp);
function getUntil(time){
    let secondsUntil = time - currentTimestamp;
    let daysUntil = Math.floor(Math.abs(secondsUntil / 86400));
    let hoursUntil = Math.floor(Math.abs(secondsUntil /  3600)) % 24;
    
    if (secondsUntil > 0){
        return daysUntil + "d" + hoursUntil + "h";
    }else{
        return "-" + daysUntil + "d" + hoursUntil + "h";
    }
}

function createTaskElement(task){
    
    let newItem = document.createElement("div");
    newItem.className = "task-container";

    let text = document.createElement("p");
    text.style = "margin:0px";
    text.innerHTML = task.name + " : " + getUntil(task.due);
    newItem.appendChild(text);

    return newItem;

}

// write elements of todo to left column
const todoColumn = document.getElementById("todoColumn");
for (let task of dataFile.todo){
    // let newItem = document.createElement("p");
    // newItem.innerHTML = task.name + " : " + getUntil(task.due);
    // newItem.className = "task-container";
    // todoColumn.appendChild(newItem);

    // let newItem = document.createElement("div");
    // newItem.className = "task-container";
    // let text = document.createElement("p");
    // text.style = "margin:0px";
    // text.innerHTML = task.name + " : " + getUntil(task.due);
    // newItem.appendChild(text);
    todoColumn.appendChild(createTaskElement(task));
}

//same for done
const doneColumn = document.getElementById("doneColumn");
for (let task of dataFile.done){
    doneColumn.appendChild(createTaskElement(task));
}