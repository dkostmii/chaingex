import { Model, ModelRepository } from './base.js';

/**
 * 
 * @param {ModelRepository} modelRepository 
 */
function createLanguageModel(modelRepository) {
  if (!(modelRepository instanceof ModelRepository)) {
    throw new TypeError('Expected modelRepository to be instance of ModelRepository.');
  }

  const languageModel = new Model('language', 'User language', window.detectUserLanguage());

  modelRepository.addModels(languageModel);
}

export default createLanguageModel;
