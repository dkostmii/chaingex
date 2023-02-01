import { ModelRepository } from "../model/base.js";

import toggleButtons from "../dom-manipulations/exchanger/buttons.js";
import toggleTabsDisabled from "../dom-manipulations/exchanger/tabs-disabled.js";
import toggleExchangerBlockWrapper from "../dom-manipulations/exchanger/wrapper.js";
import getTranslation from "../i18n/get.js";

/**
 * 
 * @param {ModelRepository} modelRepository 
 */
function createOperationStepView(modelRepository) {
  if (!(modelRepository instanceof ModelRepository)) {
    throw new TypeError('Expected modelRepository to be instance of ModelRepository.');
  }

  const operationStep = modelRepository.find('operation-step');
  const operationBuySell = modelRepository.find('operation:buy-sell');

  const operationStepButtons = Array.from(
    document.querySelectorAll('*[data-model="operation-step"][data-modelaction]'));

  operationStepButtons.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      operationStep.doAction(btn.dataset.modelaction);
    });
  });

  operationStep.addEventListener('update', (_, newValue) => {
    const operationStepElements = Array.from(
      document.querySelectorAll('*[data-model="operation-step"][data-modelvalue]'));

    if (!Array.isArray(operationStepElements)) {
      throw new TypeError('Expected Array.');
    }

    [...operationStepElements].forEach(el => {
      if (parseInt(el.dataset.modelvalue) !== newValue) {
        el.classList.remove('current');
      } else {
        el.classList.add('current');
      }
    });
  });

  const blockTabButtons = document.querySelectorAll('#buy-sell-submit, #exchange-submit');
  const currentLanguage = modelRepository.find('language').value;

  const mediaHandle = window.matchMedia('(min-width: 78.75em)');
  
  const toggleTabs = toggleTabsDisabled();

  const exchangeButton = document.querySelector("#exchange-submit");
  const stepExchangeButton = document.querySelector("#exchange-submit-operation-step");

  const setupSteps = e => {
    if (e.matches) {
      // Single step
      if (operationStep.value !== 1) {
        operationStep.updateModel(1);
      }

      exchangeButton.innerHTML = (
        getTranslation('send-button', currentLanguage) + " " +
        getTranslation('operation-exchange', currentLanguage)
      );
      operationBuySell.updateModel(operationBuySell.value);
    } else {
      // Multiple steps
      operationStep.updateModel(0);

      stepExchangeButton.innerHTML = (
        getTranslation('send-button', currentLanguage) + " " +
        getTranslation('operation-exchange', currentLanguage)
      );

      blockTabButtons.forEach(btn => {
        btn.innerHTML = getTranslation('next-button', currentLanguage);
      });
    }
  }

  const mediaChangedListener = e => {
    toggleButtons(e.matches);
    toggleTabs(e.matches);
    toggleExchangerBlockWrapper(e.matches);
    setupSteps(e);
  };

  if (mediaHandle.matches) {
    mediaChangedListener(mediaHandle);
  } else {
    setupSteps(mediaHandle);
  }

  mediaHandle.addEventListener('change', mediaChangedListener);
}

export default createOperationStepView;
