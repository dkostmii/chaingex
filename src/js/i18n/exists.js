import { isString } from "../fn/identity/index.js";

function translationExists(i18nToken, language, ...i18nParams) {
  isString(i18nToken).nonEmpty().throw('i18nToken');

  const translation = language.dict(i18nToken, ...i18nParams);

  return translation !== i18nToken;
}

export default translationExists;
