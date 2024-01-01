function addTask() {
    var taskInput = document.getElementById('newTask');
    var task = taskInput.value;

    if (task.trim() === '') {
        alert('Please enter a task');
        return;
    }

    var taskList = document.getElementById('taskList');
    var li = document.createElement('li');
    var taskContent = document.createElement('span');
    taskContent.classList.add('task-content');
    taskContent.textContent = task;

    var buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('buttons');

    var doneBtn = document.createElement('button');
    doneBtn.innerHTML = '<i class="fas fa-check"></i>';
    doneBtn.onclick = function() {
        li.classList.toggle('completed'); // Toggle the 'completed' class on the list item
    };

    var deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    deleteBtn.onclick = function() {
        taskList.removeChild(li);
    };

    buttonsDiv.appendChild(doneBtn);
    buttonsDiv.appendChild(deleteBtn);

    li.appendChild(taskContent);
    li.appendChild(buttonsDiv);
    taskList.appendChild(li);

    taskInput.value = '';
}

window.onload = function() {
    document.getElementById('newTask').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
};