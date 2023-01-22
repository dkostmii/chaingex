import { Model } from "../base.js";

import { usdAmountToCryptoOrCurrency } from "./amount.js";
import { minAmountUsd } from "../../config/exchanger.js";

import { clamp, sanitizeNumberValue } from "./number.js";

/**
 * 
 * @param {Model} amountModel 
 * @param {Model} cryptoOrCurrencyModel 
 */
function amountClamp(cryptoOrCurrencyAmountModel, cryptoOrCurrencyModel) {
  cryptoOrCurrencyAmountModel.updateFn = value => {
    if (!(typeof value === 'string' || typeof value === 'number')) {
      value = '';
    }

    const amount = sanitizeNumberValue(value);

    const cryptoOrCurrencyMinAmount = usdAmountToCryptoOrCurrency(
      minAmountUsd, cryptoOrCurrencyModel.value.price);

    const cryptoOrCurrencyMaxAmount = Number.POSITIVE_INFINITY;

    const clampedAmount = clamp(amount, cryptoOrCurrencyMinAmount, cryptoOrCurrencyMaxAmount);

    cryptoOrCurrencyAmountModel.clampApplied = amount !== clampedAmount;
    cryptoOrCurrencyAmountModel.clampRange = [cryptoOrCurrencyMinAmount, cryptoOrCurrencyMaxAmount];

    return clampedAmount;
  };
}

export default amountClamp;
