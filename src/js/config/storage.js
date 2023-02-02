import { changeSellBuyToExchangeRedirect } from "../files/script.js";

/**
 * @typedef {import('../i18n/data.js').Language} Language
 */

/**
 * @typedef {import('../pages/home/scrollDispatcher.js').scrollAction} scrollAction
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
    /**
     * A token name used to pass target cryptocurrency between pages.
     * 
     * **This is query parameter.**
     */
    targetCrypto: 'targetCrypto',
    /**
     * A token name used to pass operation: `buy`, `sell` or `exchange` between pages.
     * 
     * **This is query parameter.**
     */
    operation: 'operation',
    /** A token name to use to store current {@link Language.value}.  */
    currentLanguage: 'currentLang',
    /**
     * A token name used to pass element CSS selector, to which {@link scrollAction scrollDispatcher}
     * must scroll (on **Home page**).
     * 
     * **This is query parameter.**
     */
    targetElement: 's',
  },
};

export default storageConfig;