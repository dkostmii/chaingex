import { isFunction } from "../../../src/js/fn/identity";
import { FalseIdentityError } from "../../../src/js/fn/identity/base";
import { fn, notFnArr } from '../../setupTests/base';

describe('isFunction() tests', () => {
  test('Returns an object with value property', () => {
    const fns = [fn, ...notFnArr];
    const idAnswers = fns.map(fn => isFunction(fn));
    
    idAnswers.forEach(idAns => {
      expect(idAns).toMatchObject({ value: expect.any(Boolean) });
    });
  });

  test('Properly indicates a Function', () => {
    const idAns = isFunction(fn);
    expect(idAns.value).toBe(true);
  });

  test('Properly indicates a non-Function', () => {
    const idAnswers = notFnArr.map(fn => isFunction(fn));
    
    idAnswers.forEach(idAns => {
      expect(idAns).toMatchObject({ value: false });
    });
  });

  test('Does not throw if Function provided', () => {
    expect(
      () => isFunction(fn).throw('fn')
    ).not.toThrow(FalseIdentityError);
  });

  test('Does throw FalseIdentityError, if non-Function provided', () => {
    notFnArr.forEach(fn => {
      expect(
        () => isFunction(fn).throw('fn')
      ).toThrow("Expected fn to be Function.");
      
      expect(
        () => isFunction(fn).throw('fn')
      ).toThrow(FalseIdentityError);
    });
  });

  test('.throw() requires paramName to be a string', () => {
    notFnArr.forEach(fn => {
      expect(
        () => isFunction(fn).throw()
      ).toThrow("Expected paramName to be non-empty string.");
      
      expect(
        () => isFunction(fn).throw()
      ).toThrow(TypeError);
      
      expect(
        () => isFunction(fn).throw('')
      ).toThrow("Expected paramName to be non-empty string.");

      expect(
        () => isFunction(fn).throw('fn')
      ).toThrow(TypeError);
    });
  });
});
