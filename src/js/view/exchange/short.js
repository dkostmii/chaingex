import { ModelRepository } from "../../model/base.js";

/**
 * 
 * @param {ModelRepository} modelRepository 
 */
function cryptoShortView(modelRepository) {
  if (!(modelRepository instanceof ModelRepository)) {
    throw new TypeError('Expected modelRepository to be instance of ModelRepository.');
  }

  const cryptoInShortModel = modelRepository.find('exchange:crypto-in:short');
  const cryptoOutShortModel = modelRepository.find('exchange:crypto-out:short');

  const cryptoInShortElements = document.querySelectorAll('*[data-model="exchange:crypto-in:short"]');
  const cryptoOutShortElements = document.querySelectorAll('*[data-model="exchange:crypto-out:short"]');

  cryptoInShortModel.addEventListener('update', (_, newValue) => {
    [...cryptoInShortElements].forEach(el => {
      el.innerHTML = newValue;
    });
  });

  cryptoOutShortModel.addEventListener('update', (_, newValue) => {
    [...cryptoOutShortElements].forEach(el => {
      el.innerHTML = newValue;
    });
  });
}

export default cryptoShortView;