import { scrollAction } from "../pages/home/scrollDispatcher.js";
import getCurrentPage from "../fn/currentPage.js";

import { isString, isObject } from "../fn/identity/index.js";

import storageConfig from "../config/storage.js";

/**
 * Redirects to Home page and scrolls to {@link targetElement}
 * 
 * @param {string} targetElement CSS selector for element to which navigate.
 */
function scrollRouter(targetElement) {
  isString(targetElement);

  if (getCurrentPage() !== 'Home') {
    const targetElemenentParam = encodeURIComponent(targetElement);

    const targetElementQueryParamName = (
      isObject(storageConfig.tokenNames)
        .withProperty('targetElement', p => isString(p).nonEmpty()).value ?
          storageConfig.tokenNames.targetElement :
          'targetElement');

    window.location.href = `index.html?${targetElementQueryParamName}=${targetElemenentParam}`;
  } else {
    scrollAction(targetElement);
  }
}

export default scrollRouter;
