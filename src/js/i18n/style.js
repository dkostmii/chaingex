/**
 * @typedef {import('./data.js').Language} Language
 */

/**
 * Styles an {@link element} according to {@link language}.
 * 
 * @param {Element | HTMLElement} element An element to which style added according to {@link language}.
 * @param {Language} language A current language.
 */

function style(element, language) {
  if (!(element instanceof Element || element instanceof HTMLElement)) {
    throw new TypeError('Expected element to be instance of either Element or HTMLElement.');
  }

  element.classList.add(language.styleClass);
}

export default style;
