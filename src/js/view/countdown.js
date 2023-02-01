import { ModelRepository } from "../model/base.js";
import createTimerPopupView from "./timerPopup.js";

/**
 * 
 * @param {ModelRepository} modelRepository 
 */
function createCountdownView(modelRepository) {
  if (!(modelRepository instanceof ModelRepository)) {
    throw new TypeError('Expected modelRepository to be instance of ModelRepository.');
  }

  const countdownModel = modelRepository.find('countdown');
  
  const countdownMinutesEl = document.querySelector('*[data-model="countdown:mm"]');
  const countdownSecondsEl = document.querySelector('*[data-model="countdown:ss"]');
  
  countdownModel.addEventListener('update', () => {
    const [mm, ss] = countdownModel.getValue().split(":");
    countdownMinutesEl.innerHTML = mm;
    countdownSecondsEl.innerHTML = ss;
  });

  createTimerPopupView(modelRepository);
}

export default createCountdownView;