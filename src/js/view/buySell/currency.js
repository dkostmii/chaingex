import getBuySellCurrencies from "../../fn/getBuySellCurrencies.js";
import { ModelRepository } from "../../model/base.js";

import iconInputSelect from '../../dom-manipulations/input-select/icon.js';
import {
  currencyAsOption,
  optionAsCurrency
} from '../../dom-manipulations/input-select/transformers/currency.js';

import { inputSelectClassName } from "../../dom-manipulations/input-select/base.js";

/**
 * 
 * @param {ModelRepository} modelRepository 
 */
function currencySelectView(modelRepository) {
  if (!(modelRepository instanceof ModelRepository)) {
    throw new TypeError('Expected modelRepository to be instance of ModelRepository.');
  }

  const cryptos = modelRepository.find('cryptos').value;
  const currencies = modelRepository.find('currencies').value;
  
  const cryptoModel = modelRepository.find('buy-sell:crypto');
  const currencyModel = modelRepository.find('buy-sell:currency');

  const getCurrencies = (cryptoId, currencyId) => getBuySellCurrencies(cryptoId, currencyId, cryptos, currencies);

  const cryptoSelect = document.querySelector(`.${inputSelectClassName}[data-model="buy-sell:crypto"]`);
  const currencySelect = document.querySelector(`.${inputSelectClassName}[data-model="buy-sell:currency"]`);

  const {
    crypto,
    currency,
    restCryptos,
    restCurrencies,
  } = getCurrencies(cryptoModel.value.id, currencyModel.value.id);

  const cryptoSelectChangeListener = (_, newValue) => {
    const newCrypto = optionAsCurrency(newValue, cryptos);

    cryptoModel.updateModel(newCrypto);
  };

  const currencySelectChangeListener = (_, newValue) => {
    const newCurrency = optionAsCurrency(newValue, currencies);

    currencyModel.updateModel(newCurrency);
  };

  iconInputSelect(
    cryptoSelect, currencyAsOption(crypto), restCryptos.map(currencyAsOption))
  .addEventListener('change', cryptoSelectChangeListener);

  iconInputSelect(
    currencySelect, currencyAsOption(currency), restCurrencies.map(currencyAsOption)
  ).addEventListener('change', currencySelectChangeListener);

  cryptoModel.addEventListener('update', (_, newValue) => {
    const {
      crypto,
      currency,
      restCryptos,
      restCurrencies,
    } = getCurrencies(newValue.id, currencyModel.value.id);

    iconInputSelect(
      cryptoSelect, currencyAsOption(crypto), restCryptos.map(currencyAsOption)
    ).addEventListener('change', cryptoSelectChangeListener);

    iconInputSelect(
      currencySelect, currencyAsOption(currency), restCurrencies.map(currencyAsOption)
    ).addEventListener('change', currencySelectChangeListener);
  });

  currencyModel.addEventListener('update', (_, newValue) => {
    const {
      crypto,
      currency,
      restCryptos,
      restCurrencies,
    } = getCurrencies(cryptoModel.value.id, newValue.id);

    iconInputSelect(
      cryptoSelect, currencyAsOption(crypto), restCryptos.map(currencyAsOption)
    ).addEventListener('change', cryptoSelectChangeListener);

    iconInputSelect(
      currencySelect, currencyAsOption(currency), restCurrencies.map(currencyAsOption)
    ).addEventListener('change', currencySelectChangeListener);
  });
}

export default currencySelectView;