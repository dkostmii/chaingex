import { Model, ModelRepository } from "../base.js";

/**
 * 
 * @param {ModelRepository} modelRepository 
 */
function createCryptoInNetworkModel(modelRepository) {
  if (!(modelRepository instanceof ModelRepository)) {
    throw new TypeError('Expected modelRepository to be instance of ModelRepository.');
  }

  const cryptoInModel = modelRepository.find('exchange:crypto-in');

  const cryptoInNetwork = new Model('exchange:crypto-in:network', 'Crypto In Network', cryptoInModel.value.network);

  cryptoInNetwork.bind(cryptoInModel, (_, newValue) => {
    cryptoInNetwork.updateModel(newValue.network);
  });

  modelRepository.addModels(cryptoInNetwork);
}

export default createCryptoInNetworkModel;
