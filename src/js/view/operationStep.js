import { ModelRepository } from "../model/base.js";

import toggleButtons from "../dom-manipulations/exchanger/buttons.js";
import toggleTabsDisabled from "../dom-manipulations/exchanger/tabs-disabled.js";
import toggleExchangerBlockWrapper from "../dom-manipulations/exchanger/wrapper.js";

/**
 * 
 * @param {ModelRepository} modelRepository 
 */
function createOperationStepView(modelRepository) {
  if (!(modelRepository instanceof ModelRepository)) {
    throw new TypeError('Expected modelRepository to be instance of ModelRepository.');
  }

  const operationStep = modelRepository.find('operation-step');

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

  const mediaHandle = window.matchMedia('(min-width: 78.75em)');
  
  const toggleTabs = toggleTabsDisabled();

  const mediaChangedListener = e => {
    toggleButtons(e.matches);
    toggleTabs(e.matches);
    toggleExchangerBlockWrapper(e.matches);

    if (e.matches) {
      // Single step
      if (operationStep.value !== 1) {
        operationStep.updateModel(1);
      }
    } else {
      // Multiple steps
      operationStep.updateModel(0);
    }
  };

  if (mediaHandle.matches) {
    mediaChangedListener(mediaHandle);
  }

  mediaHandle.addEventListener('change', mediaChangedListener);
}

export default createOperationStepView;
