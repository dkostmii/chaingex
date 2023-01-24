import $ from 'jquery';
import { validateCryptosParam, cryptoPriceChangeValidator } from './validators.js';
import { settings, changeUrl, getCryptoSymbol } from './config.js';
import { cryptocurrencies } from '../config/currencies.js';
import { isNumber } from '../fn/identity/index.js';


/**
 * @typedef {import('../types/currency').CurrencyPartial} CurrencyPartial
 */

/**
 * 
 * @param {CurrencyPartial[] | null | undefined} cryptos 
 * @returns {Promise<CurrencyPartial[]>}
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

        isNumber(priceChange).throw('priceChange');

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

export default fetchChange;