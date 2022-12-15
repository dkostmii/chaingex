import { cryptocurrencies } from "../files/fetch-currencies.js";

/**
 * An object containing factor of specified cryptocurrency price.
 * 
 * @typedef {Object} currencyFactor
 * @property {string} id A currency identifier.
 * 
 * See {@link cryptocurrencies} for possible cryptocurrency identifiers.
 * 
 * @property {number} factor A number which multiplies a price.
 * 
 * For example, `factor: 0.5` halves the price and `factor: 2` doubles.
 * 
 * **Must be non-negative.**
 */

/**
 * An array containing {@link currencyFactor cryptocurrency price factors}.
 * 
 * **If you want control USDT price, proceed to `usdt.js`**
 * 
 * See {@link cryptocurrencies} for possible cryptocurrency identifiers.
 * 
 * @constant currencyFactors
 * @type {currencyFactor[]}
 */
export const currencyFactors = [
  //{ id: 'bitcoin', factor: 0.2 }
    { id: 'solana', factor: 0.9 }
];
