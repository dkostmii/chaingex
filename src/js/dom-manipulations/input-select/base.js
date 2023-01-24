export const inputSelectClassName = 'block-select';
export const inputSelectEmptyClassName = 'block-select__empty';
export const activeClassName = 'block-select__active';

export const currentClassName = 'block-select__value';
export const optionsContainerClassName = 'block-select__list';
export const optionsContainerFewItemsClassName = 'block-select__list__few-items';
export const optionsContainerNoItemsClassName = 'block-select__list__empty';
export const singleOptionClassName = 'block-select__item';

/**
 * How many items in option container are considered as `few`.
 */
export const fewItemsValue = 3;

/**
 * @typedef {Object} InputSelectOption
 * 
 * @property {string} value Unique value representing this option
 * @property {string} name Display name for the option
 */

/**
 * @param {any} option
 */
function isOption(option) {
  return (
    typeof option === 'object' &&
    'value' in option && typeof option.value === 'string' &&
    'name' in option && typeof option.name === 'string'
  );
}

class NotOptionError extends TypeError {
  /**
   * 
   * @param  {...string} paramNames
   */
  constructor(...paramNames) {
    if (!(Array.isArray(paramNames) && paramNames.length > 0 && paramNames.every(p => typeof p === 'string'))) {
      throw new TypeError('Expected paramNames to be non-empty array of strings containing parameter names.');
    } else if (paramNames.length === 1) {
      super(`Parameter ${paramNames[0]} is not InputSelectOption.`);
    } else {
      const paramNamesStr = paramNames.join(", ");

      super(`Parameters ${paramNamesStr} are not InputSelectOption.`);
    }
  }
}

/**
 * 
 * @param {InputSelectOption} option 
 * @param {string} paramName 
 * @returns 
 */
function optionAsParam(option, paramName) {
  return {
    validate() {
      if (!isOption(option)) {
        throw new NotOptionError(paramName);
      }    
    }
  }
}

/**
 * 
 * @param {InputSelectOption[]} options 
 * @param {string} paramName 
 * @param {boolean} allowEmpty 
 * @returns 
 */
function optionArrayAsParam(options, paramName, allowEmpty = false) {
  return {
    validate() {
      if (!(Array.isArray(options) && (allowEmpty || options.length > 0))) {
        throw new TypeError(`Expected ${paramName} to be ${allowEmpty ? '' : 'non-empty'} array of InputSelectOption.`);
      }

      const invalidRestOptionIds = options.reduce((acc, val, id) => {
        if (!isOption(val)) {
          return [...acc, id];
        }
    
        return acc;
      }, [])
    
      if (invalidRestOptionIds.length > 0) {
        throw new NotOptionError(...invalidRestOptionIds.map(idx => `${paramName}[${idx}]`));
      }
    }
  }
}

/**
 * @param {InputSelectOption[]} options
 */
function ensureUnique(options) {
  optionArrayAsParam(options, 'options').validate();

  const nonUniqueOptions = options.reduce((acc, val, id) => {
    const withSameValue = options
      .map((o, oId) => { return { ...o, id: oId }; })
      .filter(o => o.value === val.value && o.id !== id);

    withSameValue.forEach(o => {
      if (typeof acc.find(existing => existing.id === o.id) !== 'object') {
        acc.push(o);
      }
    });

    return acc;
  }, []).map(o => { return { value: o.value, name: o.name } });

  if (nonUniqueOptions.length > 0) {
    throw new Error(`All options must have unique value property. Got: ${JSON.stringify(nonUniqueOptions)}`);
  }
}

/**
 * 
 * @param {string} name 
 * @returns {HTMLSpanElement[]}
 */
function createNameSpanElements(name) {
  const nameTokens = name.split(" ");

  return nameTokens.map(token => {
    const spanEl = document.createElement('span');
    spanEl.appendChild(document.createTextNode(token));

    return spanEl;
  });
}

/**
 * 
 * @param {Element | HTMLElement} element 
 * @param {InputSelectOption} current 
 * @param {InputSelectOption[]} restOptions 
 */
