/**
 * This error is thrown, when there is not element found in DOM tree.
 */
class ElementNotFoundError extends Error {

  /**
   * Creates a new instance of {@link ElementNotFoundError}
   * @param {string} elementName Could be a class, id, or other relevant element property, which identifies the element.
   */
  constructor(elementName) {
    super(`Unable to locate ${elementName} element.`);
    this.name = 'Element Not Found Error';
  }
}

export default ElementNotFoundError;
