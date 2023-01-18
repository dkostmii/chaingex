import { cryptocurrencies } from "../../config/currencies.js";
import ElementNotFoundError from "../../errors/elementNotFound.js";
import { isCurrencyArray } from "../../fn/identity/currency/currencyArray.js";
import { isCurrency } from "../../fn/identity/currency/currency.js";
import { preCheckChange } from "../../fn/numbers/pre-check.js";
import { prependSignLiteral } from "../../fn/numbers/sign.js";
import { preCheck } from "../../fn/numbers/pre-check.js";
import createCryptoElement from './crypto-element.js';
import { getSign } from "../../fn/numbers/sign.js";

/**
 * @typedef {import('../types/currency.js').CurrencyPartial} CurrencyPartial
 */


/**
 * Adds all {@link cryptocurrencies} to `popular-currencies` section.
 */
export function addCryptocurrencies() {
  const popularCurrenciesContainer = document.querySelector('.popular-currencies__container');

  if (popularCurrenciesContainer === null) {
    throw new ElementNotFoundError('.popular-currencies__container');
  }

  const actionEl = popularCurrenciesContainer.querySelector('.popular-currencies__action');

  if (actionEl === null) {
    throw new ElementNotFoundError('.popular-currencies__action');
  }

  cryptocurrencies.forEach((crypto, id) => {
    const cryptoEl = createCryptoElement(crypto, id);
    popularCurrenciesContainer.insertBefore(cryptoEl, actionEl);
  });
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

/**
 * @typedef {import('../types/currency.js').Currency} Currency
 */

/**
 * 
 * @param {Currency[]} cryptos 
 */
export function fillCryptocurrencies(cryptos) {
  isCurrencyArray(cryptos).throw('cryptos');

  const cryptocurrencies = document.getElementsByClassName("popular-currencies__colum");

  [...cryptocurrencies].forEach(cryptoEl => {
    const priceEl = cryptoEl.querySelector('.colum__price');
    const changeEl = cryptoEl.querySelector('.colum__change');

    const crypto = cryptos.find(c => c.id === priceEl.id);

    isCurrency(crypto).throw('crypto');

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
}
