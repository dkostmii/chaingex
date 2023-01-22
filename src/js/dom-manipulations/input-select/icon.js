import inputSelect, { optionsContainerClassName, singleOptionClassName } from "./base.js";
import { currentClassName } from "./base.js";

export const iconClassName = 'block-select__icon';

/**
 * @typedef {import('./base.js').InputSelectOption} InputSelectOption
 */

const iconClassPrefix = 'fonticons-';

function createIconElement(value) {
  const iconEl = document.createElement('i');

  const [short, _] = value.split('-');

  iconEl.classList.add(iconClassName);
  iconEl.classList.add(`${iconClassPrefix}${short}`);

  return iconEl;
}

/**
 * 
 * @param {Element | HTMLElement} element 
 * @param {InputSelectOption} current 
 * @param {InputSelectOption[]} restOptions 
 */
function iconInputSelect(element, current, restOptions) {
  const handle = inputSelect(element, current, restOptions);

  const currentEl = element.querySelector(`.${currentClassName}`);
  const restOptionElements = element.querySelectorAll(`.${optionsContainerClassName} > .${singleOptionClassName}`);

  const currentIconEl = createIconElement(currentEl.dataset.value);
  currentEl.prepend(currentIconEl);

  [...restOptionElements].forEach(restOptionEl => {
    const iconEl = createIconElement(restOptionEl.dataset.value);
    restOptionEl.prepend(iconEl);      
  });

  handle.addEventListener('change', () => {
    const currentEl = element.querySelector(`.${currentClassName}`);
    const restOptionElements = element.querySelectorAll(`.${optionsContainerClassName} > .${singleOptionClassName}`);

    const currentIconEl = createIconElement(currentEl.dataset.value);
    currentEl.prepend(currentIconEl);

    [...restOptionElements].forEach(restOptionEl => {
      const iconEl = createIconElement(restOptionEl.dataset.value);
      restOptionEl.prepend(iconEl);      
    });
  });

  return handle;
}

export default iconInputSelect;
