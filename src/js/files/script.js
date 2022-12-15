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
import { throwIfNotACurrency, isArrayOfCurrencies } from "./exchanger/model/util.js";

import { loadCryptos, cryptocurrencies as cryptos, preCheck } from './fetch-currencies.js';
import storageConfig from "../config/storage.js";

const cryptocurrencies = document.getElementsByClassName("colum__price");

const cIds = cryptos.map(c => c.id);

// Integrity check
[...cryptocurrencies].forEach(cryptoEl => {
  if (!cIds.includes(cryptoEl.id)) {
    throw new Error(`Unknown cryptocurrency: ${cryptoEl.id}. Add it to cryptocurrencies array in fetch-currencies.js.`);
  }
});

// Fill cryptocurrency prices at Home page
(async () => {
  const cryptos = await loadCryptos();

  if (!isArrayOfCurrencies(cryptos)) {
    throw new Error(`Unable to load cryptocurrency data.\nUnderlying error:\n${cryptos}`);
  }

  [...cryptocurrencies].forEach(cryptocurrency => {
    const crypto = cryptos.filter(c => c.id === cryptocurrency.id)[0];

    throwIfNotACurrency(crypto);

    const priceStr = preCheck(crypto.price);

    // Mobile price label .cryptocurrency__price
    const cryptocurrencyMobileEl = document.createElement('div');
    cryptocurrencyMobileEl.className = 'cryptocurrency__price';
    cryptocurrencyMobileEl.innerHTML = priceStr;

    cryptocurrency.previousElementSibling.appendChild(cryptocurrencyMobileEl);

    // Tablet and desktop price label
    cryptocurrency.innerHTML = priceStr;
  });
})();

/**
 * Indicates if all cryptocurrencies at *Home page* are displayed.
 * 
 * Is set to true after clicking `See all cryptocurrencies` button.
 */
let isShown = false;

const hiddenClass = "colum__hidden";
const currencyElements = Array.from(document.getElementsByClassName(hiddenClass));

/**
 * Shows or hides more cryptocurrencies at *Home page*
 * 
 * Is called after clicking `See all cryptocurrencies` button.
 */
export function toggleCurrencies() {
  const input = document.getElementsByClassName("popular-currencies__search")[0];

  input.value = "";
  findCurrency();

  const button = document.getElementsByClassName("popular-currencies__button")[0];

  if (isShown) {
    currencyElements.forEach(currencyEl => {
      if (!currencyEl.classList.contains(hiddenClass)) {
        currencyEl.classList.add(hiddenClass);
      }
    })
    isShown = false;
    button.textContent = "See all cryptocurrencies"

  } else {
    currencyElements.forEach(currencyEl => {
      if (currencyEl.classList.contains(hiddenClass)) {
        currencyEl.classList.remove(hiddenClass);
      }
    });

    isShown = true;
    button.textContent = "Hide all currencies";
  }
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
 * Search cache to be used in findCurrency().
 * 
 * It is an Array of {@link currencyElSearchMap}.
 *
 * @constant searchCache
 * @type {currencyElSearchMap[]}
 */
const searchCache = [];

/**
 * Finds the currency in **Popular currencies** section at **Home** page.
 * 
 * Is called after `.popular-currencies__search` input value changed.
 */
export function findCurrency() {
  const input = document.getElementsByClassName("popular-currencies__search")[0];
   
  [...searchCache].forEach(({ currencyEl }) => {
    currencyEl.style.removeProperty("display");
  });

  if (input.value.replace(" ", "") === "") {
    return;
  }

  [...searchCache].forEach(({ keywords, currencyEl }) => {
    if (!keywords.includes(input.value.toLowerCase())) {
      currencyEl.style.display = "none";
    } else {
      currencyEl.style.removeProperty('display');
    }
  });
}

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

  // Create the search cache here
  const cryptocurrencyNames = Array.from(document.getElementsByClassName("cryptocurrency__name"));
  const cryptocurrencyShots = Array.from(document.getElementsByClassName("cryptocurrency__short"));

  if (cryptocurrencyNames.length !== cryptocurrencyShots.length) {
    throw new Error(`Expected cryptocurrencyNames.length and cryptocurrencyShots.length to be equal. Got cryptocurrencyNames.length = ${cryptocurrenciesNames.length} and cryptocurrencyShots.length = ${cryptocurrencyShots.length}.`)
  }

  for (let i = 0; i < cryptocurrencyNames.length; i += 1) {
    let keywords = cryptocurrencyNames[i].innerHTML.toLowerCase();
    keywords += " ";
    keywords += cryptocurrencyShots[i].innerHTML.toLowerCase();

    if (cryptocurrencyNames[i].parentElement.parentElement !== cryptocurrencyShots[i].parentElement.parentElement) {
      throw new Error('Expected cryptocurrencyNames[i] and cryptocurrencyShots[i] to be on same level.')
    }

    const currencyEl = cryptocurrencyNames[i].parentElement.parentElement;

    searchCache.push({
      keywords,
      currencyEl,
    });
  }
});

