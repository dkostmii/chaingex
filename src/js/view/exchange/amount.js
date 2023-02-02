import { ModelRepository } from "../../model/base.js";
import { minAmountCryptoOrCurrency } from "../../model/transformers/amount.js";
import { preCheckInput } from "../../fn/numbers/pre-check.js";

import getTranslation from "../../i18n/get.js";

/**
 * 
 * @param {ModelRepository} modelRepository 
 */
function cryptoAmountView(modelRepository) {
  if (!(modelRepository instanceof ModelRepository)) {
    throw new TypeError('Expected modelRepository to be instance of ModelRepository.');
  }

  const cryptoInModel = modelRepository.find('exchange:crypto-in');
  const cryptoOutModel = modelRepository.find('exchange:crypto-out');

  const cryptoInAmount = modelRepository.find('exchange:crypto-in:amount');
  const cryptoOutAmount = modelRepository.find('exchange:crypto-out:amount');

  const cryptoInAmountInput = document.querySelector('input[data-model="exchange:crypto-in:amount"]');
  const cryptoOutAmountInput = document.querySelector('input[data-model="exchange:crypto-out:amount"]');

  const currentLanguage = modelRepository.find('language').value;

  cryptoInAmountInput.step = 'any';
  cryptoOutAmountInput.step = 'any';

  cryptoInModel.addEventListener('update', (_, newValue) => {
    cryptoInAmountInput.min = preCheckInput(minAmountCryptoOrCurrency(newValue.price));
  });

  cryptoOutModel.addEventListener('update', (_, newValue) => {
    cryptoOutAmountInput.min = preCheckInput(minAmountCryptoOrCurrency(newValue.price));
  });

  cryptoInAmountInput.addEventListener('blur', e => {
    cryptoInAmount.updateModel(e.target.value);
  });

  cryptoOutAmountInput.addEventListener('blur', e => {
    cryptoOutAmount.updateModel(e.target.value);
  });

  const cryptoInAmountMessage = cryptoInAmountInput.parentElement.nextElementSibling;
  if (!cryptoInAmountMessage.classList.contains('message')) {
    throw new Error('Expected .message element');
  }
  const cryptoOutAmountMessage = cryptoOutAmountInput.parentElement.nextElementSibling;
  if (!cryptoOutAmountMessage.classList.contains('message')) {
    throw new Error('Expected .message element');
  }

  cryptoInAmount.addEventListener('update', (_, newValue) => {
    cryptoInAmountInput.value = preCheckInput(newValue);

    if ('clampApplied' in cryptoInAmount && cryptoInAmount.clampApplied) {
      const amount = `${preCheckInput(cryptoInAmount.clampRange[0])} ${cryptoInModel.value.short}`;

      cryptoInAmountMessage.innerHTML = getTranslation('min-amount', currentLanguage, { amount });
      cryptoInAmountMessage.classList.remove('hidden');
    } else {
      cryptoInAmountMessage.innerHTML = "";
      cryptoInAmountMessage.classList.add('hidden');
    }

    const amountElements = Array.from(document.querySelectorAll('*[data-model="exchange:crypto-in:amount"]'));
    amountElements.forEach(el => {
      el.innerHTML = preCheckInput(newValue);
    });
  });

  cryptoOutAmount.addEventListener('update', (_, newValue) => {
    cryptoOutAmountInput.value = preCheckInput(newValue);

    // TODO: Apply i18n
    if ('clampApplied' in cryptoOutAmount && cryptoOutAmount.clampApplied) {
      const amount = `${preCheckInput(cryptoOutAmount.clampRange[0])} ${cryptoOutModel.value.short}`;

      cryptoOutAmountMessage.innerHTML = getTranslation('min-amount', currentLanguage, { amount });
      cryptoOutAmountMessage.classList.remove('hidden');
    } else {
      cryptoOutAmountMessage.innerHTML = "";
      cryptoOutAmountMessage.classList.add('hidden');
    }
  });

  cryptoInAmountInput.addEventListener('input', () => {
    if (cryptoInAmountMessage.innerHTML) {
      cryptoInAmountMessage.innerHTML = "";
      cryptoInAmountMessage.classList.add('hidden');
    }

    if (cryptoOutAmountMessage.innerHTML) {
      cryptoOutAmountMessage.innerHTML = "";
      cryptoOutAmountMessage.classList.add('hidden');
    }
  });

  cryptoOutAmountInput.addEventListener('input', () => {
    if (cryptoInAmountMessage.innerHTML) {
      cryptoInAmountMessage.innerHTML = "";
      cryptoInAmountMessage.classList.add('hidden');
    }

    if (cryptoOutAmountMessage.innerHTML) {
      cryptoOutAmountMessage.innerHTML = "";
      cryptoOutAmountMessage.classList.add('hidden');
    }
  });
}

export default cryptoAmountView;