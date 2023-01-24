import { preCheckInput } from "../../fn/numbers/pre-check.js";
import { Model, ModelRepository } from "../base.js";

import { onePerAnother } from "../transformers/currency.js";

/**
 * 
 * @param {ModelRepository} modelRepository 
 */
function createExchangeRateModel(modelRepository) {
  if (!(modelRepository instanceof ModelRepository)) {
    throw new TypeError('Expected modelRepository to be instance of ModelRepository.');
  }

  const cryptoInModel = modelRepository.find('exchange:crypto-in');
  const cryptoOutModel = modelRepository.find('exchange:crypto-out');

  const exchangeRate = new Model(
    'exchange:rate',
    'Exchange rate',
    onePerAnother(cryptoInModel.value.price, cryptoOutModel.value.price)
  );

  exchangeRate.bind(cryptoInModel, (_, newValue) => {
    exchangeRate.updateModel(
      onePerAnother(newValue.price, cryptoOutModel.value.price));
  });

  exchangeRate.bind(cryptoOutModel, (_, newValue) => {
    exchangeRate.updateModel(
      onePerAnother(cryptoInModel.value.price, newValue.price));
  });
  exchangeRate.valueGetterFn = value => `1 ${cryptoInModel.value.short} - ${preCheckInput(value)} ${cryptoOutModel.value.short}`;

  modelRepository.addModels(exchangeRate);
}

export default createExchangeRateModel;
