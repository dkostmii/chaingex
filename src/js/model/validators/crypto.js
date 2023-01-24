import { sanitizeNumberValue } from "../transformers/number.js";
import { minAmountCryptoOrCurrency } from "../transformers/amount.js";
import { sanitizeCryptoAddress } from "../transformers/crypto.js";
import { replaceAllDigits } from "../transformers/string.js";

export function validateCryptoOrCurrencyAmount(stringAmount, cryptoOrCurrencyPrice) {
  if (typeof cryptoOrCurrencyPrice !== 'number') {
    throw new TypeError('Expected cryptoOrCurrencyPrice to be Number.');
  }

  if (typeof stringAmount === 'number') {
    return stringAmount >= minAmountCryptoOrCurrency(cryptoOrCurrencyPrice);
  }

  if (typeof stringAmount !== 'string') {
    stringAmount = '';
  }

  const amount = sanitizeNumberValue(stringAmount);

  return amount >= minAmountCryptoOrCurrency(cryptoOrCurrencyPrice);
}

export function validateCryptoAddress(value) {
  if (typeof value !== 'string') {
    throw new TypeError('Expected value to be string.');
  }

  const sanitized = sanitizeCryptoAddress(value);
  const letters = replaceAllDigits(value);

  return (
    sanitized === value &&
    value.length >= 32 &&
    value.length <= 64 &&
    letters.length > 0
  );
}
