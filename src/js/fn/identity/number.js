import { FalseIdentityError } from "./base.js";

/**
 * Tests whether {@link number} is Number.
 * 
 * @param {any} number An object to test
 */
function isNumber(number) {
  const value = typeof number === 'number' && !Number.isNaN(number);

  return {
    value,

    /**
     * Throw an error if identity is not true.
     * @param {string} paramName A name of parameter which represents the object, tested by identity function.
     */
    throw(paramName) {
      if (!this.value) {
        throw new FalseIdentityError(paramName, 'Number');
      }
    },

    /**
     * Also check if number is non-negative.
     */
    nonNegative() {
      return {
        value: value ? number >= 0 : value,
        /**
         * Throw an error if identity is not true.
         * @param {string} paramName A name of parameter which represents the object, tested by identity function.
         */
        throw(paramName) {
          if (!this.value) {
            throw new FalseIdentityError(paramName, 'non-negative Number');
          }
        },
      };
    },
  };
}

export default isNumber;
