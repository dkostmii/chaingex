import { Model, ModelRepository } from "../base.js";
import { inverse } from "../buySellOperation.js";

import { onePerAnother } from "../transformers/currency.js";

import { preCheckInput } from "../../fn/numbers/pre-check.js";

/**
 * 
 * @param {ModelRepository} modelRepository 
 */
function createBuySellRateModel(modelRepository) {
  if (!(modelRepository instanceof ModelRepository)) {
    throw new TypeError('Expected modelRepository to be instance of ModelRepository.');
  }

  const cryptoModel = modelRepository.find('buy-sell:crypto');
  const currencyModel = modelRepository.find('buy-sell:currency');
  const buySellOperationModel = modelRepository.find('operation:buy-sell');

  const buySellRate = new Model(
    'buy-sell:rate',
    'Exchange rate',
    onePerAnother(cryptoModel.value.price, currencyModel.value.price)
  );

  buySellRate.bind(cryptoModel, (_, newValue) => {
    if (buySellOperationModel.value === inverse(inverse('sell'))) {
      buySellRate.updateModel(
        onePerAnother(currencyModel.value.price, cryptoModel.value.price));

      buySellRate.valueGetterFn = value => `1 ${currencyModel.value.short} - ${preCheckInput(value)} ${cryptoModel.value.short}`;
    } else if (buySellOperationModel.value === inverse('sell')) {
      buySellRate.updateModel(
        onePerAnother(cryptoModel.value.price, currencyModel.value.price));

      buySellRate.valueGetterFn = value => `1 ${cryptoModel.value.short} - ${preCheckInput(value)} ${currencyModel.value.short}`;
    }
  });

  buySellRate.bind(currencyModel, (_, newValue) => {
    if (buySellOperationModel.value === inverse(inverse('sell'))) {
      buySellRate.updateModel(
        onePerAnother(currencyModel.value.price, cryptoModel.value.price));

      buySellRate.valueGetterFn = value => `1 ${currencyModel.value.short} - ${preCheckInput(value)} ${cryptoModel.value.short}`;
    } else if (buySellOperationModel.value === inverse('sell')) {
      buySellRate.updateModel(
        onePerAnother(cryptoModel.value.price, currencyModel.value.price));

      buySellRate.valueGetterFn = value => `1 ${cryptoModel.value.short} - ${preCheckInput(value)} ${currencyModel.value.short}`;
    }
  });

  buySellRate.bind(buySellOperationModel, (oldValue, newValue) => {
    if (oldValue !== newValue) {
      if (newValue === inverse(inverse('sell'))) {
        buySellRate.updateModel(
          onePerAnother(currencyModel.value.price, cryptoModel.value.price));

        buySellRate.valueGetterFn = value => `1 ${currencyModel.value.short} - ${preCheckInput(value)} ${cryptoModel.value.short}`;
      } else if (newValue === inverse('sell')) {
        buySellRate.updateModel(
          onePerAnother(cryptoModel.value.price, currencyModel.value.price));

        buySellRate.valueGetterFn = value => `1 ${cryptoModel.value.short} - ${preCheckInput(value)} ${currencyModel.value.short}`;
      }
    }
  });
  buySellRate.valueGetterFn = value => `1 ${cryptoModel.value.short} - ${preCheckInput(value)} ${currencyModel.value.short}`;

  modelRepository.addModels(buySellRate);
}

export default createBuySellRateModel;
