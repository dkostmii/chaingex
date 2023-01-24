import { changeSellBuyToExchangeRedirect } from "../files/script.js";

/**
 * @typedef {import('../i18n/data.js').Language} Language
 */

/**
 * `localStorage` configuration.
 * 
 * Contains tokenNames for browser's `localStorage`.
 * 
 * See also {@link changeSellBuyToExchangeRedirect()} definition.
 */
const storageConfig = {
  /**
   * A token names to use in `localStorage` to store cryptocurrency ids.
   * 
   * Those are used between redirection from **Home** page to **Exchanger** page
   * to select required cryptocurrency after clicking Change, Sell or Buy button.
   */
  tokenNames: {
    targetCrypto: 'targetCrypto',
    operation: 'operation',
    /** A token name to use to store current {@link Language.value}.  */
    currentLanguage: 'currentLang',
    targetElement: 's',
  },
};

export default storageConfig;