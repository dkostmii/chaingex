import { Model, ModelRepository } from "../base.js";

import { buySellFee } from "../../config/exchanger.js";

import { preCheckInput } from "../../fn/numbers/pre-check.js";

/**
 * 
 * @param {ModelRepository} modelRepository 
 */
function createBuySellFeeModel(modelRepository) {
  if (!(modelRepository instanceof ModelRepository)) {
    throw new TypeError('Expected modelRepository to be instance of ModelRepository.');
  }

  const buySellFeeModel = new Model('buy-sell:fee', 'Buy / Sell fee', null);

  if (buySellFee < 0) {
    throw new Error('Expected buySellFee to be non-negative.')
  }

  if (buySellFee > 0) {
    const cryptoModel = modelRepository.find('buy-sell:crypto');
    const currencyModel = modelRepository.find('buy-sell:currency');
    const cryptoAmount = modelRepository.find('buy-sell:crypto:amount');
    const currrencyAmount = modelRepository.find('buy-sell:currency:amount');

    buySellFeeModel.bind(cryptoAmount, (_, newValue) => {
      buySellFeeModel.updateModel(`${preCheckInput(newValue * buySellFee)} ${cryptoModel.value.short} / ${preCheckInput(currrencyAmount.value * buySellFee)} ${currencyModel.value.short}`);
    });

    buySellFeeModel.bind(currrencyAmount, (_, newValue) => {
      buySellFeeModel.updateModel(`${preCheckInput(cryptoAmount.value * buySellFee)} ${cryptoModel.value.short} / ${preCheckInput(newValue * buySellFee)} ${currencyModel.value.short}`);
    });
  }

  modelRepository.addModels(buySellFeeModel);
}

export default createBuySellFeeModel;