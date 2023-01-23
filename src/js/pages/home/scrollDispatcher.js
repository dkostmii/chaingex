import dispatch from "../../requests/dispatch.js";
import { gotoBlock } from "../../files/scroll/gotoblock.js";

import ElementNotFoundError from "../../errors/elementNotFound.js";

import { isString } from "../../fn/identity/index.js";

import scrollDispatcherConfig from "../../config/scrollDispatcher.js";

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
}

/**
 * Dispatch target element from query parameters and do {@link scrollAction}.
 */
function useScrollDispatcher() {
  const { targetElement: targetElementURIEncoded } = dispatch('targetElement');
  const targetElement = decodeURIComponent(targetElementURIEncoded);

  if (isString(targetElement).nonEmpty().value) {
    setTimeout(() => scrollAction(targetElement), 100);
  }
}

export default useScrollDispatcher;