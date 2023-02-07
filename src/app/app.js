'use strict';

// Show sidebar
document.addEventListener('click', (e) => {
    const sideMenuIcon = document.querySelector(
        '.header-nav__logo-box__menu-icon'
    );
    const sideMenu = document.querySelector('.side-menu');
    const sideMenuBg = document.querySelector('.side-menu__bg');

    if (e.target == sideMenuIcon) {
        sideMenu.classList.remove('hide');
    } else if (e.target == sideMenuBg) {
        sideMenu.classList.add('hide');
    }
});

// Verical/Horizontal view
const viewIcon = document.querySelector('.header-nav__profile-box__view-box');

viewIcon.addEventListener('click', () => {
    console.log(viewIcon);
    const board = document.querySelector('.board');
    const boardHeader = document.querySelector('.board__header');
    const boardMain = document.querySelector('.board__main');
    const listBox = document.querySelector('.list-box');
    const list = document.querySelector('.list');
    const newListBox = document.querySelector('.new__list-box');
    const newList = document.querySelector('.new__list');

    board.classList.toggle('board--vertical');
    boardHeader.classList.toggle('board__header--vertical');
    boardMain.classList.toggle('board__main--vertical');
    listBox.classList.toggle('list-box--vertical');
    list.classList.toggle('list--vertical');
    newListBox.classList.toggle('new__list-box--vertical');
    newList.classList.toggle('new__list--vertical');
});

// Show or Hide settings
document.addEventListener('click', (e) => {
    const listSettingsIcon = document.querySelector(
        '.list__header__settings-icon'
    );
    const listSettings = document.querySelector('.list__settings');

    if (e.target === listSettingsIcon) {
        listSettings.classList.toggle('show-settings');
    } else if (e.target === listSettings) {
        return;
    } else {
        listSettings.classList.remove('show-settings');
    }
});

// Rename list
const listRenamebtn = document.querySelector('.list__rename');
const listName = document.querySelector('.list__name');

const editListName = function () {
    const listNameInputElement = document.querySelector('.list__name__input');

    listNameInputElement.value = listName.textContent.trim();
    listName.classList.add('hide');
    listNameInputElement.classList.remove('hide');
    listNameInputElement.select();

    listNameInputElement.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === 'Escape') {
            listName.textContent = listNameInputElement.value;
            listNameInputElement.classList.add('hide');
            listName.classList.remove('hide');
        }
    });
};

listRenamebtn.addEventListener('click', editListName);
listName.addEventListener('dblclick', editListName);

// Set color
const listSetColorBtn = document.querySelector('.list__set-color');
const colorPalleteBG = document.querySelector('.list__set-color__pallete-bg');
const colorPallete = document.querySelector('.list__set-color__pallete');

colorPallete.addEventListener('input', () => {
    const list = document.querySelector('.list');
    list.style.borderLeftWidth = '1rem';
    list.style.borderLeftStyle = 'solid';
    list.style.borderLeftColor = colorPallete.value;
});

listSetColorBtn.addEventListener('click', () => {
    colorPalleteBG.classList.remove('hide');
});

document.addEventListener('click', (e) => {
    if (e.target === colorPalleteBG) {
        colorPalleteBG.classList.add('hide');
    }
});

// Add task
const addTaskText = document.querySelector('.list__add-task__text-box');
const taskInputEl = document.querySelector('.list__add-task__input');

