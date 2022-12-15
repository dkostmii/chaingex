import { loadCryptos } from "../fetch-currencies.js";
import { minAmountUsdt } from '../../config/usdt.js';

import usdt from './normalized-usdt.js';

import storageConfig from "../../config/storage.js";

import { exFormId } from "./views/util.js";

import { throwIfNotACurrency, createCurrencyPairs, throwIfNotArrayOfCurrencies, throwIfNotPairOfCurrencies } from "./model/util.js";

// Models
import CurrencyModel from './model/currency.js';
import YouSendReceiveModel from './model/send-receive.js';
import YouSendModel from './model/you-send.js';
import YouReceiveModel from "./model/you-receive.js";

// Views
import CurrencyView from './views/currency.js';

/**
 * Entry point for the **Exchanger** page.
 * 
 * Is executed after **Exchanger** page is loaded, to fill exchanger form with {@link currency cryptocurrency} data.
 */
export async function exchangerPageLoad() {
  const cryptos = await loadCryptos();

  if (!Array.isArray(cryptos)) {
    throw new Error('Unable to load cryptocurrencies.');
  }

  cryptos.push(usdt);

  const [sendCrypto, receiveCrypto] = getRequestedCryptos(cryptos);

  const youSendModel = new YouSendModel(sendCrypto, minAmountUsdt / sendCrypto.price, cryptos);

  const receiveAmount = youSendModel.amount * youSendModel.currency.price / receiveCrypto.price;

  const youReceiveModel = new YouReceiveModel(
    receiveCrypto,
    receiveAmount,
    cryptos
  );

  const youSendReceiveModel = new YouSendReceiveModel(youSendModel, youReceiveModel, cryptos);

  const currencyModel = new CurrencyModel(
    [sendCrypto, receiveCrypto],
    youSendReceiveModel, createCurrencyPairs(cryptos));

  const formElement = document.querySelector(exFormId);

  new CurrencyView(currencyModel, formElement);
}

/**
 * @typedef {import('../fetch-currencies.js').currency} currency
 */

/**
 * Gets requested cryptos from `localStorage`.
 * 
 * If there are no cryptocurrency ids there, fallbacks to default currency.
 * 
 * @param {currency[]} cryptos An array with possible cryptocurrencies, see {@link currency} type.
 * 
 * @returns {[ currency, currency ]} A send/receive currency pair. 
 */
function getRequestedCryptos(cryptos) {
  throwIfNotArrayOfCurrencies(cryptos);

  const { localStorage } = window;

  const { sendCrypto: sendCryptoKey, receiveCrypto: receiveCryptoKey } = storageConfig.tokenNames;

  const requestedCryptos = {
    sendCryptoId: localStorage.getItem(sendCryptoKey),
    receiveCryptoId: localStorage.getItem(receiveCryptoKey)
  };

  let sendCrypto = cryptos.filter(c => c.id === usdt.id)[0];
  let receiveCrypto = cryptos.filter(c => c.id === 'bitcoin')[0];

  throwIfNotACurrency(sendCrypto);
  throwIfNotACurrency(receiveCrypto);

  if (requestedCryptos.sendCryptoId !== null) {
    sendCrypto = cryptos.filter(c => c.id === requestedCryptos.sendCryptoId)[0];
    receiveCrypto = cryptos.filter(c => c.id === usdt.id)[0];
  }

  if (requestedCryptos.receiveCryptoId !== null) {
    receiveCrypto = cryptos.filter(c => c.id === requestedCryptos.receiveCryptoId)[0];
    sendCrypto = cryptos.filter(c => c.id === usdt.id)[0];
  }

  if (requestedCryptos.sendCryptoId !== null && requestedCryptos.sendCryptoId === requestedCryptos.receiveCryptoId) {
    if (receiveCrypto.sendCryptoId === usdt.id) {
      sendCrypto = cryptos.filter(c => c.id === usdt.id)[0];
      receiveCrypto = cryptos.filter(c => c.id === 'bitcoin')[0];
    } else {
      receiveCrypto = cryptos.filter(c => c.id === requestedCryptos.sendCryptoId)[0];
      sendCrypto = cryptos.filter(c => c.id === usdt.id)[0];
    }
  }

  localStorage.removeItem(sendCryptoKey);
  localStorage.removeItem(receiveCryptoKey);

  throwIfNotACurrency(sendCrypto);
  throwIfNotACurrency(receiveCrypto);

  const currencyPair = [ sendCrypto, receiveCrypto ];

  throwIfNotPairOfCurrencies(currencyPair);

  return currencyPair;
}
