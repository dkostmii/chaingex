import { ModelRepository } from "../../model/base.js";

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

  cryptoInNetwork.addEventListener('update', (_, newValue) => {
    if (!newValue) {
      [...cryptoInNetworkElements].forEach(el => {
        el.parentElement.classList.add('hidden');
        el.parentElement.parentElement.classList.add('hidden');
        el.innerHTML = "";
      });
    } else {
      [...cryptoInNetworkElements].forEach(el => {
        el.parentElement.classList.remove('hidden');
        el.parentElement.parentElement.classList.remove('hidden');
        el.innerHTML = newValue;
      });
    }
  })
}

export default cryptoNetworkView;