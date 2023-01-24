import $ from 'jquery';
import ElementNotFoundError from '../../errors/elementNotFound.js';

import storageConfig from '../../config/storage.js';

/**
 * Injects the redirection link (./exchanger.html) into all Change, Sell and Buy buttons.
 * 
 * This function also adds information about cryptocurrency, where the Change, Sell or Buy button clicked
 * into browser `localStorage`, so **Exchanger** page can select required crypto for the user.
 */
export function changeSellBuyToExchangeRedirect() {
  const { targetCrypto, operation } = storageConfig.tokenNames;

  $('.button__change')
    .each((_, el) => {
      const columnPriceEl = el.parentElement.parentElement.querySelector('.colum__price');

      if (!(columnPriceEl instanceof Element)) {
        throw new ElementNotFoundError('.colum__price');
      }

      const cryptoId = columnPriceEl.id;

      $(el).attr('href', `exchanger.html?${targetCrypto}=${cryptoId}&${operation}=exchange`);
    });

  $('.button__buy')
    .each((_, el) => {
      const columnPriceEl = el.parentElement.parentElement.querySelector('.colum__price');

      if (!(columnPriceEl instanceof Element)) {
        throw new ElementNotFoundError('.colum__price');
      }

      const cryptoId = columnPriceEl.id;

      $(el).attr('href', `exchanger.html?${targetCrypto}=${cryptoId}&${operation}=buy`);
    });

  $('.button__sell')
    .each((_, el) => {
      const columnPriceEl = el.parentElement.parentElement.querySelector('.colum__price');

      if (!(columnPriceEl instanceof Element)) {
        throw new ElementNotFoundError('.colum__price');
      }

      const cryptoId = columnPriceEl.id;

      $(el).attr('href', `exchanger.html?${targetCrypto}=${cryptoId}&${operation}=sell`);
    });
}
