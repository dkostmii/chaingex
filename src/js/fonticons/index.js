/**
 * Represents a scale factor for crypto icons. Don't change it from code.
 * Use {@link FonticonsOperations.scale} instead.
 * 
 * @type {number}
 */
let sc = 1;

const fonticonsSelector = 'i[class^=\'fonticons-\'],i[class*=\' fonticons-\']';
const fonticonsPartialClass = 'fonticons-';

let before;
let after;

function calcIconElStyle(requiredWidth, requiredHeight) {
  const { width, height } = {
    width: `${requiredWidth * 1.9 * sc}px`,
    height: `${requiredHeight * 1.8135 * sc}px`,
  };

  return {
    width,
    height,
    backgroundSize: `${width} ${height}`,
  };
}

const wrapperClassName = 'fonticons__wrapper';

function unwrapFonticons() {
  const wrapperElements = document.querySelectorAll(`.${wrapperClassName}`);

  wrapperElements.forEach(wrapperEl => {
    const iconEl = wrapperEl.querySelector(fonticonsSelector);

    if (!iconEl) {
      wrapperEl.remove();
      return;
    }

    wrapperEl.classList.remove(wrapperClassName);

    // Move classNames other than `fonticons-blabla` to iconEl
    wrapperEl.classList
      .forEach(className => 
        iconEl.classList.add(className));

    wrapperEl.removeChild(iconEl);

    wrapperEl.parentElement.insertBefore(iconEl, wrapperEl);

    iconEl.removeAttribute('style');

    wrapperEl.remove();
  });
}

function wrapFonticons() {
  const iconElements = document.querySelectorAll(fonticonsSelector);

  iconElements.forEach(iconEl => {
    if (iconEl.parentElement.classList.contains(wrapperClassName)) {
      return;
    }

    iconEl.classList.add('fonticons');

    if (iconEl.className.includes("-sub-")) {
      return;
    }

    const { width: requiredWidth, height: requiredHeight } = iconEl.getBoundingClientRect();

    const wrapperEl = document.createElement("div");

    wrapperEl.classList.add(wrapperClassName);

    // Move classNames other than `fonticons-blabla` to wrapperEl
    const classes = [...iconEl.classList]
      .filter(className => 
        !className.includes(fonticonsPartialClass));

    iconEl.classList.remove(...classes);
    wrapperEl.classList.add(...classes);

    iconEl.parentElement.insertBefore(wrapperEl, iconEl);

    iconEl.parentElement.removeChild(iconEl);

    wrapperEl.appendChild(iconEl);

    Object.assign(wrapperEl.style, {
      width: `${requiredWidth}px`,
      height: `${requiredHeight}px`,
    });

    Object.assign(iconEl.style, calcIconElStyle(requiredWidth, requiredHeight));
  });
}

function mediaChangedHandler() {
  if (before instanceof Function) {
    before();
  }

  unwrapFonticons();
  wrapFonticons();

  if (after instanceof Function) {
    after();
  }
}

/**
 * @function breakpoint
 * @param {string} bp A valid `min-width` breakpoint value. Should be an integer or decimal in `px`, `em`, `rem`, `pt`, `cm` or `in` units.
 * @returns {FonticonsOperations} Returns object containing this function, so calls can be chained.
 */

/**
 * Chainable operations, such as `breakpoint()`.
 * 
 * Example: `fonticons().breakpoint('400px').breakpoint('800px')`
 * 
 * @typedef {Object} FonticonsOperations
 * @property {breakpoint} breakpoint Adds a breakpoint to `fonticons`. Calls can be chained.
 * @property {scale} scale Changes the scale of fonticons to precisely control how big icon is in the container.
 * 
 * Example: `fonticons().breakpoint('400px').breakpoint('800px')`
 * 
 */

/**
 * Adds a breakpoint to `fonticons`.
 * 
 * @param {string} bp A valid `min-width` breakpoint value. Should be an integer or decimal in `px`, `em`, `rem`, `pt`, `cm` or `in` units.
 * @returns {FonticonsOperations} Returns object containing this function, so calls can be chained.
 */
function breakpoint(bp) {
  if (typeof bp !== 'string') {
    throw new TypeError('Expected bp to be a string.');
  }

  if (bp.length === 0) {
    throw new TypeError('Expected bp to be non-empty string.')
  }

  if (bp.match(/^\d+(\.\d+)?(px|em|rem|pt|cm|in)$/)[0] !== bp) {
    throw new Error(`Invalid bp value: ${bp}. Expected integer or decimal in px, em, rem, pt, cm or in units.`);
  }

  window.matchMedia(`(min-width: ${bp})`).addEventListener('change', mediaChangedHandler);

  return { scale, breakpoint };
}

/**
 * Scale the icon by a non-negative {@link factor}.
 * 
 * @param {number} factor A non-negative scale factor for icon size.
 * @returns {FonticonsOperations} Returns object containing this function, so calls can be chained.
 */
function scale(factor) {
  if (typeof factor !== 'number') {
    throw new TypeError(`Expected factor to be a number. Got: ${typeof factor}.`);
  }

  if (factor < 0) {
    throw new Error(`Expected factor to be non-negative number. Got: ${factor}.`);
  }

  sc = factor;

  mediaChangedHandler();

  return { breakpoint, scale };
}

/**
 * Wraps fonticons on page. Repeats this behavior if breakpoints are added.
 * 
 * @param {Function | undefined} actionBefore Action, executed before wrapping the icons. Is executed also on breakpoint trigger.
 * @param {Function | undefined} actionAfter Action, executed after wrapping the icons. Is executed also on breakpoint trigger.
 * 
 * @returns {FonticonsOperations} 
 * 
 */
export default function fonticons(actionBefore, actionAfter) {
  if (actionBefore instanceof Function) {
    before = actionBefore;
    before();
  }

  wrapFonticons();

  if (actionAfter instanceof Function) {
    after = actionAfter;
    after();
  }

  return {
    scale,
    breakpoint,
  }
}
