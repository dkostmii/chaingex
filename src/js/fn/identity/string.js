import { FalseIdentityError } from "./base.js";

/**
 * Tests whether {@link str} is a string.
 * 
 * @param {any} str An object to test.
 */
function isString(str) {
  const value = typeof str === 'string' || str instanceof String;

  return {
    value,

    /**
     * Throw an error if identity is not true.
     * @param {string} paramName A name of parameter which represents the object, tested by identity function.
     */
    throw(paramName) {
      if (!this.value) {
        throw new FalseIdentityError(paramName, 'string');
      }
    },

    /**
     * Also check if string is non-empty.
     */
    nonEmpty() {
      return {
        value: value ? str.trim().replace("\n", "").length > 0 : value,
        /**
         * Throw an error if identity is not true.
         * @param {string} paramName A name of parameter which represents the object, tested by identity function.
         */
        throw(paramName) {
          if (!this.value) {
            throw new FalseIdentityError(paramName, 'non-empty string');
          }
        },
      };
    },
  };
}

export default isString;