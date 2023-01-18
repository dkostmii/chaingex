import { isCurrency, isCurrencyPartial } from "./currency.js";
import { Currency, CurrencyPartial } from "../../../types/currency.js";
import { FalseIdentityError } from '../base.js';

/**
 * Indicates if {@link currencyPartialArr} is array of {@link CurrencyPartial}.
 * 
 * @param {any} currencyPartialArr An object to test.
 */
export function isCurrencyPartialArray(currencyPartialArr) {
  const value = (
    Array.isArray(currencyPartialArr) &&
    currencyPartialArr.length > 0 &&
    currencyPartialArr.every(cp => isCurrencyPartial(cp).value)
  )

  return {
    value,
    /**
     * Throw an error if identity is not true.
     * @param {string} paramName A name of parameter which represents the object, tested by identity function.
     */
    throw(paramName) {
      if (!this.value) {
        throw new FalseIdentityError(paramName, 'non-empty CurrencyPartial[] array');
      }
    }
  };
}

/**
 * Indicates if {@link arr} is {@link Currency} array.
 * @param {any} arr An object to test.
 */
export function isCurrencyArray(currenciesArr) {
  const value = (
    Array.isArray(currenciesArr) &&
    currenciesArr.length > 0 &&
    currenciesArr.every(c => isCurrency(c).value)
  );

  return {
    value,
    /**
     * Throw an error if identity is not true.
     * @param {string} paramName A name of parameter which represents the object, tested by identity function.
     */
    throw(paramName) {
      if (!this.value) {
        throw new FalseIdentityError(paramName, 'non-empty Currency[] array');
      }
    }
  };
}