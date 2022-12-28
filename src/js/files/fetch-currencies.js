import $ from "jquery";
import { throwIfNotANumber, throwIfNotAString, throwIfNotAPartialCurrency, isPartialCurrency, throwIfNotArrayOfCurrencies } from "./exchanger/model/util.js";

import { currencyFactors } from "../config/currencies.js";
import { usdt } from "../config/usdt.js";

/**
 * An array of {@link currencyPartial}.
 * 
 * @constant cryptocurrencies
 * @type {currencyPartial[]}
 */
export const cryptocurrencies = [
  { id: "bitcoin", name: "Bitcoin", short: "BTC" },
  { id: "ethereum", name: "Ethereum", short: "ETH" },
  { id: "binancecoin", name: "Binance coin", short: "BNB" },
  { id: "solana", name: "Solana", short: "SOL" },
  { id: "atomic-token", name: "Atom", short: "ATOM" },
  { id: "terra-luna", name: "Terra luna", short: "LUNC" },
  { id: "polkadot", name: "Polkadot", short: "DOT" },
  { id: "matic-network", name: "Matic", short: "MATIC" },
  { id: "near", name: "Near", short: "NEAR" },
  { id: "cardano", name: "Cardano", short: "ADA" },
  { id: "ethereum-classic", name: "Ethereum Classic", short: "ETC" },
  { id: "1tronic", name: "Tronix", short: "TRX" },
  { id: "doge-token", name: "Doge Token", short: "DOGE" },
  { id: "litentry", name: "Litentry", short: "LIT" },
  { id: "trust-wallet-token", name: "Trust Wallet Token", short: "TWT" },
  { id: "shiba-inu", name: "Shiba Inu", short: "SHIB" },
  { id: "avalanche-2", name: "Avalanche", short: "AVA" },
  { id: "pancakeswap-token", name: "Pancake Swap", short: "CAKE" },
];

/**
 * Gets the symbol name for {@link currencyPartial} and {@link usdt}.
 * @param {currencyPartial} currencyPartial 
 * @returns {string} A string containing symbol name for provided cryptocurrency vs USDT, for example `"BTCUSDT"`
 */
function getCryptoSymbol(currencyPartial) {
  throwIfNotAPartialCurrency(currencyPartial);

  return currencyPartial.short + usdt.short;
}

const symbolsArr = cryptocurrencies.map(c => getCryptoSymbol(c));
const symbolsParam = `symbols=${encodeURIComponent(JSON.stringify(symbolsArr))}`;

/**
 * The url to Binance API V3 (Spot) **Symbol Price Ticker** endpoint. See {@link https://binance-docs.github.io/apidocs/spot/en Binance API V3 (Spot) documentation}.
 */
const tickerUrl = `https://api.binance.com/api/v3/ticker/price?${symbolsParam}`;

/**
 * The url to Binance API V3 (Spot) **24hr Ticker Price Change Statistics** endpoint. See {@link https://binance-docs.github.io/apidocs/spot/en Binance API V3 (Spot) documentation}.
 */
const changeUrl = `https://api.binance.com/api/v3/ticker/24hr?${symbolsParam}`;

const settings = {
   "async": true,
   "scrossDomain": true,
   "method": "GET",
   "headers": {}
}

/**
 * Finds a factor for cryptocurrency to control its price.
 * @param {{ id: string }} crypto A cryptocurrency object with defined id.
 * @returns A non-negative number.
 */
export function findCurrencyFactor(crypto) {
  if (typeof crypto !== 'object') {
    throw new TypeError(`Expected crypto to be an object. Got ${typeof crypto}`);
  }

  if (!('id' in crypto)) {
    throw new TypeError('Expected crypto.id to be defined');
  }

  throwIfNotAString(crypto.id);
  
  const factorObj = currencyFactors.find(c => c.id === crypto.id);

  if (typeof factorObj === 'object' &&
            'factor' in factorObj &&
            typeof factorObj.factor === 'number') {

    const { factor } = factorObj;

    if (factor < 0) {
      throw new Error(`Expected factor to be non-negative. Got factor ${factor} for cryptoId ${crypto.id}`);
    }

    return factor;
  }

  return 1;
}

function isCurrencyPartialArray(cryptos) {
  return Array.isArray(cryptos) && cryptos.every(c => isPartialCurrency(c));
}

