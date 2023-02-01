import { Model, ModelRepository } from "./base.js";

import { isNumber } from "../fn/identity/index.js";

import animationInterval from "../fn/animationInteval.js";

import { getTimestamp } from "../fn/time.js";

/**
 * 
 * @param {number} secondsInterval Default value for countdown.
 * @param {ModelRepository} modelRepository 
 */
function createCountdownModel(secondsInteval, modelRepository) {
  isNumber(secondsInteval).nonNegative().throw('secondsInteval');

  if (!(modelRepository instanceof ModelRepository)) {
    throw new TypeError('Expected modelRepository to be instance of ModelRepository.');
  }

  const countdownModel = new Model('countdown', 'Countdown', secondsInteval);

  countdownModel.addAction('decrement', () => {
    countdownModel.updateModel(countdownModel.value - 1);
  });

  countdownModel.valueGetterFn = value => getTimestamp(value, "minutes");

  /**
   * Use {@link controller.abort()} method to cancel {@link animationInterval}.
   */
  const controller = new AbortController();

  animationInterval(1000, controller.signal, _ => {
    if (countdownModel.value > 0) {
      countdownModel.doAction('decrement');
    }
  });

  countdownModel.addEventListener('update', (_, newValue) => {
    if (newValue === 0) {
      controller.abort();
    }
  });

  modelRepository.addModels(countdownModel);
}

export default createCountdownModel;
