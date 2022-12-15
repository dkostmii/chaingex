import YouReceiveView from '../views/you-receive.js';

import {
  throwIfNotACurrency,
  throwIfNotArrayOfCurrencies,
  throwIfNotAFunction,
  throwIfNotANumber,
  throwIfNotAString,
  UnknownEventError
} from './util.js';

import { minAmountUsdt } from '../../../config/usdt.js';

/**
 * @typedef {import('../../fetch-currencies.js').currency} currency
 */

/**
 * Represents a model for {@link YouReceiveView}.
 */
class YouReceive {
  /**
   * Creates a new instance of {@link YouReceive} model.
   * @param {currency} currency A {@link currency} to put in the model.
   * @param {number} amount The amount of the currency in USDT equivalent.
   * @param {currency[]} allCurrencies An array containing all {@link currency currencies}.
   */
  constructor(currency, amount, allCurrencies) {
    throwIfNotACurrency(currency);
    throwIfNotANumber(amount);
    throwIfNotArrayOfCurrencies(allCurrencies);

    this.crypto = currency;
    this.value = amount * this.crypto.price;
    this.cryptos = allCurrencies;

    this.currencyUpdateListeners = [];
    this.amountUpdateListeners = [];
    this.allCurrenciesUpdateListeners = [];
  }

  /**
   * Adds an event listener callback to model, to track the event of {@link event type} of the model
   * 
   * @param {'updateCurrency' | 'updateAmount' | 'updateAllCurrencies'} event An type of event to attach listener to.
   * @param {(e: any) => void} callback A callback accepting some data, if available.
   */
  addEventListener(event, callback) {
    throwIfNotAString(event);
    throwIfNotAFunction(callback);

    switch (event) {
      case 'updateCurrency':
        this.currencyUpdateListeners.push(callback);
        break;
      case 'updateAmount':
        this.amountUpdateListeners.push(callback);
        break;
      case 'updateAllCurrencies':
        this.allCurrenciesUpdateListeners.push(callback);
        break;
      default:
        throw new UnknownEventError(event);
    }
  }

  /**
   * Removes event listener from the model, if added previously.
   * 
   * If no event listener is found, the {@link Error} is thrown.
   * 
   * @param {'updateCurrency' | 'updateAmount' | 'updateAllCurrencies'} event An type of event to remove listener from.
   * @param {(e: any) => void} callback A callback provided in {@link addEventListener()}.
   */
  removeEventListener(event, callback) {
    throwIfNotAString(event);
    throwIfNotAFunction(callback);

    let targetArr = null;

    switch (event) {
      case 'updateCurrency':
        targetArr = this.currencyUpdateListeners;
        break;
      case 'updateAmount':
        targetArr = this.amountUpdateListeners;
        break;
      case 'updateAllCurrencies':
        targetArr = this.allCurrenciesUpdateListeners;
        break;
      default:
        throw new UnknownEventError(event);
    }

    if (!Array.isArray(targetArr)) {
      throw new Error('Unexpected error. No array of listeners matched.');
    }

    const idx = targetArr.indexOf(callback);

    if (idx === -1) {
      throw new Error('Model does not have provided listener added.');
    }

    targetArr.splice(idx, 1);
  }

  /**
   * Gets a current currency in the model.
   * 
   * @returns {currency} A currency object.
   */
  get currency() {
    return this.crypto;
  }

  /**
   * Gets an amount of cryptocurrency stored in the model.
   * 
   * @returns {number} A number representing an amount of cryptocurrency.
   */
  get amount() {
    return this.value / this.currency.price;
  }

  /**
   * Gets an amount of cryptocurrency stored in the model in USDT equivalent.
   * 
   * @returns {number} A number representing an amount of cryptocurrency in USDT equivalent.
   */
  get amountUsdt() {
    return this.value;
  }

  /**
   * Gets the minimum amount of cryptocurrency to receive.
   * 
   * @returns {number}
   */
  get minAmount() {
    return minAmountUsdt / this.currency.price;
  }

  /**
   * Gets an array of {@link currency}, except the current currency stored in the model.
   * 
   * @returns {currency[]}
   */
  get allCurrencies() {
    return this.cryptos.filter(c => c.id !== this.currency.id);
  }

  /**
   * Sets a current currency in the model.
   * 
   * @param {currency} currency A currency object.
   */
  set currency(currency) {
    throwIfNotACurrency(currency);
    
    if (currency.id !== this.crypto.id) {
      this.crypto = currency;

      this.currencyUpdateListeners.forEach(callback => callback(this.crypto));
    }
  }

  /**
   * Sets an amount of cryptocurrency stored in the model.
   * 
   * @param {number} amount A number representing an amount of cryptocurrency.
   */
  set amount(amount) {
    throwIfNotANumber(amount);

    if (this.amount !== amount) {
      this.value = amount * this.currency.price;
      this.amountUpdateListeners.forEach(callback => callback({
        amount: this.amount,
        amountUsdt: this.amountUsdt,
      }));
    }
  }

  /**
   * Sets an amount of cryptocurrency stored in the model in USDT equivalent.
   * 
   * @param {number} amountUsdt A number representing an amount of cryptocurrency in USDT equivalent.
   */
  set amountUsdt(amountUsdt) {
    throwIfNotANumber(amountUsdt);

    if (this.amountUsdt !== amountUsdt) {
      this.value = amountUsdt;
      this.amountUpdateListeners.forEach(callback => callback({
        amount: this.amount,
        amountUsdt: this.amountUsdt,
      }));
    }
  }

  /**
   * Sets an array of {@link currency}.
   * 
   * @param {currency[]} allCurrencies An array containing all cryptocurrencies for the model.
   */
  set allCurrencies(allCurrencies) {
    throwIfNotArrayOfCurrencies(allCurrencies);

    this.cryptos = allCurrencies;

    if (!this.cryptos.some(c => this.currency.id === c.id)) {
      // Fallback to default currency
      // if if current currency is not in the new array
      this.currency = this.cryptos[0];      
    }

    this.allCurrenciesUpdateListeners.forEach(callback => callback(this.cryptos));
  }
}

export default YouReceive;