const addTask = function () {
    if (taskInputEl.value === '') {
        return;
    } else {
        const listTask = document.querySelector('.list__tasks');
        const tasksContainer = document.querySelector(
            '.list__tasks__items-container'
        );
        if (tasksContainer.childElementCount === 0) {
            listTask.classList.remove('hide');
        }

        const newTaskLi = document.createElement('li');
        newTaskLi.classList.add('list__tasks__item', 'flex');
        tasksContainer.append(newTaskLi);

        const newTaskIconContainer = document.createElement('div');
        newTaskIconContainer.classList.add(
            'list__tasks__indicator-icon-box',
            'flex'
        );
        newTaskLi.append(newTaskIconContainer);

        const newTaskIcon = document.createElement('div');
        newTaskIcon.classList.add('list__tasks__indicator-icon');
        newTaskIconContainer.append(newTaskIcon);

        const newTaskName = document.createElement('div');
        newTaskName.classList.add('list__tasks__name');
        newTaskName.textContent = taskInputEl.value;
        newTaskLi.append(newTaskName);

        const newTaskRename = document.createElement('input');
        newTaskRename.classList.add('list__tasks__rename-input', 'hide');
        newTaskLi.append(newTaskRename);

        const newTaskEditIconContainer = document.createElement('div');
        newTaskEditIconContainer.classList.add(
            'list__tasks__edit-task-icon-box',
            'hide'
        );
        newTaskLi.append(newTaskEditIconContainer);

        newTaskEditIconContainer.addEventListener('click', () => {
            newTaskRename.classList.remove('hide');
            newTaskRename.focus();
            newTaskName.classList.add('hide');

            newTaskRename.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === 'Escape') {
                    if (newTaskRename.value === '') {
                        return;
                    } else {
                        newTaskName.textContent = newTaskRename.value;
                        newTaskRename.classList.add('hide');
                        newTaskName.classList.remove('hide');
                    }
                }
            });
        });

        taskDoneEvent(newTaskIcon, newTaskLi, newTaskEditIconContainer);

        taskInputEl.value = '';
    }
};

taskInputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === 'Escape') {
        if (taskInputEl.value === '') {
            addTaskText.classList.remove('hide');
            taskInputEl.classList.add('hide');
        } else {
            addTask();
        }
    }
});

document.addEventListener('click', (e) => {
    const element = e.target;
    if (element.closest('.list__add-task')) {
        addTaskText.classList.add('hide');
        taskInputEl.classList.remove('hide');
        taskInputEl.focus();
    } else {
        if (taskInputEl.value != '') {
            addTask();
        }
        addTaskText.classList.remove('hide');
        taskInputEl.classList.add('hide');
        taskInputEl.value = '';
    }
});

// Task done component
function taskDoneEvent(doneIcon, taskLi, deleteIcon) {
    doneIcon.addEventListener('click', () => {
        const listTask = document.querySelector('.list__tasks');
        const tasksContainer = document.querySelector(
            '.list__tasks__items-container'
        );
        const taskDone = document.querySelector('.list__task-done');
        const taskDoneContainer = document.querySelector(
            '.list__task-done__items-container'
        );

        if (taskDoneContainer.childElementCount === 0) {
            taskDone.classList.remove('hide');
        }
        taskDoneContainer.appendChild(taskLi);

        if (tasksContainer.childElementCount === 0) {
            listTask.classList.add('hide');
        }

        compeltedTaskCount();
        deleteIcon.addEventListener('click', () => {
            taskDoneContainer.removeChild(taskLi);
            compeltedTaskCount();
            if (taskDoneContainer.childElementCount === 0) {
                taskDone.classList.add('hide');
            }
        });
        taskRestore(doneIcon, taskLi);
    });
}

function taskRestore(icon, taskLi, deleteIcon) {
    icon.addEventListener('click', () => {
        const listTask = document.querySelector('.list__tasks');
        const tasksContainer = document.querySelector(
            '.list__tasks__items-container'
        );
        const taskDone = document.querySelector('.list__task-done');
        const taskDoneContainer = document.querySelector(
            '.list__task-done__items-container'
        );

        listTask.classList.remove('hide');
        tasksContainer.appendChild(taskLi);
        if (taskDoneContainer.childElementCount === 0) {
            taskDone.classList.add('hide');
        }

        compeltedTaskCount();
        taskDoneEvent(icon, taskLi);
    });
}

function compeltedTaskCount() {
    const taskDoneContainer = document.querySelector(
        '.list__task-done__items-container'
    );
    const compltedTaskEl = document.querySelector('.completed__task-count');
    compltedTaskEl.textContent = `(${taskDoneContainer.childElementCount})`;
}

const taskDoneDropDownIcon = document.querySelector(
    '.list__task-done__dropdown-icon'
);
taskDoneDropDownIcon.addEventListener('click', () => {
    const taskDoneContainer = document.querySelector(
        '.list__task-done__items-container'
    );
    taskDoneDropDownIcon.classList.toggle('close');
    if (taskDoneDropDownIcon.classList.contains('close')) {
        taskDoneDropDownIcon.src = './assets/img/up-arrow.svg';
    } else {
        taskDoneDropDownIcon.src = './assets/img/down-arrow.svg';
    }
    taskDoneContainer.classList.toggle('hide');
});

// Dark Mode
const darkModeBtn = document.querySelector(
    '.header-nav__profile-box__dark-mode-box'
);

darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
