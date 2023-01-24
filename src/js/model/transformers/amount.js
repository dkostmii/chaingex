import { minAmountUsd } from "../../config/exchanger.js";

export function usdAmountToCryptoOrCurrency(usdAmount, cryptoOrCurrencyPrice) {
  return usdAmount / cryptoOrCurrencyPrice;
}

export function cryptoOrCurrencyAmountToUsd(cryptoOrCurrencyAmount, cryptoOrCurrencyPrice) {
  return cryptoOrCurrencyAmount * cryptoOrCurrencyPrice;
}

export function minAmountCryptoOrCurrency(cryptoOrCurrencyPrice) {
  return usdAmountToCryptoOrCurrency(minAmountUsd, cryptoOrCurrencyPrice);
}
