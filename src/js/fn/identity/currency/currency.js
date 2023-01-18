import { Currency, CurrencyPartial } from '../../../types/currency.js';
import { FalseIdentityError } from '../base.js';

/**
 * Indicates if {@link partialCurrency} is {@link CurrencyPartial}.
 * @param {any} partialCurrency An object to test
 * 
 * @returns {boolean}
 */
export function isCurrencyPartial(partialCurrency) {
  return {
    value: partialCurrency instanceof CurrencyPartial,
    /**
     * Throw an error if identity is not true.
     * @param {string} paramName A name of parameter which represents the object, tested by identity function.
     */
    throw(paramName) {
      if (!this.value) {
        throw new FalseIdentityError(paramName, 'CurrencyPartial');
      }
    }
  };
}

/**
 * Indicates if {@link currency} is {@link Currency}.
 * @param {any} currency An object to test.
 * 
 * @returns {boolean}
 */
export function isCurrency(currency) {
  return {
    value: currency instanceof Currency,
    /**
     * Throw an error if identity is not true.
     * @param {string} paramName A name of parameter which represents the object, tested by identity function.
     */
    throw(paramName) {
      if (!this.value) {
        throw new FalseIdentityError(paramName, 'Currency');
      }
    }
  };
}
