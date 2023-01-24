import { isString } from "../../../src/js/fn/identity";
import { FalseIdentityError } from "../../../src/js/fn/identity/base";
import { strings, nonStrings, empty, nonEmpty, anyStr } from '../../setupTests/base';

describe('isString() tests', () => {
  test('Returns an object with value property', () => {
    const idAnswers = anyStr.map(n => isString(n));
    idAnswers.forEach(idAns => {
      expect(idAns).toMatchObject({ value: expect.any(Boolean) });
    });
  });

  test('Properly indicates a string', () => {
    const idAnswers = strings.map(n => isString(n));
    idAnswers.forEach(idAns => {
      expect(idAns).toMatchObject({ value: true });
    });
  });

  test('Properly indicates a non-strings', () => {
    const idAnswers = nonStrings.map(n => isString(n));
    idAnswers.forEach(idAns => {
      expect(idAns).toMatchObject({ value: false });
    });
  });

  test('Properly indicates a non-empty string', () => {
    const idAnswers = nonEmpty.map(n => isString(n).nonEmpty());
    idAnswers.forEach(idAns => {
      expect(idAns).toMatchObject({ value: true });
    });
  });

  test('Properly indicates an empty string', () => {
    const idAnswers = empty.map(n => isString(n).nonEmpty());
    idAnswers.forEach(idAns => {
      expect(idAns).toMatchObject({ value: false });
    });
  });

  test('Does not throw error for strings', () => {
    strings.forEach(n => {
      expect(
        () => isString(n).throw('n')
      ).not.toThrow();
    });
  });

  test('Throws error for non-strings', () => {
    nonStrings.forEach(n => {
      expect(
        () => isString(n).throw('n')
      ).toThrow("Expected n to be string.");

      expect(
        () => isString(n).throw('n')
      ).toThrow(FalseIdentityError);
    });
  });

  test('.throw() requires paramName to be a non-empty string', () => {
    nonStrings.forEach(n => {
      expect(
        () => isString(n).throw()
      ).toThrow("Expected paramName to be non-empty string.");
      
      expect(
        () => isString(n).throw()
      ).toThrow(TypeError);

      expect(
        () => isString(n).throw('')
      ).toThrow("Expected paramName to be non-empty string.");

      expect(
        () => isString(n).throw('')
      ).toThrow(TypeError);
    });
  });

  test('.nonEmpty() does not throw on non-empty string', () => {
    nonEmpty.forEach(n => {
      expect(
        () => isString(n).nonEmpty().throw('n')
      ).not.toThrow();
    });
  });

  test('.nonEmpty() throws on empty string', () => {
    empty.forEach(n => {
      expect(
        () => isString(n).nonEmpty().throw('n')
      ).toThrow('Expected n to be non-empty string.');
    });

    empty.forEach(n => {
      expect(
        () => isString(n).nonEmpty().throw('n')
      ).toThrow(FalseIdentityError);
    });
  });

  test('.nonEmpty().throw() requires paramName to be a non-empty string', () => {
    empty.forEach(n => {
      expect(
        () => isString(n).nonEmpty().throw()
      ).toThrow("Expected paramName to be non-empty string.");
      
      expect(
        () => isString(n).nonEmpty().throw()
      ).toThrow(TypeError);
      
      expect(
        () => isString(n).nonEmpty().throw('')
      ).toThrow("Expected paramName to be non-empty string.");
      
      expect(
        () => isString(n).nonEmpty().throw('')
      ).toThrow(TypeError);
    });
  });
});
