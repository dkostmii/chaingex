// Подключение функционала "Чертогов Фрилансера"
/*
import {
   isMobile
} from "./functions.js";
// Подключение списка активных модулей
import {
   flsModules
} from "./modules.js";
*/

import headerDesktop from '../dom-manipulations/header-desktop.js';

import { toggleMenu, autoCloseMenu } from '../dom-manipulations/header-menu.js';

import getCurrentPage from '../fn/currentPage.js';

import homePageLoad from '../pages/home.js';
import exchangerPageLoad from '../pages/exchanger/index.js';
import useLanguageDetect from '../i18n/detect.js';
useLanguageDetect();

headerDesktop();
autoCloseMenu();
Object.assign(window, {
  toggleMenu,
});

const page = getCurrentPage();


if (page === 'Exchanger') {
	exchangerPageLoad();

} else if (page === 'Home') {
	homePageLoad();
}

// Import i18n last, so the all DOM manipulations occurred.
import useI18n from '../i18n/index.js';
useI18n();