// Mobile menu

let menuState = true;
let desktop = false;
const menuBodyNav = document.getElementsByClassName('menu__body')[0];
const iconMenu = document.querySelectorAll('.menu__icons > .icon-menu')[0];
const header = document.getElementsByClassName('header')[0];

/**
 * Shows the header menu.
 */
function enableMenu() {
  menuState = true;

  if (!desktop) {
    header.style.position = 'fixed';
    header.style.background = 'rgba(2, 0, 21, 1)';
  }

  menuBodyNav.style.removeProperty('display');
  iconMenu.classList.add('icon-menu__active');
}

/**
 * Hides the header menu.
 */
function disableMenu() {
  menuState = false;

  header.style.removeProperty('position');
  header.style.removeProperty('background');
  menuBodyNav.style.display = 'none';

  if (iconMenu.classList.contains('icon-menu__active')) {
    iconMenu.classList.remove('icon-menu__active');
  }
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

/** Indicates if the search field is displayed on mobile version.
 * 
 * See {@link enableSearch()} function.
 */
let searchEnabled = false;

/**
 * Enables the search field on mobile devices.
 * 
 * There is search button on mobile version, clicking which call {@link enableSearch()}, so
 * the search field is displayed.
 * 
 * **It's not possible to hide the search in current implementation.**
 */
export function enableSearch() {
  const searchInput = document.getElementsByClassName("popular-currencies__search")[0];
  const searchButton = document.getElementsByClassName("button__search")[0];
  const searchIconGroup = document.getElementsByClassName("search-icon")[0];

  const popularCurrenciesTop = document.getElementsByClassName("popular-currencies__top")[0];

  searchButton.style.display = "none";
  searchInput.style.display = "block";

  Object.assign(popularCurrenciesTop.style, {
    flexDirection: "column",
    gap: '2rem',
    alignItems: 'flex-start',
  });

  if (!searchIconGroup.classList.contains("search-icon__mobile-active")) {
    searchIconGroup.classList.add("search-icon__mobile-active");
  }
  searchEnabled = true;

  window.addEventListener('resize', () => {
    if (searchEnabled) {
      if (window.matchMedia('(min-width: 769px)')) {
        searchButton.style.removeProperty('display');
        searchInput.style.removeProperty('display');
        popularCurrenciesTop.style.removeProperty('flex-direction');
        popularCurrenciesTop.style.removeProperty('gap');
        popularCurrenciesTop.style.removeProperty('align-items');

        if (searchIconGroup.classList.contains("search-icon__mobile-active")) {
          searchIconGroup.classList.remove("search-icon__mobile-active");
        }

        searchEnabled = false;
      }
    }
  });
}

window.addEventListener('load', () => {
  if (window.matchMedia('(max-width: 767.98px)').matches) {
    desktop = false;
    disableMenu();
  } else if (window.matchMedia('(min-width: 767.98px)').matches) {
    desktop = true;
    enableMenu();
  }
});

window.addEventListener('resize', () => {
  remCheck();

  if (window.matchMedia('(max-width: 767.98px)').matches) {
    desktop = false;
    disableMenu();
  } else if (window.matchMedia('(min-width: 767.98px)').matches) {
    desktop = true;
    enableMenu();
  }
});

// support button stopper at footer
const supportBlock = document.querySelector(".support-block");

if (supportBlock instanceof HTMLElement) {
  const supportButton = supportBlock.querySelectorAll(".support-block > .support__button")[0]

  if (supportButton instanceof HTMLElement) {
    const popularCurrenciesAction = document.querySelector('.popular-currencies__action');

    window.addEventListener('scroll', () => {
      const { scrollTop } = document.documentElement;

      let { top: supportBlockTop } = supportBlock.getBoundingClientRect();
      supportBlockTop += scrollTop;

      let { top: maxPos } = popularCurrenciesAction.getBoundingClientRect();
      maxPos += scrollTop - supportBlockTop;

      if (scrollTop > maxPos) {
        supportButton.style.position = 'absolute';
        supportButton.style.top = `${maxPos}px`;
      }
      else {
        supportButton.style.removeProperty('position');
        supportButton.style.removeProperty('top');
      }
    });
  }
}

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
    if (!desktop && menuState) {
      disableMenu();
    }
  });
}
