import dispatch from "../../requests/dispatch.js";
import { gotoBlock } from "../../files/scroll/gotoblock.js";

import ElementNotFoundError from "../../errors/elementNotFound.js";

import { isString, isObject } from "../../fn/identity/index.js";

import scrollDispatcherConfig from "../../config/scrollDispatcher.js";

import storageConfig from "../../config/storage.js";

/**
 * 
 * @param {string} targetElement CSS selector for target element, to which navigate.
 */
export function scrollAction(targetElement) {
  isString(targetElement).nonEmpty().throw('targetElement');

  const element = document.querySelector(targetElement);

  if (!element) {
    throw new ElementNotFoundError(element);
  }

  gotoBlock(targetElement, scrollDispatcherConfig.noHeader, scrollDispatcherConfig.speed, scrollDispatcherConfig.offsetTop);
  
  /**
   * Cleans up browser's URL without reloading page immediately.
   */
  window.history.pushState({}, '', '/');
}

/**
 * Dispatch target element from query parameters and do {@link scrollAction}.
 */
function useScrollDispatcher() {
  const targetElementQueryParamName = (
    isObject(storageConfig.tokenNames)
      .withProperty('targetElement', p => isString(p).nonEmpty()).value ?
        storageConfig.tokenNames.targetElement :
        'targetElement');

  const dispatchResult = dispatch(targetElementQueryParamName);

  const targetElementURIEncoded = dispatchResult[targetElementQueryParamName];

  if (isString(targetElementURIEncoded).nonEmpty().value) {
    const targetElement = decodeURIComponent(targetElementURIEncoded);

    if (isString(targetElement).nonEmpty().value) {
      setTimeout(() => scrollAction(targetElement), 100);
    }
  }
}

export default useScrollDispatcher;