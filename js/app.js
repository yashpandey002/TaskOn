'use strict';

////////////////////////
// Showing or hiding settings when clicked on icon
////////////////////////
const settingsIcon = document.querySelector('.list__settings__icon');
const listSettings = document.querySelector('.list__settings');

// const showOrHideSettings = function () {
//     listSettings.classList.toggle('show-settings');
// };

// const hideSettings = function () {
//     listSettings.classList.remove('show-settings');
// };

document.addEventListener('click', function (event) {
    if (
        event.target.closest('.list__settings') ||
        event.target === '.list__settings'
    ) {
        // showOrHideSettings();
        listSettings.classList.add('show-settings');
    } else {
        // hideSettings();
        listSettings.classList.remove('show-settings');
    }
});

////////////////////////
// Renaming a list
////////////////////////
const listRenameBtn = document.querySelector('.list__rename');
const listName = document.querySelector('.list__name');
const listNameInputElement = document.querySelector('.list__name__input');

const editListName = function () {
    listNameInputElement.value = listName.textContent;
    listName.style.display = 'none';
    listNameInputElement.style.display = 'block';
    listNameInputElement.select();

    const hideListNameInput = function () {
        listName.textContent = listNameInputElement.value;
        listNameInputElement.style.display = 'none';
        listName.style.display = 'block';
    };

    listNameInputElement.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === 'Escape') {
            hideListNameInput();
        }
    });
};

listRenameBtn.addEventListener('click', () => {
    showOrHideSettings();
    editListName();
});
listName.addEventListener('dblclick', editListName);

////////////////////////
// Add a task component
////////////////////////
const addTaskBtn = document.querySelector('.list__add-task');
const addTaskText = document.querySelector('.list__add-task__text');
const addTaskIcon = document.querySelector('.list__add-task__icon');
const addTaskInput = document.querySelector('.list__add-task__input');

const showTaskInput = function () {
    addTaskText.style.display = 'none';
    addTaskInput.placeholder = 'New task';
    addTaskInput.style.display = 'block';
    addTaskInput.focus();
};

const hideTaskInput = function () {
    addTaskText.style.display = 'block';
    addTaskInput.style.display = 'none';
};

const appendTask = function () {
    if (addTaskInput.value === '') {
        return;
    } else {
        const listTask = document.querySelector('.list__tasks');
        listTask.style.display = 'block';

        const taskContainer = document.querySelector(
            '.list__task__items-container'
        );

        const newTaskLi = document.createElement('li');
        newTaskLi.classList.add('list__task__item', 'flex');
        taskContainer.append(newTaskLi);

        const newTaskIconContainer = document.createElement('div');
        newTaskIconContainer.classList.add(
            'list__task__indicator-icon-box',
            'flex'
        );
        newTaskLi.append(newTaskIconContainer);
        const newTaskIcon = document.createElement('div');
        newTaskIcon.classList.add('list__task__indicator-icon');
        newTaskIconContainer.append(newTaskIcon);

        const newTaskName = document.createElement('div');
        newTaskName.classList.add('list__task__name');
        newTaskName.textContent = addTaskInput.value;
        newTaskLi.append(newTaskName);

        // Adding an event of taskDone to every icon and name of task
        taskDoneEvent(newTaskIcon, newTaskName, newTaskLi, taskContainer);

        const newTaskEditIconContainer = document.createElement('div');
        newTaskEditIconContainer.classList.add('list__edit-task-icon-box');
        newTaskLi.append(newTaskEditIconContainer);
        const newTaskEditIcon = document.createElement('img');
        newTaskEditIcon.src = './img/edit-task-icon.svg';
        newTaskEditIcon.classList.add('list__edit-task-icon');
        newTaskEditIconContainer.append(newTaskEditIcon);

        addTaskInput.value = '';
    }
};

const createNewTask = function () {
    showTaskInput();
    addTaskInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === 'Escape') {
            appendTask();
            hideTaskInput();
        }
    });
};
addTaskBtn.addEventListener('click', createNewTask);

////////////////////////
// Task done component
////////////////////////
function taskDoneEvent(icon, name, taskli, taskContainer) {
    icon.addEventListener('click', () => {
        name.classList.toggle('task-done__name');
        icon.classList.toggle('task-done__icon');

        const listTaskDone = document.querySelector('.list__task-done');
        listTaskDone.style.display = 'block';

        taskContainer.removeChild(taskli);
        listTaskDone.appendChild(taskli);
    });
}

// const addToCompletedTask = function () {};
