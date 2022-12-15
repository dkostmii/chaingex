import { inf } from './config.js';

import { breakPoints } from './config.js';

/**
 * Gets the current breakpoint id.
 * 
 * @returns {number} A zero-based index in {@link breakPoints} array.
 */
export function getCurrentBreakPointId() {
  const mediaQueries = breakPoints.map(bp => {
    const [min, max] = bp;
  
    let query = '';
  
    if (max === inf && min === 0) {
      throw new Error(`Expected either min or max to defined. Got min: ${min}, max: ${max}`);
    }
  
    if (max === inf) {
      query = `(min-width: ${min}px)`;
    } else if (min === 0) {
      query = `(max-width: ${max}px)`;
    }
    else {
      query = `(min-width: ${min}px) and (max-width: ${max}px)`
    }
  
    return query;
  });

  for (let i = 0; i < mediaQueries.length; i += 1) {
    const mediaQuery = mediaQueries[i];

    if (window.matchMedia(mediaQuery).matches) {
      return i;
    }
  }

  throw new Error(`No breakpoint match. Client-width: ${window.innerWidth}, breakpoints: ${breakPoints}.`);
}

/**
 * Adds handler to `window` `'resize'` event, which grabs the `currentBreakPointId`.
 * 
 * @param {(currentBreakPointId: number) => void} handler 
 */
export function addBreakPointChangeHandler(handler) {
  if (!(handler instanceof Function)) {
    throw new TypeError(`Expected handler to be a Function. Got ${typeof handler}`);
  }

  let currentBpId = getCurrentBreakPointId(breakPoints);

  window.addEventListener('resize', () => {
    const newBpId = getCurrentBreakPointId(breakPoints);

    if (currentBpId !== newBpId) {
      currentBpId = newBpId;
      handler(currentBpId);
    }
  });
}