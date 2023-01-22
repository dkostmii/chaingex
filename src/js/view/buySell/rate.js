import { ModelRepository } from "../../model/base.js";

/**
 * 
 * @param {ModelRepository} modelRepository 
 */
function buySellRateView(modelRepository) {
  if (!(modelRepository instanceof ModelRepository)) {
    throw new TypeError('Expected modelRepository to be instance of ModelRepository.');
  }

  const buySellRateModel = modelRepository.find('buy-sell:rate');

  const buySellRateElement = document.querySelector('*[data-model="buy-sell:rate"]');

  buySellRateModel.addEventListener('update', () => {
    buySellRateElement.innerHTML = buySellRateModel.getValue();
  });
}

export default buySellRateView;