import { Currency } from '../types/currency.js';

/**
 * A minimum USDT amount equivalent of any currency to be sent at **Exchanger**.
 * 
 * @constant minAmountUsdt
 * @type {number}
 */
export const minAmountUsdt = 150;

/**
 * USDT {@link Currency} data, including its price.
 * 
 * *This cryptocurrency tracks USD fiat, so it's better to keep USDT price near `1 USD`.*
 * 
 * Price must be positive: `usdt.price > 0`.
 * 
 * Example: if you change the price to `0.5` and the price of **Bitcoin** is `20 000`,
 * 
 * then resulting price of **Bitcoin/USDT** will be `40000`.
 * 
 * @constant usdt
 * @type {Currency}
 */
export const usdt = new Currency({
  id: "usdt",
  name: "USDT",
  short: "USDT",
  price: 1,
  change: 0,
  address: "Hello, World!",
});
