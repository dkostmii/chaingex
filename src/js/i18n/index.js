import { setLanguage } from "./localStorage.js";
import detectUserLanguage from "./detect.js";
import langs from './data.js';

import style from "./style.js";
import translate from "./translate.js";

/**
 * @typedef {import('./data.js').Language} Language
 */

const currentLanguage = detectUserLanguage();

function optionClickedHandler(lang) {
  setLanguage(lang.value)
  window.location.reload(true);
}

function createMobileOption(lang) {
  const option = document.createElement('div');
  option.classList.add('lang-select__mobile__option');

  option.innerHTML = lang.shortNames.shorter;
  if (lang.value === currentLanguage.value) {
    option.classList.add('lang-select__mobile__option__current');
  } else {
    option.addEventListener('click', () => optionClickedHandler(lang));
  }

  return option;
}

function createDesktopOption(lang) {
  const option = document.createElement('div');
  option.classList.add('lang-select__option');

  option.innerHTML = lang.shortNames.short;

  option.addEventListener('click', () => optionClickedHandler(lang));

  option.dataset

  return option;
}

function useLanguageSelect() {
  const langSelectMobile = document.querySelector('.lang-select__mobile');

  while (langSelectMobile.firstElementChild) {
    langSelectMobile.removeChild(langSelectMobile.firstElementChild);
  }

  const langSelect = document.querySelector('.lang-select');

  while (langSelect.firstElementChild) {
    langSelect.removeChild(langSelect.firstElementChild);
  }

  const langSelectCurrent = document.createElement('div');
  langSelectCurrent.classList.add('lang-select__current');
  langSelectCurrent.innerHTML = currentLanguage.shortNames.short;

  const langSelectOptions = document.createElement('div');
  langSelectOptions.classList.add('lang-select__options');

  langSelect.append(langSelectCurrent, langSelectOptions);

  langs.forEach(lang => {
    langSelectMobile.appendChild(createMobileOption(lang));

    if (lang.value !== currentLanguage.value) {
      langSelect.appendChild(createDesktopOption(lang));
    }
  });
}

function translatePage() {
  const elements = document.querySelectorAll('.i18n, .i18n-style');

  elements.forEach(el => {
    if (el.classList.contains('i18n')) {
      style(el, currentLanguage);
      translate(el, currentLanguage);
    } else if (el.classList.contains('i18n-style')) {
      style(el, currentLanguage);
    }
  });
}

/**
 * Translates the pages to user browser's preferred language, or previously set language, if such was selected before.
 * 
 * Bootstraps `.lang-select` and `.lang-select__mobile` elements, so the user can change current language.
 * 
 * To translate an element, use `i18n` class and add `data-i18n` attibute pointing to appropriate token in {@link Language.dict} dictionary.
 */
function useI18n() {
  useLanguageSelect();
  translatePage();
}

export default useI18n;