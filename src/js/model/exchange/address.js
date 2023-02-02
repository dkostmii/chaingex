import { Model, ModelRepository } from "../base.js";

import { validateCryptoAddress } from '../validators/crypto.js';

import { sanitizeCryptoAddress } from "../transformers/crypto.js";

import messageTemplates from "../../config/message.js";

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
  cryptoInAddress.valueGetterFn = value => messageTemplates.address(value, cryptoInModel.value.short);
  cryptoInAddress.updateFn = value => sanitizeCryptoAddress(value);
  
  cryptoInAddress.bind(cryptoInModel, (_, newValue) => {
    cryptoInAddress.valueGetterFn = value => messageTemplates.address(value, newValue.short);
    cryptoInAddress.updateModel(newValue.address);
  });
  
  const cryptoOutAddress = new Model(
    'exchange:crypto-out:address',
    'Crypto Out address',
    ''
  );
  
  cryptoOutAddress.validatorFn = value => validateCryptoAddress(value) && value !== cryptoInAddress.value;
  cryptoOutAddress.valueGetterFn = value => messageTemplates.address(value, cryptoOutModel.value.short);

  cryptoOutAddress.updateFn = value => sanitizeCryptoAddress(value);

  cryptoOutAddress.bind(cryptoOutModel, (_, newValue) => {
    cryptoOutAddress.valueGetterFn = value => messageTemplates.address(value, newValue.short);
  });

  modelRepository.addModels(cryptoInAddress, cryptoOutAddress);
}

export default createCryptoAddressModels;
