const form = document.getElementById("task-form");
const title = document.getElementById("task-title");
const description = document.getElementById("task-description");
const taskList = document.getElementById("task-list");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (title.value.trim() === "") {
        alert("Please enter a task title.");
        return;
    }

    const task = document.createElement("div");
    task.className = "task-card";

    const taskTitle = document.createElement("h3");
    taskTitle.textContent = title.value;

    const taskDescription = document.createElement("p");
    taskDescription.textContent = description.value;

    const taskInfo = document.createElement("small");
    taskInfo.textContent = "New Task";

    task.appendChild(taskTitle);
    task.appendChild(taskDescription);
    task.appendChild(taskInfo);

    taskList.appendChild(task);

    form.reset();

    title.focus();
});