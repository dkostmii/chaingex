import { throwIfNotACurrency, throwIfNotPairOfCurrencies, throwIfNotAString } from "../model/util.js";
import YouSendModel from '../model/you-send.js';
import YouReceiveModel from "../model/you-receive.js";

import { minAmountUsdt } from "../../../config/usdt.js";

import $ from 'jquery';

/**
 * @typedef {import('../../fetch-currencies.js').currency} currencyData
 */

/**
 * @typedef {import('../model/util.js').currencyDataPair} currencyDataPair
 */

/**
 * The identifier of **Exchanger** `<form>` element from `exchanger.html` page.
 */
export const exFormId = '#ex-form';

/**
 * A separator used to separate some data, for example currency pair names.
 * 
 * For example, if separator is ` | `
 * 
 * then resulting string is `USDT | Bitcoin`.
 * 
 * @constant separator
 * @type {string}
 */
export const separator = ' | ';

/**
 * Encodes a HTML characters in {@link text}, so the {@link text} is safe to append inside HTML element as plain text.
 * @param {string} text Unencoded HTML text.
 * @returns A string containing encoded text.
 */
export function htmlEncode(text) {
  throwIfNotAString(text);

  return $('<div />').text(text).html();
}

/**
 * Decodes a HTML encoded characters in {@link html}, so the {@link html} becomes dangerous to append inside HTML element as plain text.
 * 
 * @param {string} html Encoded HTML text.
 * @returns A string containing unencoded HTML text.
 */
export function htmlDecode(html) {
  throwIfNotAString(html);

  return $('<div />').html(html).text();
}

/**
 * Get a string containing currency pair names separated by {@link separator}.
 * 
 * @param {currencyDataPair} currencyPair A pair of {@link currencyData currencies}.
 * @returns A string containing currency pair names separated by {@link separator}.
 */
export function getCurrencyPairName(currencyPair) {
  throwIfNotPairOfCurrencies(currencyPair);

  const [sendCurrency, receiveCurrency] = currencyPair;

  return `${sendCurrency.name}${separator}${receiveCurrency.name}`;
}

/**
 * Get a string containing human-readable message abount minimum amount of each of {@link currencyPair}.
 * 
 * @param {currencyDataPair} currencyPair A pair of {@link currencyData currencies}.
 * @returns A string containing human-readable message abount minimum amount of each of {@link currencyPair}.
 */
export function getCurrencyAttention(currencyPair) {
  throwIfNotPairOfCurrencies(currencyPair);

  const [ sendCurrency, receiveCurrency ] = currencyPair;

  const { short: sendShort, price: sendPrice } = sendCurrency;
  const { short: receiveShort, price: receivePrice } = receiveCurrency;

  return `Minimum ${preCheckInput(minAmountUsdt / sendPrice)} ${sendShort} (${preCheckInput(minAmountUsdt / receivePrice)} ${receiveShort})`;
}

/**
 * Get a summary text for exchange operation.
 * 
 * @param {YouSendModel} youSendModel A model containing information about currency to send.
 * @param {YouReceiveModel} youReceiveModel A model containing information about currency to receive.
 * @returns A string containing summary text.
 */
export function getFieldText(youSendModel, youReceiveModel) {
  if (!(youSendModel instanceof YouSendModel)) {
    throw new TypeError('Expected youSendModel to be YouSendModel.');
  }

  if (!(youReceiveModel instanceof YouReceiveModel)) {
    throw new TypeError('Expected youReceiveModel to be YouReceiveModel.');
  }
  
  const { currency: youSendCrypto, amount: youSendAmount } = youSendModel;
  const { currency: youReceiveCrypto, amount: youReceiveAmount } = youReceiveModel;

  return `Send <span >${preCheckInput(youSendAmount)} ${youSendCrypto.short}</span> to this address/card and we will send you <span>${preCheckInput(youReceiveAmount)} ${youReceiveCrypto.short}.</span> Then click the button <span>“I send”</span>`
}

/**
 * This error is thrown, when there is not element found in DOM tree.
 */
export class ElementNotFoundError extends Error {

  /**
   * Creates a new instance of {@link ElementNotFoundError}
   * @param {string} elementName Could be a class, id, or other relevant element property, which identifies the element.
   */
  constructor(elementName) {
    super(`Unable to locate ${elementName} element.`);
    this.name = 'Element Not Found Error';
  }
}

/**
 * Get a string containing {@link currencyData.name} and {@link currencyData.short} separated by {@link separator}.
 * 
 * @param {currencyData} currency A currency data object.
 * @returns A string containing {@link currencyData.name} and {@link currencyData.short} separated by {@link separator}.
 */
