import { ModelRepository } from "../../model/base.js";

import { minAmountCryptoOrCurrency } from "../../model/transformers/amount.js";

import { preCheckInput } from "../../fn/numbers/pre-check.js";

/**
 * 
 * @param {ModelRepository} modelRepository 
 */
function currencyAmountView(modelRepository) {
  if (!(modelRepository instanceof ModelRepository)) {
    throw new TypeError('Expected modelRepository to be instance of ModelRepository.');
  }

  const cryptoModel = modelRepository.find('buy-sell:crypto');
  const currencyModel = modelRepository.find('buy-sell:currency');

  const cryptoAmount = modelRepository.find('buy-sell:crypto:amount');
  const currencyAmount = modelRepository.find('buy-sell:currency:amount');

  const cryptoAmountInput = document.querySelector('input[data-model="buy-sell:crypto:amount"]');
  const currencyAmountInput = document.querySelector('input[data-model="buy-sell:currency:amount"]');

  cryptoAmountInput.step = 'any';
  currencyAmountInput.step = 'any';

  cryptoModel.addEventListener('update', (_, newValue) => {
    cryptoAmountInput.min = preCheckInput(minAmountCryptoOrCurrency(newValue.price));
  });

  currencyModel.addEventListener('update', (_, newValue) => {
    currencyAmountInput.min = preCheckInput(minAmountCryptoOrCurrency(newValue.price));
  });

  cryptoAmountInput.addEventListener('blur', e => {
    cryptoAmount.updateModel(e.target.value);
  });

  currencyAmountInput.addEventListener('blur', e => {
    currencyAmount.updateModel(e.target.value);
  });

  cryptoAmount.addEventListener('update', (_, newValue) => {
    cryptoAmountInput.value = preCheckInput(newValue);
    const cryptoAmountMessage = cryptoAmountInput.parentElement.nextElementSibling;
    if (!cryptoAmountMessage.classList.contains('message')) {
      throw new Error('Expected .message element');
    }

    // TODO: Apply i18n
    if ('clampApplied' in cryptoAmount && cryptoAmount.clampApplied) {
      cryptoAmountMessage.innerHTML = `Min amount: ${preCheckInput(cryptoAmount.clampRange[0])} ${cryptoModel.value.short}`;
      cryptoAmountMessage.classList.remove('hidden');
    } else {
      cryptoAmountMessage.innerHTML = "";
      cryptoAmountMessage.classList.add('hidden');
    }
  });

  currencyAmount.addEventListener('update', (_, newValue) => {
    currencyAmountInput.value = preCheckInput(newValue);
    const currencyAmountMessage = currencyAmountInput.parentElement.nextElementSibling;
    if (!currencyAmountMessage.classList.contains('message')) {
      throw new Error('Expected .message element');
    }

    // TODO: Apply i18n
    if ('clampApplied' in currencyAmount && currencyAmount.clampApplied) {

      currencyAmountMessage.innerHTML = `Min amount: ${preCheckInput(currencyAmount.clampRange[0])} ${currencyModel.value.short}`;
      currencyAmountMessage.classList.remove('hidden');
    } else {
      currencyAmountMessage.innerHTML = "";
      currencyAmountMessage.classList.add('hidden');
    }
  });

  const amountInputListener = () => {
    const cryptoAmountMessage = cryptoAmountInput.parentElement.nextElementSibling;
  
    if (!cryptoAmountMessage.classList.contains('message')) {
      throw new Error('Expected .message element');
    }

    const currencyAmountMessage = currencyAmountInput.parentElement.nextElementSibling;

    if (!currencyAmountMessage.classList.contains('message')) {
      throw new Error('Expected .message element');
    }

    if (cryptoAmountMessage.innerHTML) {
      cryptoAmountMessage.innerHTML = "";
      cryptoAmountMessage.classList.add('hidden');
    }

    if (currencyAmountMessage.innerHTML) {
      currencyAmountMessage.innerHTML = "";
      currencyAmountMessage.classList.add('hidden');
    }
  };

  cryptoAmountInput.addEventListener('input', amountInputListener);

  currencyAmountInput.addEventListener('input', amountInputListener);
}

export default currencyAmountView;