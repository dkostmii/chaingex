import CurrencyModel from './currency.js';

/**
 * If true, assumes that empty array is not valid array for some type.
 * This might cause errors to be thrown (in {@link throwIfNot()} clauses).
 */
const requireNonEmptyArray = true;

/**
 * @typedef {import('../../fetch-currencies.js').currency} currencyData
 */

/**
 * A {@link currencyData} pair.
 * @typedef {[ currencyData, currencyData ]} currencyDataPair
 */

/**
 * Indicates if {@link currency currency parameter} is {@link currencyData currency}.
 * @param {any} currency An object to test.
 * @returns `true` if {@link currency currency parameter} is {@link currencyData currency}.
 */
export function isCurrency(currency) {
  return (
    typeof currency === 'object' &&
    'id' in currency && typeof currency.id === 'string' &&
    'name' in currency && typeof currency.name === 'string' &&
    'short' in currency && typeof currency.short === 'string' &&
    'price' in currency && typeof currency.price === 'number' &&
    'change' in currency && typeof currency.change === 'number'
  );
}

/**
 * @typedef {import('../../fetch-currencies.js').currencyPartial} currencyDataPartial
 */

/**
 * Indicates if {@link currencyPartial currencyPartial parameter} is {@link currencyDataPartial} (without `price` property).
 * @param {any} currencyPartial An object to test.
 * @returns `true` if {@link currencyPartial currencyPartial parameter} is {@link currencyDataPartial}.
 */
export function isPartialCurrency(currencyPartial) {
  return (
    typeof currencyPartial === 'object' &&
    'id' in currencyPartial && typeof currencyPartial.id === 'string' &&
    'name' in currencyPartial && typeof currencyPartial.name === 'string' &&
    'short' in currencyPartial && typeof currencyPartial.short === 'string'
  );
}

/**
 * Indicates if {@link currencies currencies parameter} is {@link currencyData currency[]}.
 * @param {any} currencies An object to test.
 * @returns `true` if {@link currencies currencies parameter} is {@link currencyData currency[]}.
 */
export function isArrayOfCurrencies(currencies) {
  if (requireNonEmptyArray) {
    return (
      Array.isArray(currencies) &&
      currencies.length > 0 &&
      currencies.every(c => isCurrency(c))
    );
  }

  return Array.isArray(currencies) && currencies.every(c => isCurrency(c));
}

/**
 * Indicates if {@link currencyPair currencyPair parameter} is {@link currencyDataPair}.
 * @param {any} currencyPair An object to test.
 * @returns `true` if {@link currencyPair currencyPair parameter} is {@link currencyDataPair}.
 */
function isCurrencyPair(currencyPair) {
  return (
    isArrayOfCurrencies(currencyPair) &&
    currencyPair.length === 2
  );
}

/**
 * Indicates if {@link currencyPairs currencyPairs parameter} is {@link currencyDataPair currencyDataPair[]}.
 * @param {any} currencyPairs An object to test.
 * @returns `true` if {@link currencyPairs currencyPairs parameter} is {@link currencyDataPair currencyDataPair[]}.
 */
function isArrayOfCurrencyPairs(currencyPairs) {
  if (requireNonEmptyArray) {
    return (
      Array.isArray(currencyPairs) &&
      currencyPairs.length > 0 &&
      currencyPairs.every(pair => isCurrencyPair(pair))
    );
  }

  return Array.isArray(currencyPairs) && currencyPairs.every(pair => isCurrencyPair(pair));
}

/**
 * Throws an error if an {@link obj object} does not satisfy a {@link pred predicate}.
 * 
 * @param {any} obj An object to test.
 * @param {(obj: any) => boolean} pred A predicate to test an {@link obj} with.
 * @param {string} message A string with error message.
 */
function throwIfNot(obj, pred, message) {
  if (!(typeof message === 'string' || message instanceof String)) {
    throw new TypeError('Expected string to be a string.');
  }

  if (!(pred instanceof Function)) {
    throw new TypeError('Expected pred to be a Function.');
  }

  if (pred(obj) !== true) {
    throw new Error(message);
  }
}

