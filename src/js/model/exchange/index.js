import { Model, ModelRepository } from "../base.js";
import createCryptoAddressModels from "./address.js";
import createCryptoAmountModels from "./amount.js";
import createCryptoModels from "./crypto.js";
import createExchangeFeeModel from "./fee.js";
import createCryptoInNetworkModel from "./network.js";
import createExchangeRateModel from "./rate.js";
import createCryptoShortModel from "./short.js";

import getExchangeCryptos from '../../fn/getExchangeCryptos.js';
import messageTemplates from "../../config/message.js";

/**
 * 
 * @param {ModelRepository} modelRepository 
 */
function createExchangeModel(modelRepository) {
  if (!(modelRepository instanceof ModelRepository)) {
    throw new TypeError('Expected modelRepository to be instance of ModelRepository.');
  }

  createCryptoModels(modelRepository);
  createCryptoAmountModels(modelRepository);
  createCryptoAddressModels(modelRepository);
  createCryptoInNetworkModel(modelRepository);
  createCryptoShortModel(modelRepository);
  createExchangeFeeModel(modelRepository);
  createExchangeRateModel(modelRepository);

  const cryptoInModel = modelRepository.find('exchange:crypto-in');
  const cryptoOutModel = modelRepository.find('exchange:crypto-out');
  const cryptoInAmount = modelRepository.find('exchange:crypto-in:amount');
  const cryptoOutAmount = modelRepository.find('exchange:crypto-out:amount');
  const cryptoInAddress = modelRepository.find('exchange:crypto-in:address');
  const cryptoOutAddress = modelRepository.find('exchange:crypto-out:address');

  const exchangeModel = new Model('exchange', 'Exchange', null);

  const cryptos = modelRepository.find('cryptos').value;

  exchangeModel.addAction('swap', () => {
    const {
      cryptoIn,
      cryptoOut,
    } = getExchangeCryptos(cryptoOutModel.value.id, cryptoInModel.value.id, cryptos);

    cryptoInModel.updateModel(cryptoIn);
    cryptoOutModel.updateModel(cryptoOut);
  });

  exchangeModel.valueGetterFn = () => {
    return [
      messageTemplates.operationType('Exchange'),
      messageTemplates.cryptocurrency(
        messageTemplates.currencyPair(cryptoInModel.getValue(), cryptoOutModel.getValue())),
      cryptoInAmount.getValue(),
      cryptoOutAmount.getValue(),
      cryptoInAddress.getValue(),
      cryptoOutAddress.getValue(),
    ].join('\n');
  };

  modelRepository.addModels(exchangeModel);
}

export default createExchangeModel;