function inputSelect(element, current, restOptions) {
  if (!(element instanceof Element || element instanceof HTMLElement)) {
    throw new TypeError('Expected element to be either Element or HTMLElement');
  }

  optionAsParam(current, 'current').validate();
  optionArrayAsParam(restOptions, 'restOptions', true).validate();

  ensureUnique([current, ...restOptions]);

  if (!element.classList.contains(inputSelectClassName)) {
    throw new Error('Expected element to contain className \'.input-select\'');
  }

  while (element.firstElementChild) {
    element.removeChild(element.firstElementChild);
  }

  const currentEl = document.createElement('span');

  currentEl.classList.add(currentClassName);

  const nameElements = createNameSpanElements(current.name);
  nameElements.forEach(el => { currentEl.appendChild(el); });

  currentEl.dataset.value = current.value;

  const clickListener = () => {
    if (restOptions.length > 0) {
      const anotherElements = [
        ...document.querySelectorAll(`.${inputSelectClassName}`)
      ].filter(el => el !== element);
  
      anotherElements.forEach(el => { el.classList.remove(activeClassName) })
  
      element.classList.toggle(activeClassName);
    }
  };

  currentEl.addEventListener('click', clickListener);

  const optionsContainer = document.createElement('div');
  optionsContainer.classList.add(optionsContainerClassName);

  if (restOptions.length <= fewItemsValue) {
    optionsContainer.classList.add(optionsContainerFewItemsClassName);

    if (restOptions.length === 0) {
      optionsContainer.classList.add(optionsContainerNoItemsClassName);
      element.classList.add(inputSelectEmptyClassName);
    }
  } else {
    optionsContainer.dataset.simplebar = "";
    optionsContainer.dataset.simplebarAutoHide = "false";
    element.classList.remove(inputSelectEmptyClassName);
  }

  const changeListeners = [];
  let newInputHandle = null;

  const optionElements = restOptions.map(o => {
    const optionEl = document.createElement('span');
    optionEl.classList.add(singleOptionClassName);

    const nameElements = createNameSpanElements(o.name);
    nameElements.forEach(el => { optionEl.appendChild(el); })

    optionEl.dataset.value = o.value;

    optionEl.addEventListener('click', () => {
      const newCurrent = o;
      const newRest = [current, ...restOptions.filter(option => option.value !== o.value)];

      element.classList.remove(activeClassName);

      newInputHandle = inputSelect(element, newCurrent, newRest);
      changeListeners.forEach(changeListenerFn => {
        newInputHandle.addEventListener('change', changeListenerFn);
        changeListenerFn(current.value, newCurrent.value);
      });
    });

    return optionEl;
  });

  optionsContainer.append(...optionElements);
  element.append(currentEl, optionsContainer);

  return {
    /**
     * 
     * @param {"change"} event 
     * @param {(oldValue: any, newValue: any) => void} eventListenerFn 
     */
    addEventListener(event, eventListenerFn) {
      if (newInputHandle !== null) {
        return newInputHandle.addEventListener(event, eventListenerFn);
      }

      if (event === 'change') {
        changeListeners.push(eventListenerFn);
      } else {
        throw new Error(`Unknown event ${event}.`);
      }
    },

    /**
     * 
     * @param {"change"} event 
     * @param {(oldValue: any, newValue: any) => void} eventListenerFn 
     */
    removeEventListener(event, eventListenerFn) {
      if (newInputHandle !== null) {
        return newInputHandle.removeEventListener(event, eventListenerFn);
      }

      let targetListenersArr = null;
      if (event === 'change') {
        targetListenersArr = updateListeners;
      } else {
        throw new Error(`Unknown event ${event}.`);
      }

      if (!Array.isArray(targetListenersArr)) {
        throw new Error('Unexpected error. No listeners matched.');
      }

      const id = targetListenersArr.indexOf(eventListenerFn);

      if (id === -1) {
        throw new Error('Model does not have provided eventListenerFn attached.');
      }

      targetListenersArr.splice(id, 1);
    }
  }
}

export default inputSelect;
