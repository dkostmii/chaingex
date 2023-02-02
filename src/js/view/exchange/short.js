import { ModelRepository } from "../../model/base.js";

import getTranslation from '../../i18n/get.js';

/**
 * 
 * @param {ModelRepository} modelRepository 
 */
function cryptoShortView(modelRepository) {
  if (!(modelRepository instanceof ModelRepository)) {
    throw new TypeError('Expected modelRepository to be instance of ModelRepository.');
  }

  const currentLanguage = modelRepository.find('language').value;

  const cryptoInShortModel = modelRepository.find('exchange:crypto-in:short');
  const cryptoOutShortModel = modelRepository.find('exchange:crypto-out:short');

  cryptoInShortModel.addEventListener('update', (_, newValue) => {
    const cryptoInShortElements = document.querySelectorAll('*[data-model="exchange:crypto-in:short"]');
    [...cryptoInShortElements].forEach(el => {
      if ('i18n' in el.dataset) {
        el.innerHTML = getTranslation(el.dataset.i18n, currentLanguage, { short: newValue });
      } else {
        el.innerHTML = newValue;
      }
    });
  });
  
  cryptoOutShortModel.addEventListener('update', (_, newValue) => {
    const cryptoOutShortElements = document.querySelectorAll('*[data-model="exchange:crypto-out:short"]');
    [...cryptoOutShortElements].forEach(el => {
      if ('i18n' in el.dataset) {
        el.innerHTML = getTranslation(el.dataset.i18n, currentLanguage, { short: newValue });
      } else {
        el.innerHTML = newValue;
      }
    });
  });
}

export default cryptoShortView;