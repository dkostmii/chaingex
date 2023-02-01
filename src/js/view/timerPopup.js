import { ModelRepository } from "../model/base.js";

/**
 * 
 * @param {ModelRepository} modelRepository 
 */
function createTimerPopupView(modelRepository) {
  if (!(modelRepository instanceof ModelRepository)) {
    throw new TypeError('Expected modelRepository to be instance of ModelRepository.');
  }

  const countdownModel = modelRepository.find('countdown');

  const popupScreenEl = document.querySelector('.popup__screen');

  if (!popupScreenEl) {
    throw new ElementNotFoundError('.popup__screen');
  }

  const popupTimerEl = document.querySelector('.popup__timer');

  const continueButton = popupTimerEl.querySelector('.button-continue');

  continueButton.addEventListener('click', () => {
    countdownModel.doAction('reload');
    popupScreenEl.classList.add('hidden');
    popupTimerEl.classList.add('hidden');
  });

  countdownModel.addEventListener('update', (_, newValue) => {
    if (newValue === 0) {
      popupScreenEl.classList.remove('hidden');
      popupTimerEl.classList.remove('hidden');
    }
  });
}

export default createTimerPopupView;