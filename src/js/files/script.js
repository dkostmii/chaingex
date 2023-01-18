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
import fonticons from '../fonticons/index.js';

import { toggleMenu, autoCloseMenu } from '../dom-manipulations/header-menu.js';
import { showCurrencies, hideCurrencies } from '../dom-manipulations/popular-cryptocurrencies/hide-button.js';

import getCurrentPage from '../fn/currentPage.js';

import homePageLoad from '../pages/home.js';
import exchangerPageLoad from '../pages/exchanger.js';

headerDesktop();
autoCloseMenu();

const page = getCurrentPage();

if (page === 'Exchanger') {
	exchangerPageLoad();
} else if (page === 'Home') {
	homePageLoad();
  Object.assign(window, {
    toggleMenu,
  });

	// Fonticons on Home page
	fonticons(showCurrencies, hideCurrencies)
		.scale(0.9);
}

// Import i18n last, so the all DOM manipulations occurred.
import useI18n from '../i18n/index.js';
useI18n();