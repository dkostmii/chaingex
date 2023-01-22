import { ModelRepository } from "../../model/base.js";

/**
 * 
 * @param {ModelRepository} modelRepository 
 */
function exchangeFeeView(modelRepository) {
  if (!(modelRepository instanceof ModelRepository)) {
    throw new TypeError('Expected modelRepository to be instance of ModelRepository.');
  }

  const exchangeFeeModel = modelRepository.find('exchange:fee');

  const exchangeFeeElement = document.querySelector('*[data-model="exchange:fee"]');

  exchangeFeeModel.addEventListener('update', (_, newValue) => {
    if (!newValue) {
      // TODO: Apply i18n
      exchangeFeeElement.innerHTML = 'No extra fees';
    } else {
      exchangeFeeElement.innerHTML = newValue;
    }
  });
}

export default exchangeFeeView;