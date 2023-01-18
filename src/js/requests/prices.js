import $ from 'jquery';
import { validateCryptosParam, cryptoPriceValidator } from './validators.js';
import { settings, tickerUrl, getCryptoSymbol } from './config.js';
import { cryptocurrencies } from '../config/currencies.js';
import { isNumber } from '../fn/identity/index.js';
import { CurrencyFactor } from '../types/currency.js';
import { currencyFactors } from '../config/currencies.js';

/**
 * @typedef {import('../types/currency').CurrencyPartial} CurrencyPartial
 */

/**
 * 
 * @param {CurrencyPartial[] | null | undefined} cryptos 
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

        isNumber(price).throw('price');

        const currencyFactor = currencyFactors.find(c => c.id === crypto.id);

        let factor = 1;

        if (currencyFactor instanceof CurrencyFactor) {
          factor = currencyFactor.factor;
        }

        price = price * factor;

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

export default fetchPrices;