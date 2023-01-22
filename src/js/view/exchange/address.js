import { ModelRepository } from "../../model/base.js";

import getTranslation from "../../i18n/get.js";

/**
 * 
 * @param {ModelRepository} modelRepository 
 */
function cryptoAddressView(modelRepository) {
  if (!(modelRepository instanceof ModelRepository)) {
    throw new TypeError('Expected modelRepository to be instance of ModelRepository.');
  }

  const currentLanguage = modelRepository.find('language').value;

  const cryptoOutModel = modelRepository.find('exchange:crypto-out');

  const cryptoInAddress = modelRepository.find('exchange:crypto-in:address');
  const cryptoOutAddress = modelRepository.find('exchange:crypto-out:address');

  const cryptoInAddressInput = document.querySelector('input[data-model="exchange:crypto-in:address"]');
  const cryptoOutAddressInput = document.querySelector('input[data-model="exchange:crypto-out:address"]');
  
  const cryptoInMessage = cryptoInAddressInput.parentElement.nextElementSibling;
  
  if (!cryptoInMessage.classList.contains('message')) {
    throw new Error('Expected .message element');
  }

  cryptoInAddress.addEventListener('update', (_, newValue) => {
    cryptoInAddressInput.value = newValue;

    cryptoInAddressInput.parentElement.classList.remove('copied');
    cryptoInMessage.innerHTML = '';
    cryptoInMessage.classList.add('hidden');
  });

  cryptoOutAddress.addEventListener('update', (_, newValue) => {
    cryptoOutAddressInput.value = newValue;
  });

  const cryptoInFocusListener = () => {
    navigator.clipboard.writeText(cryptoInAddressInput.value);
    cryptoInAddressInput.parentElement.classList.add('copied');
    cryptoInMessage.innerHTML = getTranslation('copied-message', currentLanguage);
    cryptoInMessage.classList.remove('hidden');
  };

  cryptoInAddressInput.parentElement.addEventListener('click', cryptoInFocusListener);
  cryptoInAddressInput.addEventListener('focus', cryptoInFocusListener);

  /**
  cryptoInAddressInput.addEventListener('blur', () => {
    cryptoInMessage.innerHTML = '';
    cryptoInAddressInput.parentElement.classList.remove('copied');
    cryptoInMessage.classList.add('hidden');
  })
  */

  cryptoOutAddressInput.addEventListener('input', e => {
    cryptoOutAddress.updateModel(e.target.value);
  });

  const cryptoOutMessage = cryptoOutAddressInput.parentElement.nextElementSibling;

  if (!cryptoOutMessage.classList.contains('message')) {
    throw new Error('Expected .message element');
  }

  cryptoOutAddress.addEventListener('invalid', () => {
    if (document.activeElement !== cryptoOutAddressInput) {
      cryptoOutAddressInput.parentElement.classList.add('invalid');

      // TODO: Apply i18n
      cryptoOutMessage.innerHTML = getTranslation('invalid-address-message', currentLanguage);
      cryptoOutMessage.classList.add('invalid');
      cryptoOutMessage.classList.remove('hidden');
    }
  });

  cryptoOutAddressInput.addEventListener('blur', () => {
    cryptoOutAddress.validate();
  });

  const cryptoOutAddressInputFocusListener = () => {
    cryptoOutAddressInput.parentElement.classList.remove('invalid');
    cryptoOutMessage.innerHTML = ''
    cryptoOutMessage.classList.remove('invalid');
    cryptoOutMessage.classList.add('hidden');
  };

  cryptoOutAddressInput.addEventListener('focus', cryptoOutAddressInputFocusListener);
  cryptoOutModel.addEventListener('update', cryptoOutAddressInputFocusListener);
}

export default cryptoAddressView;