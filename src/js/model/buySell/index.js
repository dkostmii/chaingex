import { Model, ModelRepository } from "../base.js";
import createCurrencyAmountModels from "./amount.js";
import createCurrencyCardOrAddressModel from "./cardAddress.js";
import createCurrencyModels from "./currency.js";
import createBuySellFeeModel from "./fee.js";
import createCryptoNetworkModel from "./network.js";
import createBuySellRateModel from "./rate.js";
import createCurrencyShortModel from "./short.js";
import createBuySellToBePaidModel from "./toBePaid.js";

import messageTemplates from "../../config/message.js";

/**
 * 
 * @param {ModelRepository} modelRepository 
 */
function createBuySellModel(modelRepository) {
  if (!(modelRepository instanceof ModelRepository)) {
    throw new TypeError('Expected modelRepository to be instance of ModelRepository.');
  }

  createCurrencyModels(modelRepository);
  createCurrencyAmountModels(modelRepository);
  createCurrencyCardOrAddressModel(modelRepository);
  createCryptoNetworkModel(modelRepository);
  createCurrencyShortModel(modelRepository);
  createBuySellFeeModel(modelRepository);
  createBuySellRateModel(modelRepository);
  createBuySellToBePaidModel(modelRepository);

  const buySellModel = new Model('buy-sell', 'Buy / Sell', null);

  const cryptoModel = modelRepository.find('buy-sell:crypto');
  const currencyModel = modelRepository.find('buy-sell:currency');
  const cryptoAmount = modelRepository.find('buy-sell:crypto:amount');
  const currencyAmount = modelRepository.find('buy-sell:currency:amount');
  const cryptoAddress = modelRepository.find('buy-sell:crypto:address');
  const currencyCard = modelRepository.find('buy-sell:currency:card');
  const buySellOperation = modelRepository.find('operation:buy-sell');

  buySellModel.valueGetterFn = () => {
    return [
      messageTemplates.operationType(buySellOperation.getValue()),
      messageTemplates.cryptocurrency(cryptoModel.getValue()),
      messageTemplates.fiatCurrency(currencyModel.getValue()),
      cryptoAmount.getValue(),
      currencyAmount.getValue(),
      cryptoAddress.getValue(),
      currencyCard.getValue(),
    ].join('\n');
  };

  modelRepository.addModels(buySellModel);
}

export default createBuySellModel;