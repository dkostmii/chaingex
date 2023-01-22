import { ModelRepository } from "../../model/base.js";

/**
 * 
 * @param {ModelRepository} modelRepository 
 */
function currencyShortView(modelRepository) {
  if (!(modelRepository instanceof ModelRepository)) {
    throw new TypeError('Expected modelRepository to be instance of ModelRepository.');
  }

  const cryptoShortModel = modelRepository.find('buy-sell:crypto:short');
  const currencyShortModel = modelRepository.find('buy-sell:currency:short');
  const buySellOperationModel = modelRepository.find('operation:buy-sell');

  buySellOperationModel.addEventListener('update', () => {
    const cryptoShortElements = document.querySelectorAll('*[data-model="buy-sell:crypto:short"]');
    [...cryptoShortElements].forEach(el => {
      el.innerHTML = cryptoShortModel.value;
    });

    const currencyShortElements = document.querySelectorAll('*[data-model="buy-sell:currency:short"]');
    [...currencyShortElements].forEach(el => {
      el.innerHTML = currencyShortModel.value;
    });
  });

  cryptoShortModel.addEventListener('update', (_, newValue) => {
    const cryptoShortElements = document.querySelectorAll('span[data-model="buy-sell:crypto:short"]');
    [...cryptoShortElements].forEach(el => {
      el.innerHTML = newValue;
    });
  });

  currencyShortModel.addEventListener('update', (_, newValue) => {
    const currencyShortElements = document.querySelectorAll('span[data-model="buy-sell:currency:short"]');
    [...currencyShortElements].forEach(el => {
      el.innerHTML = newValue;
    });
  });
}

export default currencyShortView;
