import { Model, ModelRepository } from '../../model/base.js';
import createBuySellModel from '../../model/buySell/index.js';
import createDefaults from '../../model/defaults.js';
import createExchangeModel from '../../model/exchange/index.js';
import buySellView from '../../view/buySell/index.js';
import exchangeView from '../../view/exchange/index.js';
import createOperationView from '../../view/operation.js';

import { FLS } from '../../files/functions.js';

/**
 * 
 * @param {Currency[]} cryptos 
 * @param {Currency[]} currencies 
 */
function useViewModels(cryptos, currencies) {
  const models = new ModelRepository();

  const cryptosModel = new Model('cryptos', 'Cryptos', cryptos);
  const currenciesModel = new Model('currencies', 'Currencies', currencies);
  models.addModels(cryptosModel, currenciesModel);
  
  createDefaults(models);
  createExchangeModel(models);
  createBuySellModel(models);
  exchangeView(models);
  buySellView(models);
  createOperationView(models);
  
  models.forEach(model => {
    model.addEventListener('update', (oldValue, newValue) => {
      FLS(`[Update ${model.id}]: "${oldValue}" => "${newValue}"`);
    });
  });
}

export default useViewModels;
