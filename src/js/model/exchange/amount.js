import { Model, ModelRepository } from "../base.js";

import { cryptoOrCurrencyAmountToUsd, usdAmountToCryptoOrCurrency, minAmountCryptoOrCurrency } from '../transformers/amount.js';

import { validateCryptoOrCurrencyAmount } from '../validators/crypto.js';

import amountClamp from '../transformers/amountClamp.js';

import { preCheckInput } from "../../fn/numbers/pre-check.js";

/**
 * 
 * @param {ModelRepository} modelRepository 
 */
function createCryptoAmountModels(modelRepository) {
  if (!(modelRepository instanceof ModelRepository)) {
    throw new TypeError('Expected modelRepository to be instance of ModelRepository.');
  }

  const cryptoInModel = modelRepository.find('exchange:crypto-in');
  const cryptoOutModel = modelRepository.find('exchange:crypto-out');

  const cryptoInAmount = new Model(
    'exchange:crypto-in:amount',
    'Crypto In Amount',
    minAmountCryptoOrCurrency(cryptoInModel.value.price)
  );

  const cryptoOutAmount = new Model(
    'exchange:crypto-out:amount',
    'Crypto Out Amount',
    minAmountCryptoOrCurrency(cryptoOutModel.value.price)
  );

  cryptoInAmount.valueGetterFn = value => `Sell: ${preCheckInput(value)} | ${cryptoInModel.value.short}`;
  cryptoInAmount.validatorFn = value => validateCryptoOrCurrencyAmount(value, cryptoInModel.value.price);

  cryptoOutAmount.valueGetterFn = value => `Buy: ${preCheckInput(value)} | ${cryptoOutModel.value.short}`;
  cryptoOutAmount.validatorFn = value => validateCryptoOrCurrencyAmount(value, cryptoOutModel.value.price);

  amountClamp(cryptoInAmount, cryptoInModel);
  amountClamp(cryptoOutAmount, cryptoOutModel);

  cryptoInAmount.bind(cryptoInModel, (oldValue, newValue) => {
    const usdAmount = cryptoOrCurrencyAmountToUsd(cryptoInAmount.value, oldValue.price);
    const newCryptoAmount = usdAmountToCryptoOrCurrency(usdAmount, newValue.price);
    cryptoInAmount.valueGetterFn = value => `Sell: ${preCheckInput(value)} | ${newValue.short}`;

    cryptoInAmount.updateModel(newCryptoAmount);
  });

  cryptoOutAmount.bind(cryptoOutModel, (oldValue, newValue) => {
    const usdAmount = cryptoOrCurrencyAmountToUsd(cryptoOutAmount.value, oldValue.price);
    const newAmount = usdAmountToCryptoOrCurrency(usdAmount, newValue.price);
    cryptoOutAmount.valueGetterFn = value => `Buy: ${preCheckInput(value)} | ${newValue.short}`;

    cryptoOutAmount.updateModel(newAmount);
  });

  cryptoInAmount.bind(cryptoOutAmount, (oldValue, newValue) => {
    if (oldValue !== newValue) {
      const usdAmount = cryptoOrCurrencyAmountToUsd(newValue, cryptoOutModel.value.price);
      const newAmount = usdAmountToCryptoOrCurrency(usdAmount, cryptoInModel.value.price);
  
      cryptoInAmount.updateModel(newAmount);
    }
  });

  cryptoOutAmount.bind(cryptoInAmount, (oldValue, newValue) => {
    if (oldValue !== newValue) {
      const usdAmount = cryptoOrCurrencyAmountToUsd(newValue, cryptoInModel.value.price);
      const newAmount = usdAmountToCryptoOrCurrency(usdAmount, cryptoOutModel.value.price);
  
      cryptoOutAmount.updateModel(newAmount);
    }
  });

  modelRepository.addModels(cryptoInAmount, cryptoOutAmount);
}

export default createCryptoAmountModels;