export function getCurrencyTitle(currency) {
  throwIfNotACurrency(currency);

  return `${currency.name}${separator}${currency.short}`;
}

/**
 * Get a string containing {@link YouSendModel.amount} and {@link currencyData.short} separated by {@link separator}.
 * 
 * @param {YouSendModel | YouReceiveModel} model A model containing information about currency.
 * @returns A string containing {@link YouSendModel.amount} and {@link currencyData.short} separated by {@link separator}.
 */
export function getCurrencyResultValue(model) {
  if (!(model instanceof YouSendModel || model instanceof YouReceiveModel)) {
    throw new TypeError('Expected model to be either YouSendModel or YouReceiveModel.');
  }

  return `${preCheckInput(model.amount)}${separator}${model.currency.short}`;
}

/**
 * Removes repeating occurrences of {@link char} in {@link text}.
 * @param {string} text A string with text to be processed.
 * @param {string} char A character to search occurrences of.
 * 
 * Must be precisely single character (`char.length === 1`).
 * 
 * Only the first character is keeped, all next characters are removed.
 * 
 * @returns {string} A string containing at most one {@link char} character, which is the first occurrence.
 */
function replaceMultipleOfCharWithFirst(text, char) {
  if (!(typeof text === 'string' || text instanceof String)) {
    throw new TypeError('Expected text to be a string.');
  }

  if (!(typeof char === 'string' || char instanceof String)) {
    throw new TypeError('Expected char to be a string.');
  }

  if (char.length !== 1) {
    throw new Error('Expected char to have length === 1');
  }

  let count = 0;
  let result = [];

  for (let i = 0; i < text.length; i += 1) {
    if (text[i] === char) {
      count += 1;

      if (count === 1) {
        result.push(text[i]);
      }
    } else {
      result.push(text[i]);
    }
  }

  return result.join('');
}

/**
 * Sanitizes the `<input type="number">` element value to contain only digits `[0-9]` and period `.`
 * @param {HTMLInputElement} input A input to be sanitized. Must have `type="number"` or it will not be affected.
 */
export function sanitizeNumberInput(input) {
  if (!(input instanceof HTMLInputElement)) {
    throw new TypeError('Expected input to be HTMLInputElement');
  }

  if (input.type === 'number') {
    const comman = /,/g;
    const pattern = /[^0-9\.]/g;
  
    input.value = input.value.replace(comman, '.');
    input.value = input.value.replace(pattern, '');
    input.value = replaceMultipleOfCharWithFirst(input.value, '.');
  }
}

/**
 * Replaces all trailing periods `.` in the input with `.0` or `0.`.
 * 
 * For example: `.123456` will become `0.123456` and `123456.` will become `123456.0`.
 * 
 * @param {HTMLInputElement} input A input to be processed. Must have `type="number"` or it will not be affected.
 */
export function replaceTrailingPeriods(input) {
  if (!(input instanceof HTMLInputElement)) {
    throw new TypeError('Expected input to be HTMLInputElement');
  }

  if (input.type === 'number') {
    const leadingPeriod = /^\./g;
    input.value = input.value.replace(leadingPeriod, '0.');
  
    const trailingPeriod = /\.$/g;
    input.value = input.value.replace(trailingPeriod, '.0');
  }
}

/**
 * Add a `0` char if the input is empty.
 * 
 * @param {HTMLInputElement} input A input to be processed. Must have `type="number"` or it will not be affected.
 */
export function emptyNumberInputCheck(input) {
  if (!(input instanceof HTMLInputElement)) {
    throw new TypeError('Expected input to be HTMLInputElement');
  }

  if (input.type === 'number') {
    input.type = 'text';

    if (input.value.length === 0) {
      input.value = '0';
    }
  
    input.type = 'number';
  }
}

/**
 * `preCheckInput()` function for the **Exchanger** views. Do not confuse with `preCheck()` from `fetch-currencies.js`, which is for **Popular currencies** section at **Home page**.
 * @param {Number | string} value A number to pre check before displaying.
 * @returns {string} A string containing formatted number.
 */
export function preCheckInput(x) {
  if (typeof x === 'string' || x instanceof String) {
    x = parseFloat(x);
  }

  const preCheckLength = 8;

  const whole = Math.floor(x);
  const fr = x - whole;
  x = fr + whole;

  if (x > 0 && (x.toString().length > preCheckLength + 1) || (whole === 0 && fr < 1e-4)) return x.toFixed(preCheckLength);

  return x.toString();
}