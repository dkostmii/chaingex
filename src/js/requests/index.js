import fetchChange from "./change.js";
import fetchPrices from "./prices.js";
import combineCurrencies from "./combine.js";
import { isCurrencyArray } from "../fn/identity/currency/index.js";
import fiatCurrencies from "./mock/fiatCurrencies.js";
import cryptos from './mock/cryptos.js';

import { scriptConfig } from '../config/exchanger.js';

/**
 * @typedef {import('../types/currency.js').Currency} Currency
 */

/**
 * Loads the cryptocurrency data from API. See {@link https://binance-docs.github.io/apidocs/spot/en Binance API V3 (Spot) documentation}.
 * @returns {Promise<Currency[]>} A {@link Promise} containing either an **Array** of {@link currency} data or **string** with error.
 */
export async function loadCryptos() {
  return new Promise((res, rej) => {
    let promise = Promise.all([ fetchChange(), fetchPrices() ]);

    if (scriptConfig.env === 'dev') {
      promise = promise.catch(() => {
        res(cryptos);
      });
    } else {
      promise = promise.catch(() => {
        rej('Unable to load cryptocurrency data.');
      });
    }

    promise = promise.then(cryptosArrays => {
      if (Array.isArray(cryptosArrays)) {
        const currencies = combineCurrencies(...cryptosArrays)
        .map(partialCurrency => partialCurrency.getFinal());
  
        isCurrencyArray(currencies).throw('currencies');
  
        res(currencies);
      }

      rej(cryptosArrays);
    });
  });
}


// FIXME: replace mock by API call
export async function loadFiatCurrencies() {
  return fiatCurrencies;
}
