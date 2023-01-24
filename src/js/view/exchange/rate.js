import { ModelRepository } from "../../model/base.js";

/**
 * 
 * @param {ModelRepository} modelRepository 
 */
function exchangeRateView(modelRepository) {
  if (!(modelRepository instanceof ModelRepository)) {
    throw new TypeError('Expected modelRepository to be instance of ModelRepository.');
  }

  const exchangeRateModel = modelRepository.find('exchange:rate');

  const exchangeRateElement = document.querySelector('*[data-model="exchange:rate"]');

  exchangeRateModel.addEventListener('update', () => {
    exchangeRateElement.innerHTML = exchangeRateModel.getValue();
  });
}

export default exchangeRateView;