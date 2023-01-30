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
const viewIcon = document.querySelector('.header-nav__profile-box__view-icon');

const changeView = function () {
    const board = document.querySelector('.board');
    board.classList.toggle('flex');
    board.classList.toggle('board--vertical');

    const boardName = document.querySelector('.board__name');
    boardName.classList.toggle('board__name--vertical');

    const list = document.querySelector('.list');
    list.classList.toggle('list--vertical');
};

viewIcon.addEventListener('click', changeView);

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
        listTask.classList.remove('hide');

        const tasksContainer = document.querySelector(
            '.list__tasks__items-container'
        );

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

        const newTaskEditIconContainer = document.createElement('div');
        newTaskEditIconContainer.classList.add(
            'list__tasks__edit-task-icon-box',
            'hide'
        );
        newTaskLi.append(newTaskEditIconContainer);

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
