import { isString } from "../fn/identity/index.js";
import translationExists from "./exists.js";

function getTranslation(i18nToken, language, ...i18nParams) {
  isString(i18nToken).nonEmpty().throw('i18nToken');

  if (!translationExists(i18nToken, language, ...i18nParams)) {
    throw new Error(`No '${i18nToken}' definition found for language ${language.name}. Check whether data-i18n attribute is spelled correctly.`);
  }

  return language.dict(i18nToken, ...i18nParams);
}

export default getTranslation;
