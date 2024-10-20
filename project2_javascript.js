document.addEventListener("DOMContentLoaded", () => {
    const taskArray = [];
    const taskForm = document.getElementById("taskForm");
    const taskList = document.getElementById("taskList");

    const renderTask = (task, index) => {
        const taskItem = document.createElement("li"); //This creates the list item
        taskItem.classList.add("listGroupItem");
        const taskInfo = document.createElement("span"); //These are the task informations
        taskInfo.innerHTML = `<strong>${task.title}</strong> - Priority: ${task.priority} - Status: ${task.status}`;
        if (task.status === "completed") {
            taskItem.classList.add("completed");
        }
        const completeButton = document.createElement("button"); //This button is for when you completed the task
        completeButton.classList.add("btn", "btn-success", "btn-sm");
        completeButton.innerText = "Finished";
        completeButton.addEventListener("click", () => {
            task.status = "completed";
            taskItem.classList.add("completed");
            taskInfo.innerHTML = `<strong>${task.title}</strong> - Priority: ${task.priority} - Status: completed`;
        });
        const removeButton = document.createElement("button"); //This button is for when you want to remove the task
        removeButton.classList.add("btn", "btn-danger", "btn-sm");
        removeButton.innerText = "Remove";
        removeButton.addEventListener("click", () => {
            taskArray.splice(index, 1); 
            taskItem.remove(); 
        });
        taskItem.appendChild(taskInfo); //These appends the task infos and buttons to taskItem
        taskItem.appendChild(completeButton);
        taskItem.appendChild(removeButton);
        taskList.appendChild(taskItem);
    };
    taskForm.addEventListener("submit", (event) => { 
        event.preventDefault();
        const title = document.getElementById("taskName").value; 
        const priority = document.getElementById("taskPriority").value;
        const status = document.querySelector("input[name='taskStatus']:checked").value;
        const task = {
            title: title,
            priority: priority,
            status: status,
        };
        taskArray.push(task);
        renderTask(task, taskArray.length - 1);
        taskForm.reset();
    });
});
