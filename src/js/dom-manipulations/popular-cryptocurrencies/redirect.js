import $ from 'jquery';
import ElementNotFoundError from '../../errors/elementNotFound.js';

/**
 * Injects the redirection link (./exchanger.html) into all Change, Sell and Buy buttons.
 * 
 * This function also adds information about cryptocurrency, where the Change, Sell or Buy button clicked
 * into browser `localStorage`, so **Exchanger** page can select required crypto for the user.
 */
export function changeSellBuyToExchangeRedirect() {
  const { localStorage } = window;

  const { sendCrypto, receiveCrypto } = storageConfig.tokenNames;

  $('.button__change, .button__sell')
    .each((_, el) => {
      $(el).on('click', () => {
        const columnPriceEl = el.parentElement.parentElement.querySelector('.colum__price');

        if (!(columnPriceEl instanceof Element)) {
          throw new ElementNotFoundError('.colum__price');
        }

        const cryptoId = columnPriceEl.id;

        localStorage.setItem(sendCrypto, cryptoId);
      });

      $(el).attr('href', './exchanger.html');
    });

  $('.button__buy')
    .each((_, el) => {
      $(el).on('click', () => {
        const columnPriceEl = el.parentElement.parentElement.querySelector('.colum__price');

        if (!(columnPriceEl instanceof Element)) {
          throw new ElementNotFoundError('.colum__price');
        }

        const cryptoId = columnPriceEl.id;
   
        localStorage.setItem(receiveCrypto, cryptoId);
      });
      $(el).attr('href', './exchanger.html');
    });
}
