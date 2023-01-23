import { Model, ModelRepository } from "./base.js";

/**
 * 
 * @param {ModelRepository} modelRepository 
 */
function createResultModel(modelRepository) {
  if (!(modelRepository instanceof ModelRepository)) {
    throw new TypeError('Expected modelRepository to be instance of ModelRepository.');
  }

  const resultModel = new Model('result', 'Result', false);

  modelRepository.addModels(resultModel);
}

export default createResultModel;
