import { isString, isNumber, isObject } from '../fn/identity/index.js';

/**
 * @typedef {import('../config/currencies').cryptocurrencies} cryptocurrencies
 */

/**
 * @typedef {Object} currencyFactor
 * 
 * @property {string} id A currency identifier.
 * 
 * See {@link cryptocurrencies} for possible cryptocurrency identifiers.
 * 
 * @property {number} factor A number which multiplies a price.
 * 
 * For example, `factor: 0.5` halves the price and `factor: 2` doubles.
 * 
 * **Must be non-negative.**
 */

/**
 * A partial currency object.
 * 
 * This object misses a `price` property.
 * 
 * @typedef {Object} currencyPartial
 * @property {string} id A currency identifier
 * @property {string} name A human-readable currency name
 * @property {string} short A short currency name
 * @property {number?} price A price of cryptocurrency in USDT *(optional)*
 * @property {number?} change A change in price of cryptocurrency within 24hr window *(optional)*
 */

/**
 * A currency object.
 * 
 * @typedef {Object} currency
 * @property {string} id A currency identifier
 * @property {string} name A human-readable currency name
 * @property {string} short A short currency name
 * @property {number} price A price of cryptocurrency in USDT
 * @property {number} change A change in price of cryptocurrency within 24hr window
 */

/**
 * This class represents a price factor for {@link Currency}.
 */
export class CurrencyFactor {
  /**
   * An object containing **required fields** `id`, `factor`.
   * 
   * @param {currencyFactor} currencyFactorData
   */
  constructor(currencyFactorData) {
    isObject(currencyFactorData)
      .withProperty('id', id => isString(id).nonEmpty())
      .withProperty('factor', factor => isNumber(factor).nonNegative())
      .throw('currencyFactorData');

    const { id, factor } = currencyFactorData;

    /**
     * A currency identifier.
     * 
     * See {@link cryptocurrencies} for possible cryptocurrency identifiers.
     * 
     * @type {string}
     * @public
     */
    this.id = id;

    /**
     * A number which multiplies a price.
     * 
     * For example, `factor: 0.5` halves the price and `factor: 2` doubles.
     * 
     * **Must be non-negative.**
     * 
     * @type {number}
     * @public
     */
    this.factor = factor;
  }
}

/**
 * This class represents a partial currency data, 
 * having {@link CurrencyPartial.price} and {@link CurrencyPartial.change} optional.
 * 
 * Full currency data can be obtained out of this object using method {@link CurrencyPartial.getFinal()}.
 */
export class CurrencyPartial {
  /**
   * An object containing **required fields**: `id`, `name`, `short`.
   * 
   * Fields `price` and `change` are *optional*.
   * 
   * Full currency data can be obtained out of this object using method {@link CurrencyPartial.getFinal()}.
   * 
   * @param {currencyPartial} currencyPartialData
   */
  constructor(currencyPartialData) {
    isObject(currencyPartialData)
      .withProperty('id', id => isString(id).nonEmpty())
      .withProperty('name', name => isString(name).nonEmpty())
      .withProperty('short', short => isString(short).nonEmpty())
      .throw('currencyPartialData');

    const { id, name, short } = currencyPartialData;

    /**
     * A currency identifier
     * 
     * @type {string}
     * @public
     */
    this.id = id;

    /**
     * A human-readable currency name
     * 
     * @type {string}
     * @public
     */
    this.name = name;

    /**
     * A short currency name
     * 
     * @type {string}
     * @public
     */
    this.short = short;

    if ('price' in currencyPartialData) {
      isNumber(currencyPartialData.price).throw('currencyPartialData.price property');

      /**
       * A price of cryptocurrency in USDT *(optional)*
       * 
       * @type {number?}
       * @public
       */
      this.price = currencyPartialData.price;
    }

    if ('change' in currencyPartialData) {
      isNumber(currencyPartialData.change).throw('currencyPartialData.change property');

      /**
       * A change in price of cryptocurrency within 24hr window *(optional)*
       * 
       * @type {number?}
       * @public
       */
      this.change = currencyPartialData.change;
    }
  }

  /**
   * Gets full currency data instead of partial.
   * @returns {Currency} An object with full currency data, having {@link Currency.price} and {@link Currency.change} defined.
   */
  getFinal() {
    return new Currency({
      id: this.id,
      name: this.name,
      short: this.short,
      price: this.price,
      change: this.change
    });
  }
}

/**
 * This class represents full currency data.
 */
export class Currency extends CurrencyPartial {
  /**
   * An object containing **required fields**: `id`, `name`, `short`, `price`, `change`.
   * 
   * @param {currency} currencyData
   */
  constructor(currencyData) {
    isObject(currencyData)
      .withProperty('id', id => isString(id).nonEmpty())
      .withProperty('name', name => isString(name).nonEmpty())
      .withProperty('short', short => isString(short).nonEmpty())
      .withProperty('price', price => isNumber(price))
      .withProperty('change', change => isNumber(change))
      .throw('currencyData');

    super(currencyData);

    /**
     * A price of cryptocurrency in USDT
     * @type {number}
     * @public
     */
    this.price;

    /**
     * A change in price of cryptocurrency within 24hr window
     * 
     * @type {number}
     * @public
     */
    this.change;
  }
}