/**
 * Throws an error {@link currency currency parameter} is not a {@link currencyData currency object}.
 * 
 * @param {any} currency An object to test.
 */
export function throwIfNotACurrency(currency) {
  throwIfNot(currency, isCurrency, 'Expected currency to be a currency.');
}

/**
 * Throws an error {@link currencyPartial currencyPartial parameter} is not a {@link currencyDataPartial currencyPartial object}.
 * 
 * @param {any} currencyPartial An object to test.
 */
export function throwIfNotAPartialCurrency(currencyPartial) {
  throwIfNot(currencyPartial, isPartialCurrency, 'Expected currencyPartial to be a currencyPartial.');
}

/**
 * Throws an error {@link currencies currencies parameter} is not a {@link currencyData currency[]} array.
 * @param {any} currencies An object to test.
 */
export function throwIfNotArrayOfCurrencies(currencies) {
  throwIfNot(
    currencies,
    arr => isArrayOfCurrencies(arr),
    'Expected currencies to be array of currencies.'
  );
}

/**
 * Throws if {@link currencyPair} is not a {@link currencyDataPair}.
 * @param {any} currencyPair An object to test.
 */
export function throwIfNotPairOfCurrencies(currencyPair) {
  throwIfNot(
    currencyPair,
    arr => isCurrencyPair(arr),
    'Expected currencyPair to be a pair of currencies (length = 2).'
  );
}

/**
 * Throws if {@link currencyPairs} is not a {@link currencyDataPair currencyDataPair[]}.
 * @param {any} currencyPairs An object to test.
 */
export function throwIfNotArrayOfCurrencyPairs(currencyPairs) {
  throwIfNot(
    currencyPairs,
    arr => isArrayOfCurrencyPairs(arr),
    'Expected currencyPairs to be Array with currency pairs.'
  );
}

/**
 * Throws an error if {@link number} is not a number.
 * 
 * **Also throws if {@link number} has value `NaN`**
 * @param {any} number An object to test.
 */
export function throwIfNotANumber(number) {
  throwIfNot(number,
    number => {
      return typeof number === 'number' && !Number.isNaN(number)
    }, `Expected number to be a number. Got: ${typeof number} with value ${number}`);
}

/**
 * Throws an error if {@link string} is not a string.
 * @param {any} string An object to test.
 */
export function throwIfNotAString(string) {
  throwIfNot(string,
    string => {
      return typeof string === 'string' || string instanceof String
    }, 'Expected string to be a string.');
}

/**
 * Throws if {@link fun} is not a {@link Function}.
 * @param {any} fun An object to test. 
 */
export function throwIfNotAFunction(fun) {
  throwIfNot(fun,
    f => f instanceof Function, 'Expected fun to be a Function.');
}

/**
 * @class
 * @classdesc Represents an error if `addEventListener()` or `removeEventListener()`
 * gets unknown event type as a parameter.
 * 
 * See {@link CurrencyModel.addEventListener()}, {@link CurrencyModel.removeEventListener()} for usage.
 */
export class UnknownEventError extends TypeError {
  constructor(eventName) {
    super(`Unknown Event: ${eventName}`);
    this.name = 'Unknown Event Error';
  }
}

/**
 * Creates an Array with {@link currencyPair}. Does not include identical assets in the pair.
 * 
 * That means, it does not produce pair `[{ id: 'usdt', ... }, { id: 'usdt', ...}]`.
 * @param {currencyData[]} currencies An array of currencies, see {@link currencyData} type.
 * @returns {currencyPair[]} An array of currency pairs, see {@link currencyPair}.
 */
export function createCurrencyPairs(currencies) {
  throwIfNotArrayOfCurrencies(currencies);

  const pairsArr = [];

  for (let i = 0; i < currencies.length; i += 1) {
    for (let j = 0; j < currencies.length; j += 1) {
      if (currencies[i].id !== currencies[j].id) {
        pairsArr.push([ currencies[i], currencies[j] ]);
      }
    }
  }

  throwIfNotArrayOfCurrencyPairs(pairsArr);

  return pairsArr;
}