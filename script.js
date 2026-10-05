// Get the form and other elements from HTML
const taskForm = document.getElementById("task-form");
const taskTitle = document.getElementById("task-title");
const taskDescription = document.getElementById("task-description");
const taskList = document.getElementById("task-list");

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
    taskCard.appendChild(actions);

    // Add the task card to the task list
    taskList.appendChild(taskCard);

    // Clear the form
    taskForm.reset();
});

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