document.addEventListener("DOMContentLoaded", () => {
    loadTasks();
});

function addTask() {
    const inputField = document.getElementById("newTaskInput");
    const taskText = inputField.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("taskList");

        const li = document.createElement("li");
        li.innerHTML = `
            <span>${taskText}</span>
            <div style="display:flex; gap:10px;align-items:center;">
                <input class="check" type="checkbox" onchange="toggleTaskCompletion(this)">
                <button onclick="removeTask(this)" class="dlBtn">Delete</button>
            </div>
        `;

        taskList.appendChild(li);

        saveTasks();
        inputField.value = "";
    }
}

function toggleTaskCompletion(checkbox) {
    const task = checkbox.parentElement.parentElement;
    task.classList.toggle("completed");
    saveTasks();
}

function removeTask(button) {
    const task = button.parentElement.parentElement;
    task.remove();
    saveTasks();
}

function filterTasks(filter) {
    const taskList = document.getElementById("taskList");
    const tasks = taskList.getElementsByTagName("li");

    for (const task of tasks) {
        switch (filter) {
            case "all":
                task.style.display = "flex";
                break;
            case "active":
                task.classList.contains("completed") ? task.style.display = "none" : task.style.display = "flex";
                break;
            case "completed":
                task.classList.contains("completed") ? task.style.display = "flex" : task.style.display = "none";
                break;
        }
    }
}

function saveTasks() {
    const taskList = document.getElementById("taskList");
    const tasks = taskList.getElementsByTagName("li");

    const savedTasks = [];
    for (const task of tasks) {
        const taskText = task.querySelector("span").innerText;
        const isCompleted = task.classList.contains("completed");
        savedTasks.push({ text: taskText, completed: isCompleted });
    }

    localStorage.setItem("tasks", JSON.stringify(savedTasks));
}

function loadTasks() {
    const taskList = document.getElementById("taskList");
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    
    for (const task of storedTasks) {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${task.text}</span>
            <div style="display:flex; gap:10px;align-items:center;">
                <input class="check" type="checkbox" ${task.completed ? "checked" : ""} onchange="toggleTaskCompletion(this)">
                <button onclick="removeTask(this)" class="dlBtn">Delete</button>
            </div>
        `;

        if (task.completed) {
            li.classList.add("completed");
        }

        taskList.appendChild(li);
    }
}
