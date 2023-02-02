import { ModelRepository } from "../../model/base.js";
import { inverse } from "../../model/buySellOperation.js";

import { preCheckInput } from "../../fn/numbers/pre-check.js";

/**
 * 
 * @param {ModelRepository} modelRepository 
 */
function swapView(modelRepository) {
  if (!(modelRepository instanceof ModelRepository)) {
    throw new TypeError('Expected modelRepository to be instance of ModelRepository.');
  }

  const buySellOperationModel = modelRepository.find('operation:buy-sell');

  const cryptoModel = modelRepository.find('buy-sell:crypto:short');
  const currencyModel = modelRepository.find('buy-sell:currency:short');

  const swapButton = document.querySelector('.reverse__button[data-model="operation:buy-sell"][data-modelaction]');

  swapButton.addEventListener('click', e => {
    e.preventDefault();
    buySellOperationModel.doAction(swapButton.dataset.modelaction);
  });
  
  const cryptoAmount = modelRepository.find('buy-sell:crypto:amount');
  const currencyAmount = modelRepository.find('buy-sell:currency:amount');

  buySellOperationModel.addEventListener('update', (oldValue, newValue) => {
    const amountElements = document.querySelectorAll('.buy-sell__to-be-paid *[data-model$=":amount"]');
    const shortElements = document.querySelectorAll('.buy-sell__to-be-paid *[data-model$=":short"]');

    if (newValue === inverse('buy')) {
      [...shortElements].forEach(short => {
        short.dataset.model = "buy-sell:crypto:short";
      });

      [...amountElements].forEach(amount => {
        amount.dataset.model = "buy-sell:crypto:amount";
  
        amount.innerHTML = preCheckInput(cryptoAmount.value);
      });
    } else if (newValue === inverse(inverse('buy'))) {
      [...shortElements].forEach(short => {
        short.dataset.model = "buy-sell:currency:short";
      });
      
      [...amountElements].forEach(amount => {
        amount.dataset.model = "buy-sell:currency:amount";
  
        amount.innerHTML = preCheckInput(currencyAmount.value);
      });
    }

    if (oldValue !== newValue || newValue !== inverse(inverse('buy'))) {
      // Swap inputs
      const cryptoInputGroup = document.querySelector('div[data-model="buy-sell:crypto"]').parentElement;
      const currencyInputGroup = document.querySelector('div[data-model="buy-sell:currency"]').parentElement;
      const cryptoLabel = cryptoInputGroup.querySelector('.block-tab__label');
      const currencyLabel = currencyInputGroup.querySelector('.block-tab__label');

      const tempLabelCaption = cryptoLabel.innerHTML;
      cryptoLabel.innerHTML = currencyLabel.innerHTML;
      currencyLabel.innerHTML = tempLabelCaption;

      const cryptoPrevEl = cryptoInputGroup.previousElementSibling;
      const currencyPrevEl = currencyInputGroup.previousElementSibling;

      const parent = cryptoInputGroup.parentElement;

      cryptoInputGroup.parentElement.removeChild(cryptoInputGroup);
      currencyInputGroup.parentElement.removeChild(currencyInputGroup);

      if (cryptoPrevEl) {
        cryptoPrevEl.insertAdjacentElement('afterend', currencyInputGroup);
      } else {
        parent.prepend(currencyInputGroup);
      }

      if (currencyPrevEl) {
        currencyPrevEl.insertAdjacentElement('afterend', cryptoInputGroup);
      } else {
        parent.prepend(cryptoInputGroup);
      }

      // Swap address and card
      const isBuy = buySellOperationModel.value === inverse(inverse('buy'));
      const isSell = buySellOperationModel.value === inverse('buy');

      // Labels
      const cryptoAddressInputLabelSelector = '.block-tab__label[data-model="buy-sell:crypto:short"]';
      const currencyCardInputLabelSelector = '.block-tab__label[data-model="buy-sell:currency:short"]';

      let userInputLabel = document.querySelector(
        isBuy ?
        currencyCardInputLabelSelector :
        cryptoAddressInputLabelSelector
      );

      let copyInputLabel = document.querySelector(
        isSell ?
        currencyCardInputLabelSelector :
        cryptoAddressInputLabelSelector
      );

      const tempLabelDataset = copyInputLabel.dataset.model;
      copyInputLabel.dataset.model = userInputLabel.dataset.model;
      userInputLabel.dataset.model = tempLabelDataset;

      if (isBuy) {
        copyInputLabel.dataset.i18n = 'copy-card';
        userInputLabel.dataset.i18n = 'your-address';
      }
      if (isSell) {
        copyInputLabel.dataset.i18n = 'copy-address';
        userInputLabel.dataset.i18n = 'your-card';
      }

      cryptoModel.updateModel(cryptoModel.value);
      currencyModel.updateModel(currencyModel.value);

      // Inputs
      const cryptoAddressInputSelector = 'input[data-model="buy-sell:crypto:address"]';
      const currencyCardInputSelector = 'input[data-model="buy-sell:currency:card"]';

      const userInput = document.querySelector(
        isBuy ?
        currencyCardInputSelector :
        cryptoAddressInputSelector
      );
    
      const copyInput = document.querySelector(
        isSell ?
        currencyCardInputSelector :
        cryptoAddressInputSelector
      );

      const tempInputDataset = copyInput.dataset.model;
      copyInput.dataset.model = userInput.dataset.model;
      userInput.dataset.model = tempInputDataset;
    }
  })
}

export default swapView;