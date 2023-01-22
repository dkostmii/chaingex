import { usdAmountToCryptoOrCurrency, cryptoOrCurrencyAmountToUsd } from "./amount.js";

/**
 * 
 * @param {any} card
 * @returns {string}
 */
export function sanitizeCurrencyCard(card) {
  if (typeof card !== 'string') {
    card = '';
  }

  return card.replace(/[^0-9]/g, '').substring(0, 16);
}

/**
 * 
 * @param {any} card
 * @returns {string}
 */
export function formatCurrencyCard(card) {
  if (typeof card !== 'string') {
    card = '';
  }

  const pattern = /[0-9]{1,4}/g;

  const sanitized = sanitizeCurrencyCard(card);

  const result = [];

  let matches = pattern.exec(sanitized);

  while (matches) {
    const token = matches[0];
    result.push(token);
    matches = pattern.exec(sanitized);
  }

  return result.join(' ');
}

/**
 * 
 * @param {number} unitCurrencyPrice
 * @param {number} anotherCurrencyPrice
 */
export function onePerAnother(unitCurrencyPrice, anotherCurrencyPrice) {
  return usdAmountToCryptoOrCurrency(
    cryptoOrCurrencyAmountToUsd(1, unitCurrencyPrice), anotherCurrencyPrice);
}