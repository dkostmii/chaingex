import { ModelRepository } from "../../model/base.js";
import { inverse } from "../../model/buySellOperation.js";
import currencyAmountView from "./amount.js";
import currencyCardAddressView from "./cardAddress.js";
import currencySelectView from "./currency.js";
import buySellFeeView from "./fee.js";
import cryptoNetworkView from "./network.js";
import buySellRateView from "./rate.js";
import currencyShortView from "./short.js";
import swapView from "./swap.js";

import sendMessage from "../../requests/sendMessage.js";
import popupView from "../popup.js";
import getTranslation from "../../i18n/get.js";

/**
 * 
 * @param {ModelRepository} modelRepository 
 */
function buySellView(modelRepository) {
  if (!(modelRepository instanceof ModelRepository)) {
    throw new TypeError('Expected modelRepository to be instance of ModelRepository.');
  }

  currencySelectView(modelRepository);
  currencyAmountView(modelRepository);
  swapView(modelRepository);
  currencyCardAddressView(modelRepository);
  currencyShortView(modelRepository);
  cryptoNetworkView(modelRepository);
  buySellFeeView(modelRepository);
  buySellRateView(modelRepository);

  const buySellModel = modelRepository.find('buy-sell');

  const buySellModels = modelRepository.findByPartial('buy-sell:');

  const buySellButton = document.querySelector('#buy-sell-submit');
  const stepBuySellButton = document.querySelector("#buy-sell-submit-operation-step");

  const buySellOperationModel = modelRepository.find('operation:buy-sell');

  const currentLanguage = modelRepository.find('language').value;

  const operationStep = modelRepository.find('operation-step');
  
  buySellOperationModel.addEventListener('update', (_, newValue) => {
    let caption = null;
    if (newValue === inverse(inverse('buy'))) {
      caption = (
        getTranslation('send-button', currentLanguage) + " " +
        getTranslation('operation-buy', currentLanguage));
    } else if (newValue === inverse('buy')) {
      caption = (
        getTranslation('send-button', currentLanguage) + " " +
        getTranslation('operation-sell', currentLanguage));
    }

    if (operationStep.value === 1) {
      if (buySellButton.tagName === 'button'.toUpperCase()) {
        buySellButton.innerHTML = caption;
      } else if (buySellButton.tagName === 'input'.toUpperCase()) {
        buySellButton.value = caption;
      }
    }

    if (stepBuySellButton.tagName === 'button'.toUpperCase()) {
      stepBuySellButton.innerHTML = caption;
    } else if (stepBuySellButton.tagName === 'input'.toUpperCase()) {
      stepBuySellButton.value = caption;
    }
  });

  const resultModel = modelRepository.find('result');

  const operationStepModel = modelRepository.find('operation-step');

  operationStepModel.addEventListener('update', (oldValue, newValue) => {
    if (oldValue === newValue && newValue === 1) {
      if (!buySellModels.every(m => m.validate())) {
        return;
      }
      
      sendMessage(buySellModel.getValue())
        .then(result => {
          resultModel.updateModel(result);
          popupView(modelRepository);
        });
    }
  })
}

export default buySellView;