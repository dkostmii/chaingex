import $ from 'jquery';

// Mobile menu
let menuState = true;
const menuBodyNavElements = document.querySelectorAll('.menu__body, .nav-plus-button');
const iconMenu = document.querySelectorAll('.menu__icons > .icon-menu')[0];
const header = document.getElementsByClassName('header')[0];

/**
 * Shows the header menu.
 */
function enableMenu() {
  menuState = true;

  document.body.classList.add('lock-scroll');

  header.classList.add('header__menu-active');
  [...menuBodyNavElements].forEach(el => el.classList.remove('hidden'));
  iconMenu.classList.add('icon-menu__active');
}

/**
 * Hides the header menu.
 */
function disableMenu() {
  menuState = false;

  document.body.classList.remove('lock-scroll');

  header.classList.remove('header__menu-active');
  [...menuBodyNavElements].forEach(el => el.classList.add('hidden'));
  iconMenu.classList.remove('icon-menu__active');
}

/**
 * Toggles the header menu.
 * 
 * Is used strictly on mobile devices with hamburger menu button.
 * 
 * On desktop devices the menu **is always displayed**.
 */
export function toggleMenu() {
  if (menuState) {
    disableMenu();
  }
  else {
    enableMenu();
  }
}

/**
 * Closes the menu after link clicked (mobile)
 */
export function autoCloseMenu() {
  $('header a, footer a').on('click', () => {
    if (menuState) {
      disableMenu();
    }
  });
}
