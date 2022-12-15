import { changeSellBuyToExchangeRedirect } from "../files/script.js";

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
    /** A token name to use to store send crypto id (asset to sell). */
    sendCrypto: 'sendCrypto',
    /** A token name to use to store receive crypto id (asset to buy). */
    receiveCrypto: 'receiveCrypto',
  }
};

export default storageConfig;