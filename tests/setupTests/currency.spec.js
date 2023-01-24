import {
  currencyFactorValidParams,
  currencyFactorInvalidParams,
  currencyPartialValidParams,
  currencyPartialInvalidParams,
  currencyValidParams,
  currencyInvalidParams,
} from './currency';

describe('Tests for CurrencyFactor constructor parameters', () => {
  test('Invalid params do not contain parameters, occurring in valid params', () => {
    currencyFactorValidParams.every(validParamsObj => {
      return !currencyFactorInvalidParams.some(invalidParamsObj => {
        return Object.keys(validParamsObj).every(k => {
          return validParamsObj[k] === invalidParamsObj[k];
        });
      });
    });
  });
});

describe('Tests for CurrencyPartial constructor parameters', () => {
  test('Invalid params do not contain parameters, occurring in valid params', () => {
    currencyPartialValidParams.every(validParamsObj => {
      return !currencyPartialInvalidParams.some(invalidParamsObj => {
        return Object.keys(validParamsObj).every(k => {
          return validParamsObj[k] === invalidParamsObj[k];
        });
      });
    });
  });
});

describe('Tests for Currency constructor parameters', () => {
  test('Invalid params do not contain parameters, occurring in valid params', () => {
    currencyValidParams.every(validParamsObj => {
      return !currencyInvalidParams.some(invalidParamsObj => {
        return Object.keys(validParamsObj).every(k => {
          return validParamsObj[k] === invalidParamsObj[k];
        });
      });
    });
  });
});
