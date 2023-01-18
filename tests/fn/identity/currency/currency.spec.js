import { FalseIdentityError } from "../../../../src/js/fn/identity/base";
import { isCurrency, isCurrencyPartial } from "../../../../src/js/fn/identity/currency/currency";
import { currencyValidParams, currencyPartialValidParams } from "../../../setupTests/currency";
import { Currency, CurrencyPartial } from "../../../../src/js/types/currency";

const currency = new Currency(currencyValidParams[0]);
const nonCurrency = currencyValidParams[0];

describe('isCurrency() tests', () => {
  test('Properly indicates a Currency', () => {
    expect(isCurrency(currency)).toMatchObject({ value: true });
  });

  test('Properly indicates a non-Currency', () => {
    expect(isCurrency(nonCurrency)).toMatchObject({ value: false });
  });

  test('Does not throw, if Currency object provided', () => {
    expect(() => {
      isCurrency(currency).throw('currency');
    }).not.toThrow();
  });

  test('Throws FalseIdentityError, if non-Currency object provided', () => {
    expect(() => {
      isCurrency(nonCurrency).throw('nonCurrency');
    }).toThrow('Expected nonCurrency to be Currency.');

    expect(() => {
      isCurrency(nonCurrency).throw('nonCurrency');
    }).toThrow(FalseIdentityError);
  });
});

const currencyPartial = new CurrencyPartial(currencyPartialValidParams[0]);
const nonCurrencyPartial = currencyPartialValidParams[0];

describe('isCurrencyPartial() tests', () => {
  test('Properly indicates a Currency', () => {
    expect(isCurrencyPartial(currencyPartial)).toMatchObject({ value: true });
  });

  test('Properly indicates a non-Currency', () => {
    expect(isCurrencyPartial(nonCurrencyPartial)).toMatchObject({ value: false });
  });

  test('Does not throw, if Currency object provided', () => {
    expect(() => {
      isCurrencyPartial(currencyPartial).throw('currency');
    }).not.toThrow();
  });

  test('Throws FalseIdentityError, if non-Currency object provided', () => {
    expect(() => {
      isCurrencyPartial(nonCurrencyPartial).throw('nonCurrency');
    }).toThrow('Expected nonCurrency to be CurrencyPartial.');

    expect(() => {
      isCurrencyPartial(nonCurrencyPartial).throw('nonCurrency');
    }).toThrow(FalseIdentityError);
  });
});
