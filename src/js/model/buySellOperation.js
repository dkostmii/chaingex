import { Model, ModelRepository } from "./base.js";
import { capitalize } from "./transformers/string.js";

export function inverse(operation) {
  if (operation === 'buy') {
    return 'sell';
  }
  
  return 'buy';
}

/**
 * 
 * @param {"buy" | "sell"} defaultOperation 
 * @param {ModelRepository} modelRepository 
 */
function createBuySellOperationModel(defaultOperation, modelRepository) {
  if (!(defaultOperation === 'buy' || defaultOperation === 'sell')) {
    throw new Error('Expected defaultOperation to be "buy" or "sell"');
  }

  if (!(modelRepository instanceof ModelRepository)) {
    throw new TypeError('Expected modelRepository to be instance of ModelRepository.');
  }

  const buySellOperation = new Model('operation:buy-sell', 'Buy or Sell operation', defaultOperation);

  buySellOperation.addAction('swap', () => {
    buySellOperation.updateModel(inverse(buySellOperation.value));
  });

  buySellOperation.valueGetterFn = capitalize;
  
  modelRepository.addModels(buySellOperation);
}

export default createBuySellOperationModel;