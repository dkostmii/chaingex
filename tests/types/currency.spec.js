import { Currency } from "../../src/js/types/currency";
import {
  currencyValidParams,
  currencyInvalidParams,
} from "../setupTests/currency";

describe('Currency class tests', () => {
  test('Does not throw for valid constructor arguments', () => {
    currencyValidParams.forEach(paramObj => {
      expect(() => {
        new Currency(paramObj);
      }).not.toThrow();
    });
  });

  test('Throws for invalid constructor arguments', () => {
    currencyInvalidParams.forEach(paramObj => {
      expect(() => {
        new Currency(paramObj)
      }).toThrow();
    });
  });
});