function validateCryptosParam(cryptos) {
  const isDefined = isCurrencyPartialArray(cryptos);
  const isValid = (
    typeof cryptos === 'undefined'
    || cryptos === null
    || isCurrencyPartialArray(cryptos)
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
const cryptoPriceValidator = {
  /**
   * 
   * @param {any} responseDataItem 
   * @returns {boolean}
   */
  isValid: (response) => (
    Array.isArray(response) &&
    response.every(responseDataItem => (
      typeof responseDataItem === 'object'
      && 'symbol' in responseDataItem
      && 'price' in responseDataItem
      && typeof responseDataItem.symbol === 'string'
      && typeof responseDataItem.price === 'string'
    ))
  ),
  notValidMessage: 'Expected array of { symbol: string, price: string } objects.',
}

/**
 * @constant cryptoPriceChangeValidator
 * @type {responseValidator}
 */
const cryptoPriceChangeValidator = {
  /**
   * 
   * @param {any} responseDataItem 
   * @returns {boolean}
   */
  isValid: (response) => (
    Array.isArray(response) &&
    response.every(responseDataItem => (
      typeof responseDataItem === 'object'
      && 'symbol' in responseDataItem
      && 'priceChange' in responseDataItem
      && typeof responseDataItem.symbol === 'string'
      && typeof responseDataItem.priceChange === 'string'
    ))
  ),
  notValidMessage: 'Expected array of { symbol: string, priceChange: string } objects.',
}

/**
 * 
 * @param {currencyPartial[] | null | undefined} cryptos 
 * @returns {Promise<currencyPartial[]>}
 */
async function fetchPrices(cryptos) {
  return new Promise((res, rej) => {
    const { isValid, isDefined } = validateCryptosParam(cryptos);

    if (!isValid) {
      rej('Expected cryptos to be either null or array of partial currencies.');
    }

    $.ajax({ ...settings, 'url': tickerUrl }).done(response => {
      if (!cryptoPriceValidator.isValid(response)) {
        rej(cryptoPriceValidator.notValidMessage);
      }

      const result = (isDefined ? cryptos : cryptocurrencies).map(crypto => {
        const symbolData = response
          .find(sd => sd.symbol === getCryptoSymbol(crypto));

        let { price } = symbolData;
        price = parseFloat(price);

        throwIfNotANumber(price);

        const currencyFactor = findCurrencyFactor(crypto);
        throwIfNotANumber(currencyFactor);

        price = price * currencyFactor;

        return {
          ...crypto,
          price,
        };
      });

      res(result);
    })
    .fail(xhr => {
      // Reject if request failed.
      rej(`Failed to fetch cryptocurrency ticker prices. Status: ${xhr.status} - ${xhr.statusText}`);
    });
  });
}

/**
 * 
 * @param {currencyPartial[] | null | undefined} cryptos 
 * @returns {Promise<currencyPartial[]>}
 */
async function fetchChange(cryptos) {
  return new Promise((res, rej) => {
    const { isValid, isDefined } = validateCryptosParam(cryptos);

    if (!isValid) {
      rej('Expected cryptos to be either null or array of partial currencies.');
    }

    $.ajax({ ...settings, 'url': changeUrl }).done(response => {
      if (!cryptoPriceChangeValidator.isValid(response)) {
        rej(cryptoPriceChangeValidator.notValidMessage);
      }

      const result = (isDefined ? cryptos : cryptocurrencies).map(crypto => {
        const symbolData = response
          .find(sd => sd.symbol === getCryptoSymbol(crypto));

        let { priceChange } = symbolData;
        priceChange = parseFloat(priceChange);

        throwIfNotANumber(priceChange);

        return {
          ...crypto,
          change: priceChange,
        };
      });

      res(result);
    })
    .fail(xhr => {
      // Reject if request failed.
      rej(`Failed to fetch change in cryptocurrency prices. Status: ${xhr.status} - ${xhr.statusText}`);
    });
  });
}

/**
 * 
 * @param  {...currencyPartial[]} cryptosArrays An array containing multiple {@link currencyPartial} arrays.
 * Must have at least 2 such arrays. All arrays must have same length.
 */
function combineCurrencies(...cryptosArrays) {
  if (!(
    Array.isArray(cryptosArrays) && cryptosArrays.length >= 2)) {
      throw new Error("Expcted cryptosArrays to be array with at least 2 arrays of currencyPartial.");
    }

  const [firstCryptos, ...restCryptosArrays] = cryptosArrays;

  if (restCryptosArrays.some(restCryptos => restCryptos.length !== firstCryptos.length)) {
    throw new Error('Expected all cryptosArrays to have same length.');
  }

  let result = firstCryptos;

  restCryptosArrays.forEach(restCryptos => {
    restCryptos.forEach(crypto => {
      const resultCryptoIndex = result.findIndex(c => c.id === crypto.id);

      if (resultCryptoIndex === -1) {
        throw new Error(`Crypto with id: ${crypto.id} is missing in one of arrays.`);
      }

      result[resultCryptoIndex] = { ...result[resultCryptoIndex], ...crypto };
    });
  });

  return result;
}

/**
 * Loads the cryptocurrency data from API. See {@link https://binance-docs.github.io/apidocs/spot/en Binance API V3 (Spot) documentation}.
 * @returns {Promise<currency[]>} A {@link Promise} containing either an **Array** of {@link currency} data or **string** with error.
 */
export async function loadCryptos() {
  return new Promise(async (res, rej) => {
    Promise.all([ fetchChange(), fetchPrices() ])
    .then(cryptosArrays => {
      const currencies = combineCurrencies(...cryptosArrays);

      throwIfNotArrayOfCurrencies(currencies);

      res(currencies);
    })
    .catch(err => rej(err));
  });
}

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

/**
 * Formats a number to fixed precision if needed.
 * 
 * Precision is `8` digits after period. And is applied to `x < 1e-4`
 * 
 * @param {number | string} x A number to format. Can be either number of string.
 * @returns {string} A string containing formatted number.
 */
export function preCheck(x) {
  if (typeof x === 'string' || x instanceof String) {
    x = parseFloat(x);
  }

  if (x < 1e-4) return x.toFixed(8);
  else if (Math.floor(x) < 1e+4) {
    return x.toPrecision(4);
  }
  
  return x.toString();
}

/**
 * A partial currency object.
 * 
 * This object misses a `price` property.
 * 
 * @typedef {Object} currencyPartial
 * @property {string} id A currency identifier
 * @property {string} name A human-readable currency name
 * @property {string} short A short currency name
 * @property {number?} price A price of cryptocurrency in USDT
 * @property {number?} change A change in price of cryptocurrency within 24hr window
 */

/**
 * A currency object.
 * 
 * @typedef {Object} currency
 * @property {string} id A currency identifier
 * @property {string} name A human-readable currency name
 * @property {string} short A short currency name
 * @property {number} price A price of cryptocurrency in USDT
 * @property {number} change A change in price of cryptocurrency within 24hr window
 */
