import { ModelRepository } from "../../model/base.js";
import { inverse } from "../../model/buySellOperation.js";

/**
 * 
 * @param {ModelRepository} modelRepository 
 */
function currencyCardAddressView(modelRepository) {
  if (!(modelRepository instanceof ModelRepository)) {
    throw new TypeError('Expected modelRepository to be instance of ModelRepository.');
  }

  const cryptoAddress = modelRepository.find('buy-sell:crypto:address');
  const currencyCard = modelRepository.find('buy-sell:currency:card');

  const buySellOperationModel = modelRepository.find('operation:buy-sell');

  const cryptoAddressInputSelector = 'input[data-model="buy-sell:crypto:address"]';
  const currencyCardInputSelector = 'input[data-model="buy-sell:currency:card"]';

  const userInput = document.querySelector(
    buySellOperationModel.value === inverse(inverse('buy')) ?
    cryptoAddressInputSelector :
    currencyCardInputSelector
  );

  const copyInput = document.querySelector(
    buySellOperationModel.value === inverse('buy') ?
    cryptoAddressInputSelector :
    currencyCardInputSelector
  );

  const userInputMessage = userInput.parentElement.nextElementSibling;
  const copyInputMessage = copyInput.parentElement.nextElementSibling;

  if (!userInputMessage.classList.contains('message')) {
    throw new Error('Expected .message element');
  }

  if (!copyInputMessage.classList.contains('message')) {
    throw new Error('Expected .message element');
  }

  const copyInputFocusListener = () => {
    navigator.clipboard.writeText(copyInput.value);
    copyInputMessage.innerHTML = 'Copied.';
    copyInput.parentElement.classList.add('copied');
    copyInputMessage.classList.remove('hidden');
  };

  const copyInputBlurListener = () => {
    copyInputMessage.innerHTML = '';
    copyInputMessage.classList.add('hidden');
    copyInput.parentElement.classList.remove('copied');
  };

  const userInputInputListener = e => {
    if (buySellOperationModel.value === inverse(inverse('buy'))) {
      cryptoAddress.updateModel(e.target.value);
    } else if (buySellOperationModel.value === inverse('buy')) {
      currencyCard.updateModel(e.target.value);
    }
  };

  const userInputFocusListener = () => {
    userInput.parentElement.classList.remove('invalid');
    userInputMessage.innerHTML = ''
    userInputMessage.classList.remove('invalid');
    userInputMessage.classList.add('hidden');
  };

  const userInputBlurListener = () => {
    if (buySellOperationModel.value === inverse(inverse('buy'))) {
      cryptoAddress.validate();
    } else if (buySellOperationModel.value === inverse('buy')) {
      currencyCard.validate();
    }
  };

  copyInput.parentElement.addEventListener('click', copyInputFocusListener);
  copyInput.addEventListener('focus', copyInputFocusListener);
  //copyInput.addEventListener('blur', copyInputBlurListener);

  userInput.addEventListener('blur', userInputBlurListener);
  userInput.addEventListener('focus', userInputFocusListener);
  userInput.addEventListener('input', userInputInputListener);

  cryptoAddress.addEventListener('update', (_, newValue) => {
    if (buySellOperationModel.value === 'sell') {
      copyInput.value = newValue;
      copyInputBlurListener();
    } else {
      userInput.value = newValue;
    }
  });

  currencyCard.addEventListener('update', (_, newValue) => {
    if (buySellOperationModel.value === 'buy') {
      copyInput.value = newValue;
      copyInputBlurListener();
    } else {
      userInput.value = newValue;
    }
  });

  buySellOperationModel.addEventListener('update', () => {
    userInputFocusListener();
  });

  currencyCard.addEventListener('invalid', () => {
    const currencyCardInput = document.querySelector(currencyCardInputSelector);
    const currencyMessage = currencyCardInput.parentElement.nextElementSibling;

    if (document.activeElement !== currencyCardInput) {
      currencyCardInput.parentElement.classList.add('invalid');

      // TODO: Apply i18n
      currencyMessage.innerHTML = 'Invalid card number.';
      currencyMessage.classList.remove('hidden');
      currencyMessage.classList.add('invalid');
    }
  });

  cryptoAddress.addEventListener('invalid', () => {
    const cryptoAddressInput = document.querySelector(cryptoAddressInputSelector);
    const cryptoMessage = cryptoAddressInput.parentElement.nextElementSibling;

    if (document.activeElement !== cryptoAddressInput) {
      cryptoAddressInput.parentElement.classList.add('invalid');

      // TODO: Apply i18n
      cryptoMessage.innerHTML = 'Invalid crypto address. Please, do not write it by hand, copy from clipboard instead.'
      cryptoMessage.classList.remove('hidden');
      cryptoMessage.classList.add('invalid');
    }
  });
}

export default currencyCardAddressView;