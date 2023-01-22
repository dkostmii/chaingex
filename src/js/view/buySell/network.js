import { ModelRepository } from "../../model/base.js";

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

  cryptoNetwork.addEventListener('update', (_, newValue) => {
    if (!newValue) {
      [...cryptoNetworkElements].forEach(el => {
        el.parentElement.classList.add('hidden');
        el.parentElement.parentElement.classList.add('hidden');
        el.innerHTML = "";
      });
    } else {
      [...cryptoNetworkElements].forEach(el => {
        el.parentElement.classList.remove('hidden');
        el.parentElement.parentElement.classList.remove('hidden');
        el.innerHTML = newValue;
      });
    }
  });
}

export default cryptoNetworkView;
