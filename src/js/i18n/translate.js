/**
 * @typedef {import('./data.js').Language} Language
 */

/**
 * Translated an {@link element} to specific {@link language}.
 * 
 * @param {Element | HTMLElement} element A element which is translated to {@link language}.
 * @param {Language} language A current language.
 */
function translate(element, language) {
  if (!(element instanceof Element || element instanceof HTMLElement)) {
    throw new TypeError('Expected element to be instance of either Element or HTMLElement.');
  }

  if (!('i18n' in element.dataset && typeof element.dataset.i18n === 'string')) {
    throw new Error(`Element with class ${element.className} misses data-i18n attribute. If you want only style element for language, use 'i18n-style' class instead.`);
  }

  if (element.dataset.i18n.length < 1) {
    throw new Error(`Element with class ${element.className} has empty data-i18n attribute. If you want only style element for language, use 'i18n-style' class instead.`)
  }

  const caption = language.dict(element.dataset.i18n);

  if (caption === element.dataset.i18n) {
    throw new Error(`No '${element.dataset.i18n}' definition found for language ${language.name}. Check whether data-i18n attribute is spelled correctly.`)
  }

  element.innerHTML = caption;
}

export default translate;