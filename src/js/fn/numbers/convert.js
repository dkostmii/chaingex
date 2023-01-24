import { usdt } from "../../config/usdt";

/**
 * 
 * @param {currency} crypto A {@link currency} data with `price` property containing price in USD.
 * @returns {currency} A currency with `price` property containing USDT price of that crypto.
 */
export function convertUsdPriceToUsdt(crypto) {
  return {
    ...crypto,
    price: convertUsdToUsdt(crypto.price),
  };
}

/**
 * Converts amount of USD to an amount of USDT, according to `usdt.price` (see `usdt.js` in `config/` folder).
 * 
 * @param {number} usdAmount An amount of USD to convert.
 * @returns {number} A number containing USDT equivalent of given USD amount.
 */
export function convertUsdToUsdt(usdAmount) {
  if (usdt.price > 0) {
    return usdAmount / usdt.price;
  }

  throw new Error('Expected usdt price to be positive (greater than zero, price > 0).');
}
