import { Model, ModelRepository } from "../base.js";

/**
 * 
 * @param {ModelRepository} modelRepository 
 */
function createCurrencyShortModel(modelRepository) {
  if (!(modelRepository instanceof ModelRepository)) {
    throw new TypeError('Expected modelRepository to be instance of ModelRepository.');
  }

  const cryptoModel = modelRepository.find('buy-sell:crypto');
  const currencyModel = modelRepository.find('buy-sell:currency');

  const cryptoShort = new Model('buy-sell:crypto:short', 'Crypto Short', cryptoModel.value.short);
  const currencyShort = new Model('buy-sell:currency:short', 'Currency Short', currencyModel.value.short);

  cryptoShort.bind(cryptoModel, (_, newValue) => {
    cryptoShort.updateModel(newValue.short);
  });

  currencyShort.bind(currencyModel, (_, newValue) => {
    currencyShort.updateModel(newValue.short);
  });

  modelRepository.addModels(cryptoShort, currencyShort);
}

export default createCurrencyShortModel;