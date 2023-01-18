import { FalseIdentityError } from "./base.js";

/**
 * Tests whether {@link fn} is a Function.
 * 
 * @param {any} fn An object to test 
 */
function isFunction(fn) {
  return {
    value: fn instanceof Function,

    /**
     * Throw an error if identity is not true.
     * @param {string} paramName A name of parameter which represents the object, tested by identity function.
     */
    throw(paramName) {
      if (!this.value) {
        throw new FalseIdentityError(paramName, 'Function');
      }
    }
  };
}

export default isFunction;