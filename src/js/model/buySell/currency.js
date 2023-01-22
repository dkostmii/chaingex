import { Model, ModelRepository } from "../base.js";

import getBuySellCurrencies from '../../fn/getBuySellCurrencies.js';

/**
 * 
 * @param {ModelRepository} modelRepository 
 */
function createCurrencyModels(modelRepository) {
  if (!(modelRepository instanceof ModelRepository)) {
    throw new TypeError('Expected modelRepository to be instance of ModelRepository.');
  }

  const cryptoId = modelRepository.find('defaultCryptoId').value;
  const currencyId = modelRepository.find('defaultCurrencyId').value;

  const currencies = modelRepository.find('currencies').value;
  const cryptos = modelRepository.find('cryptos').value;

  const { crypto, currency } = getBuySellCurrencies(cryptoId, currencyId, cryptos, currencies);

  const cryptoModel = new Model(
    'buy-sell:crypto',
    'Crypto',
    crypto
  );

  const currencyModel = new Model(
    'buy-sell:currency',
    'Currency',
    currency
  );

  cryptoModel.valueGetterFn = value => value.name;
  currencyModel.valueGetterFn = value => value.name;

  modelRepository.addModels(cryptoModel, currencyModel);
}

export default createCurrencyModels;
