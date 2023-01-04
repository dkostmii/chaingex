import langs from './data.js';
import storageConfig from '../config/storage.js';

/**
 * Sets the current language and saves it to `localStorage`, so all pages will be displayed in that language.
 * 
 * Please refer to {@link storageConfig.tokenNames.currentLanguage} to find, which key is used to store that value in `localStorage`.
 * 
 * @param {string} languageValue The {@link Language.value} of the language to set as current.
 */
export function setLanguage(languageValue) {
  const { tokenNames: { currentLanguage } } = storageConfig;

  const { localStorage } = window;

  const language = langs.find(lang => lang.value === languageValue);

  if (!language) {
    throw new Error('Unabled to find language by languageValue.');
  }

  localStorage.setItem(currentLanguage, language.value);
}

/**
 * Get current {@link Language.value}, stored in `localStorage`. If no such value is stored, returns `null`.
 * 
 * Throws an error if value stored in `localStorage` represents a non-existing language in {@link langs} array.
 * 
 * Please refer to {@link storageConfig.tokenNames.currentLanguage} to find, which key is used to store that value in `localStorage`.
 * 
 * @returns {string | null} A {@link Language.value} of the language, previously selected with {@link setLanguage}.
 */
export function getLanguage() {
  const { tokenNames: { currentLanguage } } = storageConfig;

  const { localStorage } = window;

  const languageValue = localStorage.getItem(currentLanguage);

  if (!languageValue) {
    return null;
  }

  const language = langs.find(lang => lang.value === languageValue);

  if (!language) {
    throw new Error('Unabled to find language by languageValue.');
  }

  return languageValue;
}

