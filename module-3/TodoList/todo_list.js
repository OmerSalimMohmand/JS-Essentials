const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
const clearAllBtn = document.getElementById("clearAllBtn");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const searchList = document.getElementById("searchList");

let tasks = [];

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push({ text: taskText});
        taskInput.value = "";
        displayTasks();
    }
}

function displayTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
            <label for="task-${index}">${task.text}</label>`;
        li.querySelector("input").addEventListener("change", () => toggleTask(index));
        taskList.appendChild(li);
    });
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function clearCompletedTasks() {
    tasks = tasks.filter(task => !task.completed);
    displayTasks();
}

function clearAllTasks(){
    tasks.length = 0;
    displayTasks();
}

function searchTasks(){
    const searchText = searchInput.value.trim().toLowerCase();
    const foundTasks = tasks.filter((task)=>{
    const taskText = task.text.toLowerCase();
        return taskText.indexOf(searchText) == -1 ? false : true;
    });
    displaySearchTasks(foundTasks);
}

function displaySearchTasks(foundTasks){
    searchList.innerHTML = ""
    const searchTitle = document.createElement('h3');
    searchTitle.textContent = (foundTasks.length) ? "Similar tasks found:\n" : "No similar tasks found";
    searchList.appendChild(searchTitle);

    foundTasks.forEach((task, index)=>{
        const taskHeader = document.createElement("p");
        taskHeader.textContent = `${index + 1}: ${task.text}`;
        searchList.appendChild(taskHeader);
    })
}

addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);
clearAllBtn.addEventListener("click", clearAllTasks);
searchBtn.addEventListener("click", searchTasks)