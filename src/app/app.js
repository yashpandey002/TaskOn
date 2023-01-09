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
    list.style.borderColor = colorPallete.value;
});

listSetColorBtn.addEventListener('click', () => {
    colorPalleteBG.classList.remove('hide');
});

document.addEventListener('click', (e) => {
    if (e.target === colorPalleteBG) {
        colorPalleteBG.classList.add('hide');
    }
});
