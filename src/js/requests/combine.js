import { isCurrencyPartialArray } from '../fn/identity/currency/index.js';
import { CurrencyPartial } from '../types/currency.js';

/**
 * @typedef {import('../types/currency').CurrencyPartial} CurrencyPartial
 */

/**
 * 
 * @param  {...CurrencyPartial[]} cryptosArrays An array containing multiple {@link CurrencyPartial} arrays.
 * Must have at least 2 such arrays. All arrays must have same length.
 */
function combineCurrencies(...cryptosArrays) {
  if (!(
    Array.isArray(cryptosArrays) &&
    cryptosArrays.length >= 2 &&
    cryptosArrays.every(partialArr => isCurrencyPartialArray(partialArr))
    )) {
      throw new Error("Expcted cryptosArrays to be array with at least 2 arrays of CurrencyPartial.");
    }

  const [firstCryptos, ...restCryptosArrays] = cryptosArrays;

  if (restCryptosArrays.some(restCryptos => restCryptos.length !== firstCryptos.length)) {
    throw new Error('Expected all cryptosArrays to have same length.');
  }

  let result = firstCryptos;

  restCryptosArrays.forEach(restCryptos => {
    restCryptos.forEach(crypto => {
      const resultCryptoIndex = result.findIndex(c => c.id === crypto.id);

      if (resultCryptoIndex === -1) {
        throw new Error(`Crypto with id: ${crypto.id} is missing in one of arrays.`);
      }

      result[resultCryptoIndex] = new CurrencyPartial({ ...result[resultCryptoIndex], ...crypto });
    });
  });

  return result;
}

export default combineCurrencies;
