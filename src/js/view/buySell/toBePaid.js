import { ModelRepository } from "../../model/base.js";

/**
 * 
 * @param {ModelRepository} modelRepository 
 */
function createBuySellToBePaidView(modelRepository) {
  if (!(modelRepository instanceof ModelRepository)) {
    throw new TypeError('Expected modelRepository to be instance of ModelRepository.');
  }

  const toBePaidShortElements = document.querySelectorAll('*[data-model="buy-sell:to-be-paid:short"]');
  const toBePaidAmountElements = document.querySelectorAll('*[data-model="buy-sell:to-be-paid:amount"]');

  const toBePaidShort = modelRepository.find('buy-sell:to-be-paid:short');
  const toBePaidAmount = modelRepository.find('buy-sell:to-be-paid:amount');

  toBePaidShort.addEventListener('update', (_, newValue) => {
    [...toBePaidShortElements].forEach(el => { el.innerHTML = newValue; });
  });

  toBePaidAmount.addEventListener('update', (_, newValue) => {
    [...toBePaidAmountElements].forEach(el => { el.innerHTML = newValue; });
  });
}

export default createBuySellToBePaidView;