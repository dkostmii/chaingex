import { Model, ModelRepository } from "../base.js";
import { inverse } from "../buySellOperation.js";
import { minAmountCryptoOrCurrency, cryptoOrCurrencyAmountToUsd, usdAmountToCryptoOrCurrency } from "../transformers/amount.js";
import { capitalize } from "../transformers/string.js";
import amountClamp from "../transformers/amountClamp.js";
import { validateCryptoOrCurrencyAmount } from "../validators/crypto.js";

import { preCheckInput } from "../../fn/numbers/pre-check.js";


/**
 * 
 * @param {ModelRepository} modelRepository 
 */
function createCurrencyAmountModels(modelRepository) {
  if (!(modelRepository instanceof ModelRepository)) {
    throw new TypeError('Expected modelRepository to be instance of ModelRepository.');
  }

  const cryptoModel = modelRepository.find('buy-sell:crypto');
  const currencyModel = modelRepository.find('buy-sell:currency');

  const buySellOperationModel = modelRepository.find('operation:buy-sell');
  const getCryptoOperation = () => {
    return capitalize(buySellOperationModel.value);
  };

  const getCurrencyOperation = () => {
    return capitalize(inverse(buySellOperationModel.value));
  };

  const cryptoAmount = new Model(
    'buy-sell:crypto:amount',
    'Crypto Amount',
    minAmountCryptoOrCurrency(cryptoModel.value.price)
  );

  const currencyAmount = new Model(
    'buy-sell:currency:amount',
    'Currency Amount',
    minAmountCryptoOrCurrency(currencyModel.value.price)
  );

  cryptoAmount.valueGetterFn = value => `${getCryptoOperation()}: ${preCheckInput(value)} | ${cryptoModel.value.short}`;
  cryptoAmount.validatorFn = value => validateCryptoOrCurrencyAmount(value, cryptoModel.value.price);

  currencyAmount.valueGetterFn = value => `${getCurrencyOperation()}: ${preCheckInput(value)} | ${currencyModel.value.short}`;
  currencyAmount.validatorFn = value => validateCryptoOrCurrencyAmount(value, currencyModel.value.price);

  amountClamp(cryptoAmount, cryptoModel);
  amountClamp(currencyAmount, currencyModel);

  cryptoAmount.bind(cryptoModel, (oldValue, newValue) => {
    const usdAmount = cryptoOrCurrencyAmountToUsd(cryptoAmount.value, oldValue.price);
    const newCryptoAmount = usdAmountToCryptoOrCurrency(usdAmount, newValue.price);
    cryptoAmount.valueGetterFn = value => `${getCryptoOperation()}: ${preCheckInput(value)} | ${newValue.short}`;

    cryptoAmount.updateModel(newCryptoAmount);
  });

  currencyAmount.bind(currencyModel, (oldValue, newValue) => {
    const usdAmount = cryptoOrCurrencyAmountToUsd(currencyAmount.value, oldValue.price);
    const newAmount = usdAmountToCryptoOrCurrency(usdAmount, newValue.price);
    currencyAmount.valueGetterFn = value => `${getCurrencyOperation()}: ${preCheckInput(value)} | ${newValue.short}`;

    currencyAmount.updateModel(newAmount);
  });

  cryptoAmount.bind(currencyAmount, (oldValue, newValue) => {
    if (oldValue !== newValue) {
      const usdAmount = cryptoOrCurrencyAmountToUsd(newValue, currencyModel.value.price);
      const newAmount = usdAmountToCryptoOrCurrency(usdAmount, cryptoModel.value.price);
  
      cryptoAmount.updateModel(newAmount);
    }
  });

  currencyAmount.bind(cryptoAmount, (oldValue, newValue) => {
    if (oldValue !== newValue) {
      const usdAmount = cryptoOrCurrencyAmountToUsd(newValue, cryptoModel.value.price);
      const newAmount = usdAmountToCryptoOrCurrency(usdAmount, currencyModel.value.price);
  
      currencyAmount.updateModel(newAmount);
    }
  });

  modelRepository.addModels(cryptoAmount, currencyAmount);
}

export default createCurrencyAmountModels;