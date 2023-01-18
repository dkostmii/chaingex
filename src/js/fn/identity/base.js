import isString from "./string.js";

/**
 * Represents an error, that occur, when identity function returns false value.
 */
export class FalseIdentityError extends TypeError {
  /**
   * @param {string} paramName A name of parameter which represents the object, tested by identity function.
   */
  constructor(paramName, identityName) {
    if (!isString(paramName).nonEmpty().value) {
      throw new TypeError('Expected paramName to be non-empty string.');
    }

    super(`Expected ${paramName} to be ${identityName}.`);

    this.name = 'False Identity Error';
  }
}
