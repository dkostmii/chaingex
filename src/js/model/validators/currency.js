import { sanitizeCurrencyCard } from "../transformers/currency.js";

export function validateCurrencyCard(value) {
  if (typeof value !== 'string') {
    throw new TypeError('Expected value to be string.');
  }

  const sanitized = sanitizeCurrencyCard(value);

  return sanitized.length === 16;
}
