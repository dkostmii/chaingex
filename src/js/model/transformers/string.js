/**
 * Removes repeating occurrences of {@link char} in {@link str}.
 * @param {string} str A string with text to be processed.
 * @param {string} char A character to search occurrences of.
 * 
 * Must be precisely single character (`char.length === 1`).
 * 
 * Only the first character is keeped, all next characters are removed.
 * 
 * @returns {string} A string containing at most one {@link char} character, which is the first occurrence.
 */
export function replaceMultipleOfCharsWithFirst(str, char) {
  if (!(typeof str === 'string' || str instanceof String)) {
    throw new TypeError('Expected str to be a string.');
  }

  if (!(typeof char === 'string' || char instanceof String)) {
    throw new TypeError('Expected char to be a string.');
  }

  if (char.length !== 1) {
    throw new Error('Expected char to have length === 1');
  }

  let count = 0;
  let result = [];

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === char) {
      count += 1;

      if (count === 1) {
        result.push(str[i]);
      }
    } else {
      result.push(str[i]);
    }
  }

  return result.join('');
}

/**
 * 
 * @param {string} str 
 */
export function capitalize(str) {
  if (!(typeof str === 'string' || str instanceof String)) {
    throw new TypeError('Expected str to be a string.');
  }

  return str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase();
}
