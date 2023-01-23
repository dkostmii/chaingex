import { ModelRepository } from "../model/base.js";
import { FLS } from "../files/functions.js";
import ElementNotFoundError from "../errors/elementNotFound.js";

/**
 * 
 * @param {ModelRepository} modelRepository 
 */
function popupView(modelRepository) {
  if (!(modelRepository instanceof ModelRepository)) {
    throw new TypeError('Expected modelRepository to be instance of ModelRepository.');
  }

  const resultModel = modelRepository.find('result');

  const popupScreenEl = document.querySelector('.popup__screen');

  if (!popupScreenEl) {
    throw new ElementNotFoundError('.popup__screen');
  }

  popupScreenEl.classList.remove('hidden');

  if (resultModel.value) {
    FLS('Result: ok');

    const popupSuccessEl = document.querySelector('.popup__success');
    popupSuccessEl.classList.remove('hidden');

    const continueButton = popupSuccessEl.querySelector('.button-continue');
    continueButton.addEventListener('click', () => {
      popupSuccessEl.classList.add('hidden');
      popupScreenEl.classList.add('hidden');
    });
  } else {
    FLS('Result: false');

    const popupFailureEl = document.querySelector('.popup__failure');
    popupFailureEl.classList.remove('hidden');

    const refreshButton = popupFailureEl.querySelector('.button-refresh');

    refreshButton.addEventListener('click', () => {
      window.location.reload();
    });

  }
}

export default popupView;