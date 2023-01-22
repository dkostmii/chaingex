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

  const cryptoNetwork = modelRepository.find('buy-sell:crypto:network');

  const cryptoNetworkElements = document.querySelectorAll('*[data-model="buy-sell:crypto:network"]');

  const currentLanguage = modelRepository.find('language').value;

  cryptoNetwork.addEventListener('update', (_, newValue) => {
    if (!newValue) {
      [...cryptoNetworkElements].forEach(el => {
        el.classList.add('hidden');
        el.parentElement.classList.add('hidden');
        el.innerHTML = "";
      });
    } else {
      [...cryptoNetworkElements].forEach(el => {
        el.classList.remove('hidden');
        el.parentElement.classList.remove('hidden');
        el.innerHTML = getTranslation('net', currentLanguage, { net: newValue });
      });
    }
  });
}

export default cryptoNetworkView;
