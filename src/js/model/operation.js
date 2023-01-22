import { Model, ModelRepository } from "./base.js";

/**
 * 
 * @param {"exchange" | "buy-sell"} defaultOperation 
 * @param {ModelRepository} modelRepository 
 */
function createOperationModel(defaultOperation, modelRepository) {
  if (!(modelRepository instanceof ModelRepository)) {
    throw new TypeError('Expected modelRepository to be instance of ModelRepository.');
  }

  if (!(defaultOperation === 'buy-sell' || defaultOperation === 'exchange')) {
    throw new Error('Expected defaultOperation to be "buy-sell" or "exchange"');
  }

  const operation = new Model('operation', 'Operation', defaultOperation);

  operation.addAction('select-exchange', () => {
    if (operation.value !== 'exchange') {
      operation.updateModel('exchange');
    }
  });
  
  operation.addAction('select-buy-sell', () => {
    if (operation.value !== 'buy-sell') {
      operation.updateModel('buy-sell');
    }
  });

  modelRepository.addModels(operation);
}

export default createOperationModel;