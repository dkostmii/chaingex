import { scrollAction } from "../pages/home/scrollDispatcher.js";
import getCurrentPage from "../fn/currentPage.js";

import { isString } from "../fn/identity/index.js";

/**
 * Redirects to Home page and scrolls to {@link targetElement}
 * 
 * @param {string} targetElement CSS selector for element to which navigate.
 */
function scrollRouter(targetElement) {
  isString(targetElement);

  if (getCurrentPage() !== 'Home') {
    const targetElemenentParam = encodeURIComponent(targetElement);

    window.location.href = `index.html?targetElement=${targetElemenentParam}`;
  } else {
    scrollAction(targetElement);
  }
}

export default scrollRouter;
