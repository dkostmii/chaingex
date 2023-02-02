import { Model, ModelRepository } from "../base.js";

import { buySellFee } from "../../config/exchanger.js";
import { inverse } from "../buySellOperation.js";
import { preCheckInput } from "../../fn/numbers/pre-check.js";

/**
 * 
 * @param {ModelRepository} modelRepository 
 */
function createBuySellToBePaidModel(modelRepository) {
  if (!(modelRepository instanceof ModelRepository)) {
    throw new TypeError('Expected modelRepository to be instance of ModelRepository.');
  }

  const buySellOperationModel = modelRepository.find('operation:buy-sell');

  const cryptoModel = modelRepository.find('buy-sell:crypto');
  const currencyModel = modelRepository.find('buy-sell:currency');

  const cryptoAmountModel = modelRepository.find('buy-sell:crypto:amount');
  const currencyAmountModel = modelRepository.find('buy-sell:currency:amount');

  let initialState = {
    short: currencyModel.value.short,
    amount: preCheckInput(buySellFee * currencyAmountModel.value),
  };

  if (buySellOperationModel.value === inverse('buy')) {
    initialState = {
      short: cryptoModel.value.short,
      amount: preCheckInput((1 + buySellFee) * cryptoAmountModel.value),
    };
  }

  const buySellToBePaidModel = new Model('buy-sell:to-be-paid', 'Buy / Sell To Be Paid', initialState);

  /**
   * 
   * @param {Model} someModel 
   * @param {Model} someAmountModel 
   */
  const updateThisModel = (someModel, someAmountModel) => {
    buySellToBePaidModel.updateModel({
      short: someModel.value.short,
      amount: preCheckInput((1 + buySellFee) * someAmountModel.value),
    });
  };

  buySellOperationModel.addEventListener('update', (_, newValue) => {
    if (newValue === inverse(inverse('buy'))) {
      updateThisModel(currencyModel, currencyAmountModel);
    } else if (newValue === inverse('buy')) {
      updateThisModel(cryptoModel, cryptoAmountModel);
    }
  });

  currencyModel.addEventListener('update', () => {
    if (buySellOperationModel.value === inverse(inverse('buy'))) {
      updateThisModel(currencyModel, currencyAmountModel);
    }
  });

  cryptoModel.addEventListener('update', () => {
    if (buySellOperationModel.value === inverse('buy')) {
      updateThisModel(cryptoModel, cryptoAmountModel);
    }
  });

  currencyAmountModel.addEventListener('update', () => {
    if (buySellOperationModel.value === inverse(inverse('buy'))) {
      updateThisModel(currencyModel, currencyAmountModel);
    }
  });

  cryptoAmountModel.addEventListener('update', () => {
    if (buySellOperationModel.value === inverse('buy')) {
      updateThisModel(cryptoModel, cryptoAmountModel);
    }
  });

  const buySellToBePaidShortModel = new Model(
    'buy-sell:to-be-paid:short',
    'Buy / Sell To Be Paid Short', 
    buySellToBePaidModel.value.short);

  const buySellToBePaidAmountModel = new Model(
    'buy-sell:to-be-paid:amount',
    'Buy / Sell To Be Paid Amount',
    buySellToBePaidModel.value.amount
  );

  buySellToBePaidShortModel.bind(buySellToBePaidModel, (_, newValue) => {
    buySellToBePaidShortModel.updateModel(newValue.short);
  });

  buySellToBePaidAmountModel.bind(buySellToBePaidModel, (_, newValue) => {
    buySellToBePaidAmountModel.updateModel(newValue.amount);
  });

  modelRepository.addModels(buySellToBePaidModel, buySellToBePaidShortModel, buySellToBePaidAmountModel);
}

export default createBuySellToBePaidModel;