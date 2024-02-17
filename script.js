document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('task');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');
    const tasks = [];

    function displayTasks() {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${task}</span>
                <button class="edit-button" data-index="${index}">Edit</button>
                <button class="delete-button" data-index="${index}">Delete</button>
            `;
            taskList.appendChild(li);
        });
    }

    function addTask() {
        const newTask = taskInput.value.trim();
        if (newTask !== '') {
            tasks.push(newTask);
            taskInput.value = '';
            displayTasks();
        }
    }

    function editTask(index) {
        const updatedTask = prompt('Edit the task:', tasks[index]);
        if (updatedTask !== null) {
            tasks[index] = updatedTask;
            displayTasks();
        }
    }

    function deleteTask(index) {
        if (confirm('Are you sure you want to delete this task?')) {
            tasks.splice(index, 1);
            displayTasks();
        }
    }

    addTaskButton.addEventListener('click', addTask);

    taskList.addEventListener('click', (event) => {
        const index = event.target.getAttribute('data-index');
        if (event.target.classList.contains('edit-button')) {
            editTask(index);
        } else if (event.target.classList.contains('delete-button')) {
            deleteTask(index);
        }
    });

    displayTasks();
});
