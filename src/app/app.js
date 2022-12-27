'use strict';

// Show sidebar
const sideMenuIcon = document.querySelector('.header-nav__logo-box__menu-icon');

document.addEventListener('click', (e) => {
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

viewIcon.addEventListener('click', () => {
    const board = document.querySelector('.board');
    board.classList.toggle('flex');
    board.classList.toggle('board--vertical');

    const boardName = document.querySelector('.board__name');
    boardName.classList.toggle('board__name--vertical');

    const list = document.querySelector('.list');
    list.classList.toggle('list--vertical');
});

// Show settings
const listSettingsIcon = document.querySelector(
    '.list__header__settings-icon-box'
);

const listSettings = document.querySelector('.list__settings');

listSettingsIcon.addEventListener('click', () => {
    listSettings.classList.toggle('show-settings');
    console.log('hello world');
});

// Rename list
const listRenamebtn = document.querySelector('.list__rename');

listRenamebtn.addEventListener('click', () => {
    const listNameInputElement = document.querySelector('.list__name__input');
    const listName = document.querySelector('.list__name');

    listNameInputElement.value = listName.textContent.trim();
    listName.classList.add('hide');
    listNameInputElement.classList.remove('hide');
    listNameInputElement.select();
});
