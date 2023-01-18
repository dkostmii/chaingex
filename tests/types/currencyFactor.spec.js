import { CurrencyFactor } from "../../src/js/types/currency";
import {
  currencyFactorValidParams,
  currencyFactorInvalidParams,
} from "../setupTests/currency";

describe('CurrencyFactor class tests', () => {
  test('Does not throw for valid constructor arguments', () => {
    currencyFactorValidParams.forEach(paramObj => {
      expect(() => {
        new CurrencyFactor(paramObj);
      }).not.toThrow();
    });
  });

  test('Throws for invalid constructor arguments', () => {
    currencyFactorInvalidParams.forEach(paramObj => {
      expect(() => {
        new CurrencyFactor(paramObj);
      }).toThrow();
    });
  });
});
