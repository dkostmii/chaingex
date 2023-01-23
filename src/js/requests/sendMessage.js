import { scriptConfig } from "../config/exchanger.js";
import { isString } from "../fn/identity/index.js";
import { FLS } from "../files/functions.js";

/**
 * Sends message to Telegram chat using {@link scriptConfig.token} and {@link scriptConfig.chatId} credentials.
 * 
 * @param {string} message 
 */
function sendMessage(message) {
  isString(message).nonEmpty().throw('message');

  message = encodeURIComponent(message);

  const query = `https://api.telegram.org/bot${scriptConfig.token}/sendMessage?`;
  const params = `chat_id=${scriptConfig.chatId}&text=${message}&parse_mode=html`;
  const url = query + params;

  fetch(url)
      .then(response => response.json())
      .then(data => scriptConfig.env === 'dev' ? FLS(data) : true);
}

export default sendMessage;
