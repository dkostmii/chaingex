import langs from './data.js';

import { getLanguage, setLanguage } from './localStorage.js';

/**
 * @typedef {import('./data.js').Language} Language
 */

/**
 * Default language used as fallback, if no matches found for user browser's language preference.
 * 
 * If this constant is `undefined`, the `langs[0]` - first language in {@link langs} array will be used.
 * 
 * @constant defaultLanguage
 * @type {Language | undefined}
 */
const defaultLanguage = langs.find(lang => lang.value === 'eng');

/**
 * Checks whether {@link userLanguage} value represents a given {@link language}.
 * 
 * @param {string} userLanguage A string representing a user's primary language.
 * @param {Language} language A language data, defined in the application.
 *
 * @returns {boolean}
 */
function isMatchLanguage (userLanguage, language) {
  // Single string
  if (typeof language.languageCodes === 'string' || language.languageCodes instanceof String) {
    // Exact match
    return language.languageCodes === userLanguage;
  }

  // Single RegExp
  if (language.languageCodes instanceof RegExp) {
    return language.languageCodes.test(userLanguage);
  }

  // Array of string or RegExp
  for (const code of language.languageCodes) {
    if (typeof code === 'string' || code instanceof String) {
      if (code === userLanguage) {
        // Exact match
        return true;
      }
    }

    if (code instanceof RegExp) {
      if (code.test(userLanguage)) {
        return true;
      }
    }
  }

  // No matches found
  return false;
}

/**
 * Maps user language stored in `navigator` object to {@link Language} in {@link langs} array.
 * 
 * If no such language found, returns either {@link defaultLanguage} or `langs[0]`.
 * 
 * @returns {Language} A mapped {@link Language} or {@link defaultLanguage}, or `langs[0]`.
 */
function mapUserLanguage() {
  const userLanguage = navigator.language || navigator.userLanguage

  for (const l of langs) {
    if (isMatchLanguage(userLanguage, l)) {
      return l;
    }
  }

  if (defaultLanguage) {
    return defaultLanguage;
  }

  if (langs.length > 0) {
    return langs[0];
  }

  throw new Error('No languages in langs array are defined.');
}

function detectUserLanguage() {
  const currentLangValue = getLanguage();

  if (!currentLangValue) {
    const mappedLang = mapUserLanguage();

    setLanguage(mappedLang.value);

    return mappedLang;
  }

  const language = langs.find(lang => lang.value === currentLangValue);

  if (!language) {
    throw new Error('Unabled to find language by currentLangValue.');
  }

  return language;
}

export default detectUserLanguage;