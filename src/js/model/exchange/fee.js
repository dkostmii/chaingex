import { Model, ModelRepository } from "../base.js";

import { exchangeFee } from '../../config/exchanger.js';
import { preCheckInput } from "../../fn/numbers/pre-check.js";

/**
 * 
 * @param {ModelRepository} modelRepository 
 */
function createExchangeFeeModel(modelRepository) {
  if (!(modelRepository instanceof ModelRepository)) {
    throw new TypeError('Expected modelRepository to be instance of ModelRepository.');
  }

  const exchangeFeeModel = new Model('exchange:fee', 'Exchange fee', null);

  if (exchangeFee < 0) {
    throw new Error('Expected exchangeFee to be non-negative.')
  }

  if (exchangeFee > 0) {
    const cryptoInModel = modelRepository.find('exchange:crypto-in');
    const cryptoOutModel = modelRepository.find('exchange:crypto-out')

    const cryptoInAmount = modelRepository.find('exchange:crypto-in:amount');
    const cryptoOutAmount = modelRepository.find('exchange:crypto-out:amount');

    exchangeFeeModel.bind(cryptoInAmount, (_, newValue) => {
      exchangeFeeModel.updateModel(`${preCheckInput(newValue * exchangeFee)} ${cryptoInModel.value.short} / ${preCheckInput(cryptoOutAmount.value * exchangeFee)} ${cryptoOutModel.value.short}`);
    });

    exchangeFeeModel.bind(cryptoOutAmount, (_, newValue) => {
      exchangeFeeModel.updateModel(`${preCheckInput(cryptoInAmount.value * exchangeFee)} ${cryptoInModel.value.short} / ${preCheckInput(newValue * exchangeFee)} ${cryptoOutModel.value.short}`);
    });
  }

  modelRepository.addModels(exchangeFeeModel);
}

export default createExchangeFeeModel;
