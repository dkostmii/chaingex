import { Model, ModelRepository } from "./base.js";
import createBuySellOperationModel from "./buySellOperation.js";
import createLanguageModel from "./language.js";
import createOperationModel from "./operation.js";

/**
 * 
 * @param {ModelRepository} modelRepository 
 */
function createDefaults(modelRepository) {
  if (!(modelRepository instanceof ModelRepository)) {
    throw new TypeError('Expected modelRepository to be instance of ModelRepository.');
  }

  const defaultCryptoInId = new Model('defaultCryptoInId', 'Default Crypto In Id', 'usdt-tron');
  const defauldCryptoOutId = new Model('defaultCryptoOutId', 'Default Crypto Out Id', 'btc');

  const defaultCryptoId = new Model('defaultCryptoId', 'Default Crypto Id', 'btc');
  const defaultCurrencyId = new Model('defaultCurrencyId', 'Default Currency Id', 'usd');

  modelRepository.addModels(defaultCryptoInId, defauldCryptoOutId, defaultCryptoId, defaultCurrencyId);

  createOperationModel("exchange", modelRepository);
  createBuySellOperationModel("buy", modelRepository);

  createLanguageModel(modelRepository);
}

export default createDefaults;