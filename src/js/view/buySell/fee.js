import { ModelRepository } from "../../model/base.js";

/**
 * 
 * @param {ModelRepository} modelRepository 
 */
function buySellFeeView(modelRepository) {
  if (!(modelRepository instanceof ModelRepository)) {
    throw new TypeError('Expected modelRepository to be instance of ModelRepository.');
  }

  const buySellFeeModel = modelRepository.find('buy-sell:fee');

  const buySellFeeElement = document.querySelector('*[data-model="buy-sell:fee"]');

  buySellFeeModel.addEventListener('update', (_, newValue) => {
    if (!newValue) {
      // TODO: Apply i18n
      buySellFeeElement.innerHTML = 'No extra fees';
    } else {
      buySellFeeElement.innerHTML = newValue;
    }
  });
}

export default buySellFeeView;