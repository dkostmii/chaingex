import cryptoSelectView from "./crypto.js";
import cryptoAddressView from "./address.js";
import swapView from "./swap.js";
import cryptoAmountView from "./amount.js";
import cryptoNetworkView from "./network.js";
import exchangeFeeView from "./fee.js";
import exchangeRateView from "./rate.js";
import cryptoShortView from "./short.js";

import { ModelRepository } from "../../model/base.js";

/**
 * 
 * @param {ModelRepository} modelRepository 
 */
function exchangeView(modelRepository) {
  if (!(modelRepository instanceof ModelRepository)) {
    throw new TypeError('Expected modelRepository to be instance of ModelRepository.');
  }

  cryptoSelectView(modelRepository);
  cryptoAddressView(modelRepository);
  swapView(modelRepository);
  cryptoAmountView(modelRepository);
  cryptoNetworkView(modelRepository);
  exchangeFeeView(modelRepository);
  exchangeRateView(modelRepository);
  cryptoShortView(modelRepository);

  const exchangeModel = modelRepository.find('exchange');

  const exchangeModels = modelRepository.findByPartial('exchange:');

  const exchangeButton = document.querySelector('*[type="submit"][data-model="exchange"]');

  exchangeButton.addEventListener('click', e => {
    e.preventDefault();

    if (!exchangeModels.every(m => m.validate())) {
      return;
    }

    alert(exchangeModel.getValue());
  });
}

export default exchangeView;
