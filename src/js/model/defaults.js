import { Model, ModelRepository } from "./base.js";
import createBuySellOperationModel from "./buySellOperation.js";
import createLanguageModel from "./language.js";
import createOperationModel from "./operation.js";

import storageConfig from "../config/storage.js";

import dispatch from "../requests/dispatch.js";

import isString from "../fn/identity/string.js";
import createResultModel from "./result.js";

import { defaultOperation, timerMinutes } from "../config/exchanger.js";
import createOperationStepModel from "./operationStepModel.js";
import createCountdownModel from "./countdown.js";
import { getSecondsInterval } from "../fn/time.js";

/**
 * 
 * @param {ModelRepository} modelRepository 
 */
function createDefaults(modelRepository) {
  if (!(modelRepository instanceof ModelRepository)) {
    throw new TypeError('Expected modelRepository to be instance of ModelRepository.');
  }

  const { tokenNames: { targetCrypto: target, operation: op } } = storageConfig;
  const { targetCrypto, operation } = dispatch(target, op);
  
  let isExchange = defaultOperation === 'exchange';
  let isBuy = defaultOperation === 'buy';

  if (isString(operation).value) {
    isExchange = operation === 'exchange';
    isBuy = operation === 'buy';
  }

  let changeCryptoId = 'usdt-tron';
  let anotherChangeCryptoId = 'btc';
  let sellBuyCryptoId = 'btc';

  if (isString(operation).nonEmpty().value && isString(targetCrypto).nonEmpty().value) {
    if (isExchange) {
      if (targetCrypto !== anotherChangeCryptoId) {
        changeCryptoId = targetCrypto;
      } else {
        changeCryptoId = targetCrypto;
        anotherChangeCryptoId = 'usdt-tron';
      }
    } else {
      sellBuyCryptoId = targetCrypto;
    }
  }

  const defaultCryptoInId = new Model('defaultCryptoInId', 'Default Crypto In Id', changeCryptoId);
  const defauldCryptoOutId = new Model('defaultCryptoOutId', 'Default Crypto Out Id', anotherChangeCryptoId);

  const defaultCryptoId = new Model('defaultCryptoId', 'Default Crypto Id', sellBuyCryptoId);
  const defaultCurrencyId = new Model('defaultCurrencyId', 'Default Currency Id', 'usd');

  modelRepository.addModels(defaultCryptoInId, defauldCryptoOutId, defaultCryptoId, defaultCurrencyId);

  createOperationModel(isExchange ? "exchange" : "buy-sell", modelRepository);
  createBuySellOperationModel(isBuy ? "buy" : (isExchange ? "buy" : "sell"), modelRepository);

  createLanguageModel(modelRepository);
  createResultModel(modelRepository);
  createOperationStepModel(modelRepository);

  createCountdownModel(getSecondsInterval(0, timerMinutes), modelRepository);
}

export default createDefaults;