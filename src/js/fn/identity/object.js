import isString from "./string.js";
import isFunction from "./function.js";

import { FalseIdentityError } from "./base.js";

/**
 * Tests whether object has property, satisfying {@link identity} condition.
 * 
 * @param {any} obj An object to test
 * @param {string} propName A property name to test
 * @param {Function} identity Identity function used, to test {@link obj}'s property {@link propName}.
 * @param {{ value: boolean, throw: Function }} prevValue The result of previous function in a chain.
 * @returns { value: boolean }
 */
function withPropertyFn(obj, propName, identity, prevResult) {
  if (!isString(propName)) {
    throw new TypeError('Expected name to be a string.');
  }

  if (!isFunction(identity)) {
    throw new TypeError('Expected identity to be a Function.');
  }

  let idAns = { value: false };

  if (typeof obj === 'object' && propName in obj) {
    idAns = identity(obj[propName]);
  }

  if (!(typeof idAns === 'object' && 'value' in idAns && typeof idAns.value === 'boolean')) {
    throw new TypeError('Expected identity() to return { value: boolean }.');
  }

  const { value } = idAns;

  return {
    value: value && prevResult.value,
    /**
       * Throw an error if identity is not true.
       * @param {string} paramName A name of parameter which represents the object, tested by identity function.
       */
    throw(paramName) {
      prevResult.throw(paramName);

      if (!this.value) {
        throw new FalseIdentityError(paramName, `object with property ${propName} satisfying identity`);
      }
    },
  };
}

/**
 * Tests whether {@link obj} is an object.
 * 
 * @param {any} obj An object to test. 
 */
function isObject(obj) {
  const value = typeof obj === 'object';

  /**
   * Also test if object has property, satisfying {@link identity} condition.
   * 
   * Calls can be chained.
   * 
   * @function withProperty
   * 
   * @param {string} name A name of property to test.
   * @param {(value: any) => { value: boolean }} identity An identity function, returning an object with result.
   * @returns { value: boolean, withProperty: () => typeof withProperty }
   */
  const withProperty = (name, identity) => {
    prevResult = withPropertyFn(obj, name, identity, prevResult);

    return {
      ...prevResult,
      withProperty,
    };
  }

  let prevResult = {
    value,
    withProperty,

    /**
     * Throw an error if identity is not true.
     * @param {string} paramName A name of parameter which represents the object, tested by identity function.
     */
    throw(paramName) {
      if (!this.value) {
        throw new FalseIdentityError(paramName, 'object');
      }
    }
  };

  return prevResult;
}

export default isObject;