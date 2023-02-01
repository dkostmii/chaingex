import { Model, ModelRepository } from "./base.js";
import { clamp } from "./transformers/number.js";

/**
 * 
 * @param {ModelRepository} modelRepository 
 */
function createOperationStepModel(modelRepository) {
  if (!(modelRepository instanceof ModelRepository)) {
    throw new TypeError('Expected modelRepository to be instance of ModelRepository.');
  }

  const operationStepModel = new Model('operation-step', 'Operation Step', 0);

  operationStepModel.updateFn = newValue => clamp(Math.floor(newValue), 0, 1);

  operationStepModel.addAction("back", () => {
    operationStepModel.updateModel(operationStepModel.value - 1);
  });

  operationStepModel.addAction("next", () => {
    operationStepModel.updateModel(operationStepModel.value + 1);
  });

  modelRepository.addModels(operationStepModel);
}

export default createOperationStepModel;
