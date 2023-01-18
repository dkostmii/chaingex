import { isCurrencyPartialArray } from "../fn/identity/currency/index.js";
import { isObject, isString } from "../fn/identity/index.js";

export function validateCryptosParam(cryptos) {
  const isDefined = isCurrencyPartialArray(cryptos).value;
  const isValid = (
    typeof cryptos === 'undefined'
    || cryptos === null
    || isDefined
  );

  return { isValid, isDefined };
}

/**
 * @typedef {Object} responseValidator
 * @property {(response) => boolean} isValid
 * @property {string} notValidMessage
 */

/**
 * @constant cryptoPriceValidator
 * @type {responseValidator}
 */
export const cryptoPriceValidator = {
  /**
   * 
   * @param {any} responseDataItem 
   * @returns {boolean}
   */
  isValid: (response) => (
    Array.isArray(response) &&
    response.every(responseDataItem => (
      isObject(responseDataItem)
        .withProperty('symbol', symbol => isString(symbol).nonEmpty())
        .withProperty('price', price => isString(price).nonEmpty())
        .value
    ))
  ),
  notValidMessage: 'Expected array of { symbol: string, price: string } objects.',
}

/**
 * @constant cryptoPriceChangeValidator
 * @type {responseValidator}
 */
export const cryptoPriceChangeValidator = {
  /**
   * 
   * @param {any} responseDataItem 
   * @returns {boolean}
   */
  isValid: (response) => (
    Array.isArray(response) &&
    response.every(responseDataItem => (
      isObject(responseDataItem)
        .withProperty('symbol', symbol => isString(symbol).nonEmpty())
        .withProperty('priceChange', priceChange => isString(priceChange).nonEmpty())
        .value
    ))
  ),
  notValidMessage: 'Expected array of { symbol: string, priceChange: string } objects.',
}
