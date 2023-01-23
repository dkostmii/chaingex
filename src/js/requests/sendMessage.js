import { scriptConfig } from "../config/exchanger.js";
import { isObject, isString } from "../fn/identity/index.js";
import { FLS } from "../files/functions.js";

/**
 * Sends message to Telegram chat using {@link scriptConfig.token} and {@link scriptConfig.chatId} credentials.
 * 
 * @param {string} message 
 */
async function sendMessage(message) {
  isString(message).nonEmpty().throw('message');

  message = encodeURIComponent(message);

  const query = `https://api.telegram.org/bot${scriptConfig.token}/sendMessage?`;
  const params = `chat_id=${scriptConfig.chatId}&text=${message}&parse_mode=html`;
  const url = query + params;

  const result = await fetch(url)
      .then(response => response.json())
      .catch(err => { return { ok: false } });

  if (scriptConfig.env === 'dev') {
    FLS(result);
  }

  if (isObject(result).withProperty('ok', p => { return { value: typeof p === 'boolean' } }).value) {
    return result.ok;
  }

  return false;
}

export default sendMessage;
