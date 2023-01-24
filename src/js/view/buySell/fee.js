import { ModelRepository } from "../../model/base.js";

import getTranslation from "../../i18n/get.js";

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

  const currentLanguage = modelRepository.find('language').value;

  buySellFeeModel.addEventListener('update', (_, newValue) => {
    if (!newValue) {
      buySellFeeElement.innerHTML = getTranslation('no-extra-fees', currentLanguage);
    } else {
      buySellFeeElement.innerHTML = getTranslation('fee', currentLanguage, { fee: newValue });
    }
  });
}

export default buySellFeeView;