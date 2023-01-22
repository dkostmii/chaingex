import iconInputSelect from "../../dom-manipulations/input-select/icon.js";
import {
  currencyAsOption,
  optionAsCurrency
} from '../../dom-manipulations/input-select/transformers/currency.js';

import getExchangeCryptos from "../../fn/getExchangeCryptos.js";

import { inputSelectClassName } from "../../dom-manipulations/input-select/base.js";

import { ModelRepository } from "../../model/base.js";

/**
 * 
 * @param {ModelRepository} modelRepository 
 */
function cryptoSelectView(modelRepository) {
  if (!(modelRepository instanceof ModelRepository)) {
    throw new TypeError('Expected modelRepository to be instance of ModelRepository.');
  }

  const cryptos = modelRepository.find('cryptos').value;
  
  const cryptoInModel = modelRepository.find('exchange:crypto-in');
  const cryptoOutModel = modelRepository.find('exchange:crypto-out');

  const getCryptos = (cryptoInId, cryptoOutId) => getExchangeCryptos(cryptoInId, cryptoOutId, cryptos);

  const cryptoInSelect = document.querySelector(`.${inputSelectClassName}[data-model="exchange:crypto-in"]`);
  const cryptoOutSelect = document.querySelector(`.${inputSelectClassName}[data-model="exchange:crypto-out"]`);

  const {
    cryptoIn,
    cryptoOut,
    restCryptosIn,
    restCryptosOut,
  } = getCryptos(cryptoInModel.value.id, cryptoOutModel.value.id);

  const cryptoInSelectChangeListener = (_, newValue) => {
    const newCryptoIn = optionAsCurrency(newValue, cryptos);

    cryptoInModel.updateModel(newCryptoIn);
  };

  const cryptoOutSelectChangeListener = (_, newValue) => {
    const newCryptoOut = optionAsCurrency(newValue, cryptos);

    cryptoOutModel.updateModel(newCryptoOut);
  };

  iconInputSelect(
    cryptoInSelect, currencyAsOption(cryptoIn), restCryptosIn.map(currencyAsOption))
  .addEventListener('change', cryptoInSelectChangeListener);

  iconInputSelect(
    cryptoOutSelect, currencyAsOption(cryptoOut), restCryptosOut.map(currencyAsOption)
  ).addEventListener('change', cryptoOutSelectChangeListener);

  cryptoInModel.addEventListener('update', (_, newValue) => {
    const {
      cryptoOut,
      cryptoIn,
      restCryptosIn,
      restCryptosOut,
    } = getCryptos(newValue.id, cryptoOutModel.value.id);

    iconInputSelect(
      cryptoInSelect, currencyAsOption(cryptoIn), restCryptosIn.map(currencyAsOption)
    ).addEventListener('change', cryptoInSelectChangeListener);

    iconInputSelect(
      cryptoOutSelect, currencyAsOption(cryptoOut), restCryptosOut.map(currencyAsOption)
    ).addEventListener('change', cryptoOutSelectChangeListener);
  });

  cryptoOutModel.addEventListener('update', (_, newValue) => {
    const {
      cryptoOut,
      cryptoIn,
      restCryptosIn,
      restCryptosOut,
    } = getCryptos(cryptoInModel.value.id, newValue.id);

    iconInputSelect(
      cryptoInSelect, currencyAsOption(cryptoIn), restCryptosIn.map(currencyAsOption)
    ).addEventListener('change', cryptoInSelectChangeListener);

    iconInputSelect(
      cryptoOutSelect, currencyAsOption(cryptoOut), restCryptosOut.map(currencyAsOption)
    ).addEventListener('change', cryptoOutSelectChangeListener);
  });
}

export default cryptoSelectView;