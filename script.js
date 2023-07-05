const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const completedList = document.getElementById('completed-list');

taskForm.addEventListener('submit', addTask);

function addTask(event) {
    event.preventDefault();

const taskText = taskInput.value.trim();

if (taskText !== '') {
    const li = document.createElement('li');
    const taskSpan = document.createElement('span');
    const completedButton = document.createElement('button');
    const deleteButton = document.createElement('button');

    taskSpan.textContent = taskText;
    completedButton.textContent = 'Completed';
    deleteButton.textContent = 'Delete';

    completedButton.addEventListener('click', moveTaskToCompleted);
    deleteButton.addEventListener('click', deleteTask);

    li.appendChild(taskSpan);
    li.appendChild(completedButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = '';
    }
}

function moveTaskToCompleted() {
    const li = this.parentNode;
    const taskText = li.querySelector('span').textContent;

    const completedLi = document.createElement('li');
    const completedTaskSpan = document.createElement('span');
    const deleteButton = document.createElement('button');

    completedTaskSpan.textContent = taskText;
    deleteButton.textContent = 'Delete';

    deleteButton.addEventListener('click', deleteTask);

    completedLi.appendChild(completedTaskSpan);
    completedLi.appendChild(deleteButton);
    completedList.appendChild(completedLi);

    taskList.removeChild(li);
}

function deleteTask() {
    const li = this.parentNode;

    if (li.parentNode === taskList) {
        taskList.removeChild(li);
  } else if (li.parentNode === completedList) {
        completedList.removeChild(li);
  }
}
