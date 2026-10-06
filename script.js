// Get the form and other elements from HTML
const taskForm = document.getElementById("task-form");
const taskTitle = document.getElementById("task-title");
const taskDescription = document.getElementById("task-description");
const taskList = document.getElementById("task-list");
const taskSearch = document.getElementById("task-search");

// Add a task when the form is submitted
taskForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the values entered by the user
    const title = taskTitle.value.trim();
    const description = taskDescription.value.trim();

    // Prevent adding a task with an empty title
    if (title === "") {
        alert("Please enter a task title.");
        return;
    }

    // Create the task card
    const taskCard = document.createElement("div");
    taskCard.classList.add("task-card");

    // Create task title
    const titleElement = document.createElement("h2");
    titleElement.classList.add("task-card__title");
    titleElement.textContent = title;

    // Create task description
    const descriptionElement = document.createElement("p");
    descriptionElement.classList.add("task-card__description");
    descriptionElement.textContent = description;

    // Create task info badge
    const taskInfo = document.createElement("small");
    taskInfo.textContent = "New Task";

    // Create buttons container
    const actions = document.createElement("div");
    actions.classList.add("task-card__actions");

    // Create Complete button
    const completeButton = document.createElement("button");
    completeButton.classList.add("complete-btn");
    completeButton.textContent = "Complete";

    // Create Delete button
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.textContent = "Delete";

    // Complete button functionality
    completeButton.addEventListener("click", function() {
        if (!taskCard.classList.contains("completed")) {
            taskCard.classList.add("completed");
            completeButton.textContent = "Completed";
        }
    });

    // Delete button functionality
    deleteButton.addEventListener("click", function() {
        taskCard.remove();
    });

    // Put buttons inside the actions container
    actions.appendChild(completeButton);
    actions.appendChild(deleteButton);

    // Put everything inside the task card
    taskCard.appendChild(titleElement);
    taskCard.appendChild(descriptionElement);
    taskCard.appendChild(taskInfo);
    taskCard.appendChild(actions);

    // Add the task card to the task list
    taskList.appendChild(taskCard);

    // Clear the form and set focus back to title
    taskForm.reset();
    taskTitle.focus();
});

// Success message feedback
taskForm.addEventListener("submit", function() {
    const message = document.createElement("p");
    message.textContent = "✨ Task added successfully!";
    message.style.textAlign = "center";
    message.style.color = "#719b83";
    message.style.fontWeight = "600";
    message.style.marginTop = "10px";

    taskForm.appendChild(message);

    // Remove the message after 2 seconds
    setTimeout(function() {
        message.remove();
    }, 2000);
});

taskSearch.addEventListener("input", function() {
    const searchText = taskSearch.value.toLowerCase();

    const tasks = taskList.querySelectorAll(".task-card");

    tasks.forEach(function(task) {
        const title = task.querySelector(".task-card__title").textContent.toLowerCase();
        const description = task.querySelector(".task-card__description").textContent.toLowerCase();

        if (title.includes(searchText) || description.includes(searchText)) {
            task.style.display = "block";
        } else {
            task.style.display = "none";
        }
    });
});
// ==========================================
// TASK STATISTICS
// ==========================================

const taskStatistics = document.createElement("div");

taskStatistics.classList.add("task-statistics");

const totalTasks = document.createElement("p");

totalTasks.classList.add("total-tasks");

const pendingTasks = document.createElement("p");

pendingTasks.classList.add("pending-tasks");

const completedTasks = document.createElement("p");

completedTasks.classList.add("completed-tasks");

taskStatistics.appendChild(totalTasks);

taskStatistics.appendChild(pendingTasks);

taskStatistics.appendChild(completedTasks);

taskList.parentNode.insertBefore(
    taskStatistics,
    taskList
);


// ==========================================
// UPDATE TASK STATISTICS
// ==========================================

function updateTaskStatistics() {

    const tasks = taskList.querySelectorAll(".task-card");

    const total = tasks.length;

    let completed = 0;

    tasks.forEach(function(task) {

        if (task.classList.contains("completed")) {

            completed++;
        }
    });

    const pending = total - completed;

    totalTasks.textContent = "Total Tasks: " + total;

    pendingTasks.textContent = "Pending: " + pending;

    completedTasks.textContent = "Completed: " + completed;
}


// ==========================================
// UPDATE STATISTICS AFTER ADDING TASK
// ==========================================

taskForm.addEventListener("submit", function() {

    setTimeout(function() {

        updateTaskStatistics();

    }, 100);
});


// ==========================================
// UPDATE STATISTICS AFTER COMPLETING TASK
// ==========================================

taskList.addEventListener("click", function(event) {

    if (event.target.classList.contains("complete-btn")) {

        setTimeout(function() {

            updateTaskStatistics();

        }, 100);
    }
});


// ==========================================
// UPDATE STATISTICS AFTER DELETING TASK
// ==========================================

taskList.addEventListener("click", function(event) {

    if (event.target.classList.contains("delete-btn")) {

        setTimeout(function() {

            updateTaskStatistics();

        }, 100);
    }
});


// ==========================================
// INITIAL TASK STATISTICS
// ==========================================

updateTaskStatistics();
// ==========================================
// TASK FILTER BUTTONS
// ==========================================

// Create filter container
const filterContainer = document.createElement("div");

filterContainer.classList.add("task-filters");


// Create All Tasks button
const allTasksButton = document.createElement("button");

allTasksButton.textContent = "All Tasks";

allTasksButton.classList.add("filter-btn");


// Create Pending Tasks button
const pendingTasksButton = document.createElement("button");

pendingTasksButton.textContent = "Pending";

pendingTasksButton.classList.add("filter-btn");


// Create Completed Tasks button
const completedTasksButton = document.createElement("button");

completedTasksButton.textContent = "Completed";

completedTasksButton.classList.add("filter-btn");


// Add buttons to filter container
filterContainer.appendChild(allTasksButton);

filterContainer.appendChild(pendingTasksButton);

filterContainer.appendChild(completedTasksButton);


// Put filter buttons before the task list
taskList.parentNode.insertBefore(
    filterContainer,
    taskList
);


// ==========================================
// SHOW ALL TASKS
// ==========================================

allTasksButton.addEventListener("click", function() {

    const tasks = taskList.querySelectorAll(".task-card");

    tasks.forEach(function(task) {

        task.style.display = "block";

    });

});


// ==========================================
// SHOW PENDING TASKS
// ==========================================

pendingTasksButton.addEventListener("click", function() {

    const tasks = taskList.querySelectorAll(".task-card");

    tasks.forEach(function(task) {

        if (task.classList.contains("completed")) {

            task.style.display = "none";

        } else {

            task.style.display = "block";

        }

    });

});


// ==========================================
// SHOW COMPLETED TASKS
// ==========================================

completedTasksButton.addEventListener("click", function() {

    const tasks = taskList.querySelectorAll(".task-card");

    tasks.forEach(function(task) {

        if (task.classList.contains("completed")) {

            task.style.display = "block";

        } else {

            task.style.display = "none";

        }

    });

});