import { Currency, CurrencyPartial } from "../../src/js/types/currency";
import {
  currencyPartialValidParams,
  currencyPartialInvalidParams,
  currencyValidParams,
  product,
} from "../setupTests/currency";

import { nans } from '../setupTests/base';

describe('CurrencyPartial class tests', () => {
  test('Does not throw for valid constructor arguments', () => {
    currencyPartialValidParams.forEach(paramObj => {
      expect(() => {
        new CurrencyPartial(paramObj);
      }).not.toThrow();
    });
  });

  test('Throws for invalid constructor arguments', () => {
    currencyPartialInvalidParams.forEach(paramObj => {
      expect(() => {
        new CurrencyPartial(paramObj)
      }).toThrow();
    });
  });

  test('Requires valid price and change, if present.', () => {
    const invalidNumbers = nans;

    currencyPartialValidParams.forEach(paramObj => {
      invalidNumbers.forEach(price => {
        expect(() => {
          new CurrencyPartial({ ...paramObj, price });
        }).toThrow();
      });

      invalidNumbers.forEach(change => {
        expect(() => {
          new CurrencyPartial({ ...paramObj, change });
        }).toThrow();
      });

      product([invalidNumbers, invalidNumbers]).forEach(([price, change]) => {
        expect(() => {
          new CurrencyPartial({ ...paramObj, price, change });
        }).toThrow();
      });
    });
  });

  test('.getFinal() method throws if price and/or change fields are not set', () => {
    currencyPartialValidParams.forEach(paramObj => {
      expect(() => {
        new CurrencyPartial(paramObj).getFinal();
      }).toThrow();

      expect(() => {
        new CurrencyPartial({ ...paramObj, price: 0.2 }).getFinal();
      }).toThrow();

      expect(() => {
        new CurrencyPartial({ ...paramObj, change: -0.00001 }).getFinal();
      }).toThrow();
    });
  });

  test('.getFinal() method returns Currency object', () => {
    currencyValidParams.forEach(paramObj => {
      const currencyObj = new CurrencyPartial(paramObj).getFinal();
      expect(currencyObj).toBeInstanceOf(Currency);
    });
  });

  test('.getFinal() does not change data', () => {
    currencyValidParams.forEach(paramObj => {
      const currencyObj = new CurrencyPartial(paramObj).getFinal();
      expect(currencyObj).toMatchObject(paramObj);
    });
  });
});
