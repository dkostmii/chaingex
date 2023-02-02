import { Model, ModelRepository } from "../base.js";

import { exchangeFee } from "../../config/exchanger.js";
import { preCheckInput } from "../../fn/numbers/pre-check.js";

/**
 * 
 * @param {ModelRepository} modelRepository 
 */
function createExchangeToBePaidModel(modelRepository) {
  if (!(modelRepository instanceof ModelRepository)) {
    throw new TypeError('Expected modelRepository to be instance of ModelRepository.');
  }

  const cryptoInModel = modelRepository.find('exchange:crypto-in');
  const cryptoInAmountModel = modelRepository.find('exchange:crypto-in:amount');

  const initialState = {
    short: cryptoInModel.value.short,
    amount: preCheckInput((1 + exchangeFee) * cryptoInAmountModel.value),
  };

  const exchangeToBePaidModel = new Model('exchange:to-be-paid', 'Exchange To Be Paid', initialState);

  /**
   * 
   * @param {Model} someModel 
   * @param {Model} someAmountModel 
   */
  const updateThisModel = (someModel, someAmountModel) => {
    exchangeToBePaidModel.updateModel({
      short: someModel.value.short,
      amount: preCheckInput((1 + exchangeFee) * someAmountModel.value),
    });
  };

  cryptoInModel.addEventListener('update', () => {
    updateThisModel(cryptoInModel, cryptoInAmountModel);
  });

  cryptoInAmountModel.addEventListener('update', () => {
    updateThisModel(cryptoInModel, cryptoInAmountModel);
  });

  const exchangeToBePaidShortModel = new Model(
    'exchange:to-be-paid:short',
    'Exchange To Be Paid Short',
    exchangeToBePaidModel.value.short
  );

  const exchangeToBePaidAmountModel = new Model(
    'exchange:to-be-paid:amount',
    'Exchange To Be Paid Amount',
    exchangeToBePaidModel.value.amount
  );

  exchangeToBePaidShortModel.bind(exchangeToBePaidModel, (_, newValue) => {
    exchangeToBePaidShortModel.updateModel(newValue.short);
  });

  exchangeToBePaidAmountModel.bind(exchangeToBePaidModel, (_, newValue) => {
    exchangeToBePaidAmountModel.updateModel(newValue.amount);
  });

  modelRepository.addModels(exchangeToBePaidModel, exchangeToBePaidShortModel, exchangeToBePaidAmountModel);
}

export default createExchangeToBePaidModel;