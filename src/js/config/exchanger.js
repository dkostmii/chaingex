/**
 * **Exchanger** page configuration.
 *  
 */
export const scriptConfig = {
    /** In `dev` mode additional data is logged in console, 
     * such as request response.
     */
    env: 'prod',
    /** A Telegram account token. */
    token: '5843086326:AAGzgWcvJrrbtOsxseR3TEqyttLmMvDtJCE',
    /** The ID of Telegram chat, where message is sent. */
    chatId: '-1001749872032'
}

/**
 * Defines fee for Exchange operations
 */
export const exchangeFee = 0;

/**
 * Defines fee for Buy / Sell operations
 */
export const buySellFee = 0;

/**
 * A minimum USD amount equivalent of any currency to be sent at **Exchanger**.
 * 
 * @constant minAmountUsd
 * @type {number}
 */
export const minAmountUsd = 150;

/**
 * Controls default operation, when user goes to **Exchanger page** by clicking **Change** button.
 * 
 * @type {"exchange" | "buy" | "sell"}
 */
export const defaultOperation = 'exchange';

/**
 * @typedef {import('../model/countdown.js').default} createCountdownModel
 */

/**
 * @typedef {import('../model/defaults.js').default} createDefaults
 */

/**
 * Timer initial value in minutes.
 * 
 * Timer is used on **Exchanger page**.
 * 
 * See {@link createDefaults} (where this constant is used) and {@link createCountdownModel} (for timer algorithm).
 * 
 */
export const timerMinutes = 20;
