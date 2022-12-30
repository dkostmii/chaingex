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

import $ from "jquery";

import { ElementNotFoundError } from "./exchanger/views/util.js";
import { throwIfNotACurrency } from "./exchanger/model/util.js";

import { addCryptocurrencies } from "./popular-cryptocurrencies.js";
import { loadCryptos, preCheck } from './fetch-currencies.js';
import storageConfig from "../config/storage.js";

function preCheckChange(num) {
  return num.toFixed(2);
}

function getSign(num) {
  return num === 0 ? num : parseInt((num / Math.abs(num)).toFixed(0));
}

function mapSign(num) {
  switch (getSign(num)) {
    case 1:
      return '+';
    case -1:
      return '-';

    default:
      return '';
  }
}

function mapSignStyleClass(num) {
  switch (getSign(num)) {
    case 1:
      return 'change__positive';
    case -1:
      return 'change__negative';
    default:
      return '';
  }
}

function prependSignLiteral(num) {
  return `${mapSign(num)}${preCheckChange(num).replace(/-/g, '')}`
}

export function hideSpinner() {
  const preloader = document.querySelector('.preloader');

  document.body.classList.remove('lock-scroll');
  preloader.classList.remove('show');

  preloader.remove();
}

export function homePageLoad() {
  addCryptocurrencies();
  const cryptocurrencies = document.getElementsByClassName("popular-currencies__colum");

  // Fill cryptocurrency prices at Home page
  loadCryptos()
    .then(cryptos => {
      [...cryptocurrencies].forEach(cryptoEl => {
        const priceEl = cryptoEl.querySelector('.colum__price');
        const changeEl = cryptoEl.querySelector('.colum__change');

        const crypto = cryptos.find(c => c.id === priceEl.id);

        throwIfNotACurrency(crypto);

        const priceStr = preCheck(crypto.price);
        const changeValue = parseFloat(preCheckChange(crypto.change));
        const changeStr = prependSignLiteral(changeValue);

        // Mobile price label .cryptocurrency__price
        const cryptocurrencyMobileEl = document.createElement('div');
        cryptocurrencyMobileEl.className = 'cryptocurrency__price';
        cryptocurrencyMobileEl.innerHTML = priceStr;

        const cryptoNameEl = cryptoEl.querySelector('.cryptocurrency__name');
        cryptoNameEl.parentElement.removeChild(cryptoNameEl);

        const cryptoNamePrice = document.createElement('div');
        cryptoNamePrice.classList.add('cryptocurrency__nameprice');

        cryptoNamePrice.append(cryptoNameEl, cryptocurrencyMobileEl);
        
        const cryptoLeftEl = cryptoEl.querySelector('.cryptocurrency__left');
        cryptoLeftEl.appendChild(cryptoNamePrice);

        // Tablet and desktop price label
        priceEl.innerHTML = priceStr;

        changeEl.innerHTML = changeStr;
        
        const changeElSignClass = mapSignStyleClass(changeValue);

        if (changeElSignClass) {
          changeEl.classList.add(changeElSignClass);
        }
      });

      hideSpinner();
    })
    .catch(e => {
      throw new Error(`Unable to load cryptocurrency data.\nUnderlying error:\n${e}`);
    });
}

/**
 * Indicates if all cryptocurrencies at *Home page* are displayed.
 * 
 * Is set to true after clicking `See all cryptocurrencies` button.
 */
let isShown = false;

const hideableClass = "colum__hideable";

export function hideCurrencies() {
  if (isShown) {
    const button = document.getElementsByClassName("popular-currencies__button")[0];
    const currencyElements = document.getElementsByClassName(hideableClass);

    [...currencyElements].forEach(currencyEl => {
      currencyEl.classList.add("colum__hidden");
    })
    isShown = false;
    button.textContent = "See all cryptocurrencies"
  }
}

export function showCurrencies() {
  if (!isShown) {
    const button = document.getElementsByClassName("popular-currencies__button")[0];
    const currencyElements = document.getElementsByClassName(hideableClass);

    [...currencyElements].forEach(currencyEl => {
      currencyEl.classList.remove("colum__hidden");
    });

    isShown = true;
    button.textContent = "Hide all currencies";
  }
}

/**
 * Shows or hides more cryptocurrencies at *Home page*
 * 
 * Is called after clicking `See all cryptocurrencies` button.
 */
export function toggleCurrencies() {
  if (isShown) {
    hideCurrencies();
    return;
  }

  showCurrencies();
}

/**
 * Maps string keywords to currency item in **Popular currencies** section at **Home** page.
 * 
 * @typedef {Object} currencyElSearchMap
 * @property {string} keywords Contains cryptocurrency name and short name, separated with space.
 * @property {HTMLElement} currencyEl Contains an element which is the row of **Popular currencies** section
 * and has info about cryptocurrency with given name and short name in `keywords`.
 */

/**
 * Prints console.warn() message if `1 rem` (a computed `font-size` CSS property of `<html>` element) is not precisely `16px`.
 */
function remCheck() {
  const html = document.documentElement;

  const { fontSize } = window.getComputedStyle(html);

  if (fontSize !== '16px') {
    console.warn(`Warning! 1 rem !== 16px. Got: ${fontSize}`);
  }
}

window.addEventListener('load', () => {
  remCheck();
});

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

  header.classList.add('header__menu-active');
  [...menuBodyNavElements].forEach(el => el.classList.remove('hidden'));
  iconMenu.classList.add('icon-menu__active');
}

/**
 * Hides the header menu.
 */
function disableMenu() {
  menuState = false;

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

window.addEventListener('resize', () => {
  remCheck();
});

/**
 * Injects the redirection link (./exchanger.html) into all Change, Sell and Buy buttons.
 * 
 * This function also adds information about cryptocurrency, where the Change, Sell or Buy button clicked
 * into browser `localStorage`, so **Exchanger** page can select required crypto for the user.
 */
export function changeSellBuyToExchangeRedirect() {
  const { localStorage } = window;

  const { sendCrypto, receiveCrypto } = storageConfig.tokenNames;

  $('.button__change, .button__sell')
    .each((_, el) => {
      $(el).on('click', () => {
        const columnPriceEl = el.parentElement.parentElement.querySelector('.colum__price');

        if (!(columnPriceEl instanceof Element)) {
          throw new ElementNotFoundError('.colum__price');
        }

        const cryptoId = columnPriceEl.id;

        localStorage.setItem(sendCrypto, cryptoId);
      });

      $(el).attr('href', './exchanger.html');
    });

  $('.button__buy')
    .each((_, el) => {
      $(el).on('click', () => {
        const columnPriceEl = el.parentElement.parentElement.querySelector('.colum__price');

        if (!(columnPriceEl instanceof Element)) {
          throw new ElementNotFoundError('.colum__price');
        }

        const cryptoId = columnPriceEl.id;
   
        localStorage.setItem(receiveCrypto, cryptoId);
      });
      $(el).attr('href', './exchanger.html');
    });
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
