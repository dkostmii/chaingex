import { product, createParamsMatrix } from './params';
import { numbers, nonNegative, negative, nans, nonStrings, empty, nonEmpty } from './base';

export { product };

export const anyStrSmall = [...empty.slice(0, 1), ...nonStrings.slice(0, 1), ...nonEmpty.slice(0, 1)];
export const anyNumSmall = [...negative.slice(0, 1), ...nans.slice(0, 1), ...nonNegative.slice(0, 1)];
export const nonEmptySmall = nonEmpty.slice(0, 2);
export const nonNegativeSmall = nonNegative.slice(0, 2);
export const numbersSmall = [...negative.slice(0, 1), ...nonNegative.slice(0, 1)];

const currencyFactorValidParamsSpace = {
  id: nonEmptySmall,
  factor: nonNegativeSmall,
};

const currencyFactorInvalidParamsSpace = {
  id: anyNumSmall,
  factor: anyStrSmall,
};

const currencyPartialValidParamsSpace = {
  id: nonEmptySmall,
  name: nonEmptySmall,
  short: nonEmptySmall,
};

const currencyPartialInvalidParamsSpace = {
  id: anyStrSmall,
  name: anyStrSmall,
  short: anyStrSmall,
};

const currencyValidParamsSpace = {
  ...currencyPartialValidParamsSpace,
  price: numbersSmall,
  change: numbersSmall,
}

const currencyInvalidParamsSpace = {
  ...currencyPartialInvalidParamsSpace,
  price: anyNumSmall,
  change: anyNumSmall,
};

export const {
  validParams: currencyFactorValidParams,
  invalidParams: currencyFactorInvalidParams,
} = createParamsMatrix(currencyFactorValidParamsSpace, currencyFactorInvalidParamsSpace);

export const {
  validParams: currencyPartialValidParams,
  invalidParams: currencyPartialInvalidParams,
} = createParamsMatrix(currencyPartialValidParamsSpace, currencyPartialInvalidParamsSpace);

export const {
  validParams: currencyValidParams,
  invalidParams: currencyInvalidParams,
} = createParamsMatrix(currencyValidParamsSpace, currencyInvalidParamsSpace);
