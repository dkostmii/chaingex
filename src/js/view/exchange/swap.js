import { ModelRepository } from "../../model/base.js";

/**
 * 
 * @param {ModelRepository} modelRepository 
 */
function swapView(modelRepository) {
  if (!(modelRepository instanceof ModelRepository)) {
    throw new TypeError('Expected modelRepository to be instance of ModelRepository.');
  }

  const exchangeModel = modelRepository.find('exchange');

  const swapButton = document.querySelector('.reverse__button[data-model="exchange"][data-modelaction]');

  swapButton.addEventListener('click', e => {
    e.preventDefault();
    exchangeModel.doAction(swapButton.dataset.modelaction);
  });
}

export default swapView;