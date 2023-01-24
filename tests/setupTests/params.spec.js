import { createParamsMatrix } from "./params";

const validParamsSpace = {
  a: [1, 2, 3],
  b: [4, 5],
};

const invalidParamsSpace = {
  a: [...validParamsSpace.a, ...validParamsSpace.a.map(n => -n)],
  b: [...validParamsSpace.b, ...validParamsSpace.b.map(n => -n)],
}

describe('Tests for createParamsMatrix()', () => {
  test('invalidParams array does not contain objects with all valid params', () => {
    const { invalidParams } = createParamsMatrix(validParamsSpace, invalidParamsSpace);

    const containsObjWithAllValidParams = invalidParams.some(paramObj => {
      return Object.keys(paramObj).every(k => validParamsSpace[k].includes(paramObj[k]));
    });

    expect(containsObjWithAllValidParams).toBe(false);
  });
});
