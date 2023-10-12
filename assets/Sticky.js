function addTask() {
    const title = document.getElementById('taskTitle').value;
    const description = document.getElementById('taskDescription').value;

    if (title.trim() !== '') {
        const taskList = document.getElementById('tasks');
        const task = document.createElement('li');
        const taskTitle = document.createElement('span');
        taskTitle.textContent = title;
        const taskDescription = document.createElement('span');
        taskDescription.textContent = description;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Hapus';
        deleteButton.onclick = function () {
            task.remove();
        };

        const doneButton = document.createElement('button');
        doneButton.textContent = 'Selesai';
        doneButton.onclick = function () {
            taskTitle.classList.toggle('done');
            taskDescription.classList.toggle('done');
        };

        task.appendChild(taskTitle);
        task.appendChild(taskDescription);
        task.appendChild(deleteButton);
        task.appendChild(doneButton);
        taskList.appendChild(task);

        document.getElementById('taskTitle').value = '';
        document.getElementById('taskDescription').value = '';
    }
}