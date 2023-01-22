import translate from "../../i18n/translate.js";
import { showFirstNCryptocurrencies } from "../../config/currencies.js";

/**
 * Indicates if all cryptocurrencies at *Home page* are displayed.
 * 
 * Is set to true after clicking `See all cryptocurrencies` button.
 */
let isShown = false;

/**
 * Class which indicates if currency element can be hidden.
 */
const hideableClass = "colum__hideable";



/**
 * Hides the currencies, so only {@link showFirstNCryptocurrencies} is shown.
 */
export function hideCurrencies() {
  if (isShown) {
    const button = document.getElementsByClassName("popular-currencies__button")[0];
    const currencyElements = document.getElementsByClassName(hideableClass);

    [...currencyElements].forEach(currencyEl => {
      currencyEl.classList.add("colum__hidden");
    })
    isShown = false;

    button.dataset.i18n = 'popular-currencies-button-see-all';

    /**
     * Language for See all / Hide all button.
     */
    const currentLanguage = window.detectUserLanguage();

    translate(button, currentLanguage);
  }
}

/**
 * Shows all currencies.
 */
export function showCurrencies() {
  if (!isShown) {
    const button = document.getElementsByClassName("popular-currencies__button")[0];
    const currencyElements = document.getElementsByClassName(hideableClass);

    [...currencyElements].forEach(currencyEl => {
      currencyEl.classList.remove("colum__hidden");
    });

    isShown = true;

    /**
     * Language for See all / Hide all button.
     */
    const currentLanguage = window.detectUserLanguage();

    button.dataset.i18n = 'popular-currencies-button-hide-all';
    translate(button, currentLanguage);
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
