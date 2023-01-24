import { replaceMultipleOfCharsWithFirst } from "./string.js";

/**
 * Replaces all trailing periods in {@link stringNumber} `.` with `.0` or `0.`.
 * 
 * For example: `.123456` will become `0.123456` and `123456.` will become `123456.0`.
 * 
 * @param {string | String} stringNumber A string to process.
 * 
 * @returns {string}
 */
function replaceTrailingPeriods(stringNumber) {
  if (!(typeof stringNumber === 'string' || stringNumber instanceof String)) {
    throw new TypeError('Expected stringNumber to be a string.');
  }

  const leadingPeriod = /^\./g;
  stringNumber = stringNumber.replace(leadingPeriod, '0.');

  const trailingPeriod = /\.$/g;
  stringNumber = stringNumber.replace(trailingPeriod, '.0');

  return stringNumber;
}

function emptyValueCheck(stringNumber) {
  if (!(typeof stringNumber === 'string' || stringNumber instanceof String)) {
    throw new TypeError('Expected stringNumber to be a string.');
  }

  if (stringNumber.length === 0) {
    return '0';
  }

  return stringNumber;
}

/**
 * 
 * @param {string | number} stringNumber 
 * @returns {Number}
 */
export function sanitizeNumberValue(stringNumber) {
  if (typeof stringNumber === 'number') {
    return stringNumber;
  }

  if (!(typeof stringNumber === 'string' || stringNumber instanceof String)) {
    throw new TypeError('Expected stringNumber to be a string.');
  }

  const comma = /,/g;
  const pattern = /[^0-9\.]/g;

  stringNumber = stringNumber.replace(comma, '.');
  stringNumber = stringNumber.replace(pattern, '');
  stringNumber = replaceMultipleOfCharsWithFirst(stringNumber, '.');
  stringNumber = replaceTrailingPeriods(stringNumber);
  stringNumber = emptyValueCheck(stringNumber);

  return parseFloat(stringNumber);
}

export function clamp(value, min = Number.NEGATIVE_INFINITY, max = Number.POSITIVE_INFINITY) {
  if (typeof value !== 'number') {
    throw new TypeError('Expected value to be Number.');
  }

  if (typeof min !== 'number') {
    throw new TypeError('Expected min to be Number.');
  }

  if (typeof max !== 'number') {
    throw new TypeError('Expected max to be Number.');
  }

  if (value < min) {
    return min;
  } else if (value > max) {
    return max;
  }

  return value;
}