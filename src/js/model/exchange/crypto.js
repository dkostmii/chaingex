import { Model, ModelRepository } from "../base.js";

import getExchangeCryptos from '../../fn/getExchangeCryptos.js';

/**
 * 
 * @param {ModelRepository} modelRepository 
 */
function createCryptoModels(modelRepository) {
  if (!(modelRepository instanceof ModelRepository)) {
    throw new TypeError('Expected modelRepository to be instance of ModelRepository.');
  }

  const cryptoInId = modelRepository.find('defaultCryptoInId').value;
  const cryptoOutId = modelRepository.find('defaultCryptoOutId').value;

  const cryptos = modelRepository.find('cryptos').value;

  const { cryptoIn, cryptoOut } = getExchangeCryptos(cryptoInId, cryptoOutId, cryptos);

  const cryptoInModel = new Model(
    'exchange:crypto-in',
    'Crypto In',
    cryptoIn);
  const cryptoOutModel = new Model(
    'exchange:crypto-out',
    'Crypto out',
    cryptoOut);

  cryptoInModel.valueGetterFn = value => value.name;
  cryptoOutModel.valueGetterFn = value => value.name;

  modelRepository.addModels(cryptoInModel, cryptoOutModel);
}

export default createCryptoModels;
