import YouSendModel from './you-send.js';
import YouReceiveModel from './you-receive.js';

import YouSendReceiveView from '../views/send-receive.js';

import {
  throwIfNotArrayOfCurrencies,
  throwIfNotAFunction,
  throwIfNotANumber,
  throwIfNotAString,
  UnknownEventError
} from './util.js';

/**
 * @typedef {import('../../fetch-currencies.js').currency} currency
 */

/**
 * Represents a model for {@link YouSendReceiveView}.
 */
class YouSendReceive {
  /**
   * Creates a new instance of {@link YouSendReceive} model.
   * @param {YouSendModel} youSendModel An instance of {@link YouSendModel}. 
   * @param {YouReceiveModel} youReceiveModel An instance of {@link YouReceiveModel}.
   * @param {currency[]} allCurrencies An array of {@link currency currencies}.
   */
  constructor(youSendModel, youReceiveModel, allCurrencies) {
    if (!(youSendModel instanceof YouSendModel)) {
      throw new TypeError('Expected youSendModel to be YouSendModel');
    }

    if (!(youReceiveModel instanceof YouReceiveModel)) {
      throw new TypeError('Expected youReceiveModel to be YouReceiveModel');
    }

    throwIfNotArrayOfCurrencies(allCurrencies);

    this.youSendModel = youSendModel;
    this.youReceiveModel = youReceiveModel;

    this.cryptos = allCurrencies;

    this.allCurrenciesUpdateListeners = [];
    this.swapListeners = [];

    // Exclude currencies mutually
    // so it isn't possible to choose identical assets

    // Init
    this.updateAllCurrenciesDownstream();

    // Bind scope to listeners
    this.youSendModelUpdateCurrencyListener = this.youSendModelUpdateCurrencyListener.bind(this);
    this.youSendModelUpdateAmountListener = this.youSendModelUpdateAmountListener.bind(this);
    this.youReceiveModelUpdateCurrencyListener = this.youReceiveModelUpdateCurrencyListener.bind(this);
    this.youReceiveModelUpdateAmountListener = this.youReceiveModelUpdateAmountListener.bind(this);

    // Update (from child models)
    this.attachListeners();
  }

  /**
   * Attaches the listeners to inner models.
   */
  attachListeners() {
    this.youSendModel.addEventListener('updateCurrency', this.youSendModelUpdateCurrencyListener);
    this.youSendModel.addEventListener('updateAmount', this.youSendModelUpdateAmountListener);
    this.youReceiveModel.addEventListener('updateCurrency', this.youReceiveModelUpdateCurrencyListener);
    this.youReceiveModel.addEventListener('updateAmount', this.youReceiveModelUpdateAmountListener);
  }

  /**
   * Detaches the listeners from inner models.
   */
  detachListeners() {
    this.youSendModel.removeEventListener('updateCurrency', this.youSendModelUpdateCurrencyListener);
    this.youSendModel.removeEventListener('updateAmount', this.youSendModelUpdateAmountListener);
    this.youReceiveModel.removeEventListener('updateCurrency', this.youReceiveModelUpdateCurrencyListener);
    this.youReceiveModel.removeEventListener('updateAmount', this.youReceiveModelUpdateAmountListener);
  }

  // Listeners
  youSendModelUpdateCurrencyListener(currency) {
    this.youReceiveModel.allCurrencies = this.cryptos.filter(c => c.id !== currency.id);
  }

  youSendModelUpdateAmountListener({ amountUsdt }) {
    throwIfNotANumber(amountUsdt);

    if (this.youReceiveModel.amountUsdt !== amountUsdt) {
      this.youReceiveModel.amountUsdt = amountUsdt;
    }
  }

  youReceiveModelUpdateCurrencyListener(currency) {
    this.youSendModel.allCurrencies = this.cryptos.filter(c => c.id !== currency.id);
  }

  youReceiveModelUpdateAmountListener({ amountUsdt }) {
    throwIfNotANumber(amountUsdt);

    if (this.youSendModel.amountUsdt !== amountUsdt) {
      this.youSendModel.amountUsdt = amountUsdt;
    }
  }

  /**
   * Updates allCurrencies array in all child models.
   */
  updateAllCurrenciesDownstream() {
    this.youReceiveModel.allCurrencies = this.cryptos.filter(c => c.id !== this.youSendModel.currency.id);
    this.youSendModel.allCurrencies = this.cryptos.filter(c => c.id !== this.youReceiveModel.currency.id);
  }

  /**
   * Gets an array of {@link currency} stored in the model.
   * 
   * @returns {currency[]}
   */
  get allCurrencies() {
    return this.cryptos;
  }

  /**
   * Sets an array of {@link currency}.
   * 
   * @param {currency[]} allCurrencies An array containing all cryptocurrencies for the model.
   */
  set allCurrencies(allCurrencies) {
    throwIfNotArrayOfCurrencies(allCurrencies);

    this.cryptos = allCurrencies;

    this.updateAllCurrenciesDownstream();

    this.allCurrenciesUpdateListeners.forEach(callback => callback(this.cryptos));
  }

  /**
   * Adds an event listener callback to model, to track the event of {@link event type} of the model
   * 
   * @param {'swap' | 'updateAllCurrencies'} event An type of event to attach listener to.
   * @param {(e: any) => void} callback A callback accepting some data, if available.
   */
  addEventListener(event, callback) {
    throwIfNotAString(event);
    throwIfNotAFunction(callback);

    switch (event) {
      case 'swap':
        this.swapListeners.push(callback);
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
   * @param {'swap' | 'updateAllCurrencies'} event An type of event to remove listener from.
   * @param {(e: any) => void} callback A callback provided in {@link addEventListener()}.
   */
  removeEventListener(event, callback) {
    throwIfNotAString(event);
    throwIfNotAFunction(callback);

    let targetArr = null;

    switch (event) {
      case 'swap':
        targetArr = this.swapListeners;
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
   * Swaps the model state between inner {@link YouSendModel} and {@link YouReceiveModel} models.
   */
  swap() {
    const [sendCurrency, receiveCurrency] = [
      this.youSendModel.currency,
      this.youReceiveModel.currency
    ].reverse();

    const [sendAmountUsdt, receiveAmountUsdt] = [
      this.youSendModel.amountUsdt,
      this.youReceiveModel.amountUsdt
    ].reverse();

    this.detachListeners();

    this.youSendModel.currency = sendCurrency;
    this.youSendModel.amountUsdt = sendAmountUsdt;

    this.youReceiveModel.currency = receiveCurrency;
    this.youReceiveModel.amountUsdt = receiveAmountUsdt;

    this.attachListeners();

    this.swapListeners.forEach(callback =>
      callback([sendCurrency, receiveCurrency])
    );
  }
}

export default YouSendReceive;