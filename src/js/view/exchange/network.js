import { ModelRepository } from "../../model/base.js";

import getTranslation from "../../i18n/get.js";

/**
 * 
 * @param {ModelRepository} modelRepository 
 */
function cryptoNetworkView(modelRepository) {
  if (!(modelRepository instanceof ModelRepository)) {
    throw new TypeError('Expected modelRepository to be instance of ModelRepository.');
  }

  const cryptoInNetwork = modelRepository.find('exchange:crypto-in:network');

  const cryptoInNetworkElements = document.querySelectorAll('*[data-model="exchange:crypto-in:network"]');

  const currentLanguage = modelRepository.find('language').value;

  cryptoInNetwork.addEventListener('update', (_, newValue) => {
    if (!newValue) {
      [...cryptoInNetworkElements].forEach(el => {
        el.classList.add('hidden');
        el.parentElement.classList.add('hidden');
        el.innerHTML = "";
      });
    } else {
      [...cryptoInNetworkElements].forEach(el => {
        el.classList.remove('hidden');
        el.parentElement.classList.remove('hidden');
        el.innerHTML = getTranslation('net', currentLanguage, { net: newValue });
      });
    }
  })
}

export default cryptoNetworkView;