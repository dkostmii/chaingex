function style(element, language) {
  if (!(element instanceof Element || element instanceof HTMLElement)) {
    throw new TypeError('Expected element to be instance of either Element or HTMLElement.');
  }

  element.classList.add(language.styleClass);
}

export default style;
