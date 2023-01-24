import { Model, ModelRepository } from "../base.js";

import { validateCryptoAddress } from '../validators/crypto.js';

import { sanitizeCryptoAddress } from "../transformers/crypto.js";

/**
 * 
 * @param {ModelRepository} modelRepository 
 */
function createCryptoAddressModels(modelRepository) {
  if (!(modelRepository instanceof ModelRepository)) {
    throw new TypeError('Expected modelRepository to be instance of ModelRepository.');
  }

  const cryptoInModel = modelRepository.find('exchange:crypto-in');
  const cryptoOutModel = modelRepository.find('exchange:crypto-out');

  const cryptoInAddress = new Model(
    'exchange:crypto-in:address',
    'Crypto In Address',
    cryptoInModel.value.address
  );

  cryptoInAddress.validatorFn = validateCryptoAddress;
  cryptoInAddress.valueGetterFn = value => `${cryptoInModel.value.short} address: ${value}`;
  cryptoInAddress.updateFn = value => sanitizeCryptoAddress(value);

  cryptoInAddress.bind(cryptoInModel, (_, newValue) => {
    cryptoInAddress.valueGetterFn = value => `${newValue.short} address: ${value}`;
    cryptoInAddress.updateModel(newValue.address);
  });
  
  const cryptoOutAddress = new Model(
    'exchange:crypto-out:address',
    'Crypto Out address',
    ''
  );

  cryptoOutAddress.validatorFn = validateCryptoAddress;
  cryptoOutAddress.valueGetterFn = value => `${cryptoOutModel.value.short} address: ${value}`;
  cryptoOutAddress.updateFn = value => sanitizeCryptoAddress(value);

  cryptoOutAddress.bind(cryptoOutModel, (_, newValue) => {
    cryptoOutAddress.valueGetterFn = value => `${newValue.short} address: ${value}`;
  });

  modelRepository.addModels(cryptoInAddress, cryptoOutAddress);
}

export default createCryptoAddressModels;
