import { Model, ModelRepository } from "../base.js";

/**
 * 
 * @param {ModelRepository} modelRepository 
 */
function createCryptoShortModel(modelRepository) {
  if (!(modelRepository instanceof ModelRepository)) {
    throw new TypeError('Expected modelRepository to be instance of ModelRepository.');
  }

  const cryptoInModel = modelRepository.find('exchange:crypto-in');
  const cryptoOutModel = modelRepository.find('exchange:crypto-out');

  const cryptoInShort = new Model('exchange:crypto-in:short', 'Crypto In Short', cryptoInModel.value.short);
  const cryptoOutShort = new Model('exchange:crypto-out:short', 'Crypto Out Short', cryptoOutModel.value.short);

  cryptoInShort.bind(cryptoInModel, (_, newValue) => {
    cryptoInShort.updateModel(newValue.short);
  });

  cryptoOutShort.bind(cryptoOutModel, (_, newValue) => {
    cryptoOutShort.updateModel(newValue.short);
  });

  modelRepository.addModels(cryptoInShort, cryptoOutShort);
}

export default createCryptoShortModel;
