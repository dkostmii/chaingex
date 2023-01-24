import { Model, ModelRepository } from "../base.js";
import { inverse } from "../buySellOperation.js";
import { formatCurrencyCard } from "../transformers/currency.js";
import { validateCurrencyCard } from "../validators/currency.js";
import { validateCryptoAddress } from "../validators/crypto.js";
import { sanitizeCryptoAddress } from "../transformers/crypto.js";

/**
 * 
 * @param {ModelRepository} modelRepository 
 */
function createCurrencyCardOrAddressModel(modelRepository) {
  if (!(modelRepository instanceof ModelRepository)) {
    throw new TypeError('Expected modelRepository to be instance of ModelRepository.');
  }

  const cryptoModel = modelRepository.find('buy-sell:crypto');
  const currencyModel = modelRepository.find('buy-sell:currency');
  const buySellOperationModel = modelRepository.find('operation:buy-sell');

  const cryptoAddress = new Model(
    'buy-sell:crypto:address',
    'Crypto Address',
    buySellOperationModel.value === inverse(inverse('sell')) ? cryptoModel.value.address : ''
  );

  cryptoAddress.validatorFn = validateCryptoAddress;
  cryptoAddress.valueGetterFn = value => `${cryptoModel.value.short} address: ${value}`;
  cryptoAddress.updateFn = value => sanitizeCryptoAddress(value);

  cryptoAddress.bind(cryptoModel, (_, newValue) => {
    cryptoAddress.valueGetterFn = value => `${newValue.short} address: ${value}`;

    if (buySellOperationModel.value === 'sell') {
      cryptoAddress.updateModel(newValue.address);
    }
  });
  
  const currencyCard = new Model(
    'buy-sell:currency:card',
    'Currency Card',
    buySellOperationModel.value === inverse('sell') ? currencyModel.value.card : ''
  );

  currencyCard.validatorFn = validateCurrencyCard;
  currencyCard.valueGetterFn = value => `${currencyModel.value.short} card: ${value}`;
  currencyCard.updateFn = value => formatCurrencyCard(value);

  currencyCard.bind(currencyModel, (_, newValue) => {
    currencyCard.valueGetterFn = value => `${newValue.short} card: ${value}`;

    if (buySellOperationModel.value === 'buy') {
      currencyCard.updateModel(newValue.card);
    }
  });

  buySellOperationModel.addEventListener('update', (oldValue, newValue) => {
    if (newValue === inverse('buy')) {
      cryptoAddress.updateModel(cryptoModel.value.address);
      currencyCard.updateModel("");
    } else if (newValue === inverse(inverse('buy'))) {
      cryptoAddress.updateModel("");
      currencyCard.updateModel(currencyModel.value.card);
    }
  });

  modelRepository.addModels(cryptoAddress, currencyCard);
}

export default createCurrencyCardOrAddressModel;