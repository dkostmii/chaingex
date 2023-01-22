/**
 * **Exchanger** page configuration.
 *  
 */
export const scriptConfig = {
    /** In `dev` mode additional data is logged in console, 
     * such as request response.
     */
    env: 'dev',
    /** The token which identifies some **Exchanger** form fields, such as `<input name="ex-card">` or `<input name="ex-address"`,
 * the name starts with this token. */
    fieldTag: 'ex',
    /** A Telegram account token. */
    token: '5427993384:AAFpfHkrxcNGkCyln6AOQwpk0OSojWt4EhU',
    /** The ID of Telegram chat, where message is sent. */
    chatId: '-1001635905029'
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
