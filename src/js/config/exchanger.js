/**
 * **Exchanger** page configuration.
 *  
 */
export const scriptConfig = {
    /** In `dev` mode additional data is logged in console, 
     * such as request response.
     */
    env: 'prod',
    /** The token which identifies some **Exchanger** form fields, such as `<input name="ex-card">` or `<input name="ex-address"`,
 * the name starts with this token. */
    fieldTag: 'ex',
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
