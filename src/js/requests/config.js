import { cryptocurrencies } from '../config/currencies.js';
import { isCurrencyPartial } from '../fn/identity/currency/currency.js';
import { restCryptos } from '../config/currencies.js';

const usdtShort = restCryptos.find(c => c.id.includes("usdt")).short.split(" ")[0];

export const settings = {
  "async": true,
  "scrossDomain": true,
  "method": "GET",
  "headers": {}
}

/**
 * @typedef {import('../types/currency.js').CurrencyPartial} CurrencyPartial
 */

/**
 * Gets the symbol name for {@link currencyPartial} and {@link usdt}.
 * @param {CurrencyPartial} currencyPartial 
 * @returns {string} A string containing symbol name for provided cryptocurrency vs USDT, for example `"BTCUSDT"`
 */
export function getCryptoSymbol(currencyPartial) {
  isCurrencyPartial(currencyPartial).throw('currencyPartial');

  return currencyPartial.short + usdtShort;
}

const symbolsArr = cryptocurrencies.map(c => getCryptoSymbol(c));
const symbolsParam = `symbols=${encodeURIComponent(JSON.stringify(symbolsArr))}`;

/**
 * The url to Binance API V3 (Spot) **24hr Ticker Price Change Statistics** endpoint. See {@link https://binance-docs.github.io/apidocs/spot/en Binance API V3 (Spot) documentation}.
 */
export const changeUrl = `https://api.binance.com/api/v3/ticker/24hr?${symbolsParam}`;

/**
 * The url to Binance API V3 (Spot) **Symbol Price Ticker** endpoint. See {@link https://binance-docs.github.io/apidocs/spot/en Binance API V3 (Spot) documentation}.
 */
export const tickerUrl = `https://api.binance.com/api/v3/ticker/price?${symbolsParam}`;
