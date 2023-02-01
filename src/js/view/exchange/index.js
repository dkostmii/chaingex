import cryptoSelectView from "./crypto.js";
import cryptoAddressView from "./address.js";
import swapView from "./swap.js";
import cryptoAmountView from "./amount.js";
import cryptoNetworkView from "./network.js";
import exchangeFeeView from "./fee.js";
import exchangeRateView from "./rate.js";
import cryptoShortView from "./short.js";

import getTranslation from "../../i18n/get.js";

import sendMessage from "../../requests/sendMessage.js";

import { ModelRepository } from "../../model/base.js";
import popupView from "../popup.js";

/**
 * 
 * @param {ModelRepository} modelRepository 
 */
function exchangeView(modelRepository) {
  if (!(modelRepository instanceof ModelRepository)) {
    throw new TypeError('Expected modelRepository to be instance of ModelRepository.');
  }

  cryptoSelectView(modelRepository);
  cryptoAddressView(modelRepository);
  swapView(modelRepository);
  cryptoAmountView(modelRepository);
  cryptoNetworkView(modelRepository);
  exchangeFeeView(modelRepository);
  exchangeRateView(modelRepository);
  cryptoShortView(modelRepository);

  const exchangeModel = modelRepository.find('exchange');

  const exchangeModels = modelRepository.findByPartial('exchange:');

  const exchangeButton = document.querySelector('#exchange-submit');

  const resultModel = modelRepository.find('result');

  const operationStepModel = modelRepository.find('operation-step');

  const currentLanguage = modelRepository.find('language').value;

  operationStepModel.addEventListener('update', (oldValue, newValue) => {
    if (oldValue === newValue && newValue === 1) {
      if (!exchangeModels.every(m => m.validate())) {
        return;
      }
  
      sendMessage(exchangeModel.getValue())
        .then(result => {
          resultModel.updateModel(result);
          popupView(modelRepository);
        });
    }
  });

  exchangeButton.innerHTML = (
    getTranslation('send-button', currentLanguage) + " " +
    getTranslation('operation-exchange', currentLanguage)
  );
}

export default exchangeView;
