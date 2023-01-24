import { Model, ModelRepository } from "../base.js";
import { inverse } from "../buySellOperation.js";

/**
 * 
 * @param {ModelRepository} modelRepository 
 */
function createCryptoNetworkModel(modelRepository) {
  if (!(modelRepository instanceof ModelRepository)) {
    throw new TypeError('Expected modelRepository to be instance of ModelRepository.');
  }

  const cryptoModel = modelRepository.find('buy-sell:crypto');
  const buySellOperationModel = modelRepository.find('operation:buy-sell');

  const cryptoNetwork = new Model('buy-sell:crypto:network', 'Crypto Network', "");

  cryptoNetwork.bind(buySellOperationModel, (_, newValue) => {
    if (newValue === inverse('buy')) {
      cryptoNetwork.updateModel(cryptoModel.value.network);
    } else if (newValue === inverse(inverse('buy'))) {
      cryptoNetwork.updateModel("");
    }
  })

  cryptoNetwork.bind(cryptoModel, (_, newValue) => {
    if (buySellOperationModel.value === inverse('buy')) {
      cryptoNetwork.updateModel(newValue.network);
    }
  });

  modelRepository.addModels(cryptoNetwork);
}

export default createCryptoNetworkModel;
