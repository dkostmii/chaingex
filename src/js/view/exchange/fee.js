import { ModelRepository } from "../../model/base.js";

import getTranslation from "../../i18n/get.js";

/**
 * 
 * @param {ModelRepository} modelRepository 
 */
function exchangeFeeView(modelRepository) {
  if (!(modelRepository instanceof ModelRepository)) {
    throw new TypeError('Expected modelRepository to be instance of ModelRepository.');
  }

  const currentLanguage = modelRepository.find('language').value;

  const exchangeFeeModel = modelRepository.find('exchange:fee');

  const exchangeFeeElement = document.querySelector('*[data-model="exchange:fee"]');

  exchangeFeeModel.addEventListener('update', (_, newValue) => {
    if (!newValue) {
      exchangeFeeElement.innerHTML = getTranslation('no-extra-fees', currentLanguage);
    } else {
      exchangeFeeElement.innerHTML = getTranslation('fee', currentLanguage, { fee: newValue });
    }
  });
}

export default exchangeFeeView;