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

export const exchangeFee = 0;
export const buySellFee = 0;

/**
 * A minimum USD amount equivalent of any currency to be sent at **Exchanger**.
 * 
 * @constant minAmountUsd
 * @type {number}
 */
export const minAmountUsd = 150;

/**
 * @type {"exchange" | "buy" | "sell"}
 */
export const defaultOperation = 'exchange';

/**
 * Timer initial value in minutes
 */
export const timerMinutes = 20;
