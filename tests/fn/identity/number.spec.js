import { isNumber } from "../../../src/js/fn/identity";
import { FalseIdentityError } from "../../../src/js/fn/identity/base";
import { numbers, nans, nonNegative, negative, anyNum } from '../../setupTests/base';

describe('isNumber() tests', () => {
  test('Returns an object with value property', () => {
    const ns = [...anyNum];
    const idAnswers = ns.map(n => isNumber(n));
    
    idAnswers.forEach(idAns => {
      expect(idAns).toMatchObject({ value: expect.any(Boolean) });
    });
  });

  test('Properly indicates a Number', () => {
    const ns = [...numbers];
    const idAnswers = ns.map(n => isNumber(n));
    
    idAnswers.forEach(idAns => {
      expect(idAns).toMatchObject({ value: true });
    });
  });

  test('Properly indicates a non-Numbers', () => {
    const ns = [...nans];
    const idAnswers = ns.map(n => isNumber(n));

    idAnswers.forEach(idAns => {
      expect(idAns).toMatchObject({ value: false });
    });
  });

  test('Properly indicates a non-negative Number', () => {
    const ns = [...nonNegative];
    const idAnswers = ns.map(n => isNumber(n).nonNegative());
    
    idAnswers.forEach(idAns => {
      expect(idAns).toMatchObject({ value: true });
    });
  });

  test('Properly indicates a negative number', () => {
    const ns = [...negative];
    const idAnswers = ns.map(n => isNumber(n).nonNegative());
    
    idAnswers.forEach(idAns => {
      expect(idAns).toMatchObject({ value: false });
    });
  });

  test('Does not throw error for Numbers', () => {
    const ns = [...numbers];
    
    ns.forEach(n => {
      expect(
        () => isNumber(n).throw('n')
      ).not.toThrow();
    });
  });

  test('Throws error for non-Numbers', () => {
    const ns = [...nans];
    
    ns.forEach(n => {
      expect(
        () => isNumber(n).throw('n')
      ).toThrow("Expected n to be Number.");

      expect(
        () => isNumber(n).throw('n')
      ).toThrow(FalseIdentityError);
    });
  });

  test('.throw() requires paramName to be a non-empty string', () => {
    nans.forEach(n => {
      expect(
        () => isNumber(n).throw()
      ).toThrow("Expected paramName to be non-empty string.");
      
      expect(
        () => isNumber(n).throw()
      ).toThrow(TypeError);
      
      expect(
        () => isNumber(n).throw('')
      ).toThrow("Expected paramName to be non-empty string.");
      
      expect(
        () => isNumber(n).throw('')
      ).toThrow(TypeError);
    });
  });

  test('.nonNegative() does not throw on non-negative Number', () => {
    const ns = [...nonNegative];
    
    ns.forEach(n => {
      expect(
        () => isNumber(n).nonNegative().throw('n')
      ).not.toThrow();
    });
  });

  test('.nonNegative() throws on negative Number', () => {
    const ns = [...negative];
    
    ns.forEach(n => {
      expect(
        () => isNumber(n).nonNegative().throw('n')
      ).toThrow('Expected n to be non-negative Number.');
    });

    ns.forEach(n => {
      expect(
        () => isNumber(n).nonNegative().throw('n')
      ).toThrow(FalseIdentityError);
    });
  });

  test('.nonNegative().throw() requires paramName to be a non-empty string', () => {
    negative.forEach(n => {
      expect(
        () => isNumber(n).nonNegative().throw()
      ).toThrow("Expected paramName to be non-empty string.");
      
      expect(
        () => isNumber(n).nonNegative().throw()
      ).toThrow(TypeError);
      
      expect(
        () => isNumber(n).nonNegative().throw('')
      ).toThrow("Expected paramName to be non-empty string.");
      
      expect(
        () => isNumber(n).nonNegative().throw('')
      ).toThrow(TypeError);
    });
  });
});
