import { FalseIdentityError } from "../../../../src/js/fn/identity/base";
import { isCurrencyArray, isCurrencyPartialArray } from "../../../../src/js/fn/identity/currency";
import { currencyValidParams, currencyPartialValidParams } from "../../../setupTests/currency";
import { Currency, CurrencyPartial } from "../../../../src/js/types/currency";

const currencyArr = currencyValidParams.map(paramsObj => new Currency(paramsObj));
const nonCurrencyArr = [...currencyArr, currencyValidParams[0]];
const emptyArr = [];

describe('isCurrencyArray() tests', () => {
  test('Properly indicates a Currency[] array', () => {
    expect(isCurrencyArray(currencyArr)).toMatchObject({ value: true });
  });

  test('Properly indicates a non-Currency[] array', () => {
    expect(isCurrencyArray(nonCurrencyArr)).toMatchObject({ value: false });
  });

  test('Assumes that an empty array is not a Currency[] array', () => {
    expect(isCurrencyArray(emptyArr)).toMatchObject({ value: false });
  });

  test('Does not throw for a Currency[] array', () => {
    expect(() => {
      isCurrencyArray(currencyArr).throw('currencyArr');
    }).not.toThrow();
  });

  test('Throws for a non-Currency[] array', () => {
    expect(() => {
      isCurrencyArray(nonCurrencyArr).throw('nonCurrencyArr');
    }).toThrow('Expected nonCurrencyArr to be non-empty Currency[] array.');

    expect(() => {
      isCurrencyArray(nonCurrencyArr).throw('nonCurrencyArr');
    }).toThrow(FalseIdentityError);
  });

  test('Throws for an empty array', () => {
    expect(() => {
      isCurrencyArray(emptyArr).throw('emptyArr');
    }).toThrow('Expected emptyArr to be non-empty Currency[] array.');

    expect(() => {
      isCurrencyArray(emptyArr).throw('emptyArr');
    }).toThrow(FalseIdentityError);
  });
});

const currencyPartialArr = currencyPartialValidParams.map(paramsObj => new CurrencyPartial(paramsObj));
const nonCurrencyPartialArr = [...currencyPartialArr, currencyPartialValidParams[0]];

describe('isCurrencyPartialArray() tests', () => {
  test('Properly indicates a CurrencyPartial[] array', () => {
    expect(isCurrencyPartialArray(currencyPartialArr)).toMatchObject({ value: true });
  });

  test('Properly indicates a non-CurrencyPartial[] array', () => {
    expect(isCurrencyPartialArray(nonCurrencyPartialArr)).toMatchObject({ value: false });
  });

  test('Assumes that an empty array is not a CurrencyPartial[] array', () => {
    expect(isCurrencyPartialArray(emptyArr)).toMatchObject({ value: false });
  });

  test('Does not throw for a CurrencyPartial[] array', () => {
    expect(() => {
      isCurrencyPartialArray(currencyPartialArr).throw('currencyPartialArr');
    }).not.toThrow();
  });

  test('Throws for a non-CurrencyPartial[] array', () => {
    expect(() => {
      isCurrencyPartialArray(nonCurrencyPartialArr).throw('nonCurrencyPartialArr');
    }).toThrow('Expected nonCurrencyPartialArr to be non-empty CurrencyPartial[] array.');

    expect(() => {
      isCurrencyPartialArray(nonCurrencyPartialArr).throw('nonCurrencyPartialArr');
    }).toThrow(FalseIdentityError);
  });

  test('Throws for an empty array', () => {
    expect(() => {
      isCurrencyPartialArray(emptyArr).throw('emptyArr');
    }).toThrow('Expected emptyArr to be non-empty CurrencyPartial[] array.');

    expect(() => {
      isCurrencyPartialArray(emptyArr).throw('emptyArr');
    }).toThrow(FalseIdentityError);
  });
});
