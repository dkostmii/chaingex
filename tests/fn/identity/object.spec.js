import { isObject } from "../../../src/js/fn/identity";
import { FalseIdentityError } from "../../../src/js/fn/identity/base";
import {
  anything,
  objects,
  nonObjects,
  singlePropObj,
  doublePropObj,
  multiPropObj,
  heftyObj,
  isNumberMock,
  invalidIdentityMock,
} from "../../setupTests/base";

describe('isObject() tests', () => {
  test('Returns an object with value property', () => {
    
    const idAnswers = anything.map(n => isObject(n));

    
    idAnswers.forEach(idAns => {
      expect(idAns).toMatchObject({ value: expect.any(Boolean) });
    });
  });

  test('Properly indicates an object', () => {
    const idAnswers = objects.map(o => isObject(o));

    idAnswers.forEach(idAns => {
      expect(idAns).toMatchObject({ value: true });
    })
  });

  test('Properly indicates a non-object', () => {
    const idAnswers = nonObjects.map(o => isObject(o));

    idAnswers.forEach(idAns => {
      expect(idAns).toMatchObject({ value: false });
    })
  });

  test('Does not throw for an object', () => {
    objects.forEach(o => {
      expect(
        () => isObject(o).throw('o')
      ).not.toThrow();
    })
  });

  test('Throws for a non-object', () => {
    nonObjects.forEach(o => {
      expect(
        () => isObject(o).throw('o')
      ).toThrow('Expected o to be object.');

      expect(
        () => isObject(o).throw('o')
      ).toThrow(FalseIdentityError);
    });
  });

  test('.throw() requires paramName to be a non-empty string', () => {
    nonObjects.forEach(n => {
      
      expect(
        
        () => isObject(n).throw()
      ).toThrow("Expected paramName to be non-empty string.");

      
      expect(
        
        () => isObject(n).throw()
      ).toThrow(TypeError);

      
      expect(
        
        () => isObject(n).throw('')
      ).toThrow("Expected paramName to be non-empty string.");

      
      expect(
        
        () => isObject(n).throw('')
      ).toThrow(TypeError);
    });
  });

  test('.withProperty() properly indicates existing prop', () => {
    expect(
      isObject(singlePropObj).withProperty('hello', isNumberMock)
    ).toMatchObject({ value: true });

    expect(
      isObject(doublePropObj).withProperty('world', isNumberMock)
    ).toMatchObject({ value: true });

    expect(
      isObject(multiPropObj).withProperty('e', isNumberMock)
    ).toMatchObject({ value: true });

    expect(
      isObject(heftyObj).withProperty('z', isNumberMock)
    ).toMatchObject({ value: true });
  });

  test('.withProperty() properly indicates non-existing prop', () => {
    expect(
      isObject(singlePropObj).withProperty('world', isNumberMock)
    ).toMatchObject({ value: false });

    expect(
      isObject(doublePropObj).withProperty('-1', isNumberMock)
    ).toMatchObject({ value: false });

    expect(
      isObject(multiPropObj).withProperty('123456789qwerty', isNumberMock)
    ).toMatchObject({ value: false });

    expect(
      isObject(heftyObj).withProperty('0', isNumberMock)
    ).toMatchObject({ value: false });
  });

  test('.withProperty() throws if invalid identity provided', () => {
    expect(
      () => isObject(singlePropObj).withProperty('hello', invalidIdentityMock).throw('singlePropObj')
    ).toThrow('Expected identity() to return { value: boolean }.');

    expect(
      () => isObject(doublePropObj).withProperty('world', invalidIdentityMock).throw('doublePropObj')
    ).toThrow('Expected identity() to return { value: boolean }.');

    expect(
      () => isObject(multiPropObj).withProperty('e', invalidIdentityMock).throw('multiPropObj')
    ).toThrow('Expected identity() to return { value: boolean }.');

    expect(
      () => isObject(heftyObj).withProperty('z', invalidIdentityMock).throw('heftyObj')
    ).toThrow('Expected identity() to return { value: boolean }.');
  })

  test('.withProperty().throw() does not throw on existing prop', () => {
    expect(
      () => isObject(singlePropObj).withProperty('hello', isNumberMock).throw('singlePropObj')
    ).not.toThrow();

    expect(
      () => isObject(doublePropObj).withProperty('world', isNumberMock).throw('doublePropObj')
    ).not.toThrow();

    expect(
      () => isObject(multiPropObj).withProperty('e', isNumberMock).throw('multiPropObj')
    ).not.toThrow();

    expect(
      () => isObject(heftyObj).withProperty('z', isNumberMock).throw('heftyObj')
    ).not.toThrow();
  });

  test('.withProperty().throw() throws on non-existing prop', () => {
    expect(
      () => isObject(singlePropObj).withProperty('world', isNumberMock).throw('singlePropObj')
    ).toThrow(FalseIdentityError);

    expect(
      () => isObject(doublePropObj).withProperty('-1', isNumberMock).throw('doublePropObj')
    ).toThrow(FalseIdentityError);

    expect(
      () => isObject(multiPropObj).withProperty('123456789qwerty', isNumberMock).throw("doublePropObj")
    ).toThrow(FalseIdentityError);

    expect(
      () => isObject(heftyObj).withProperty('0', isNumberMock).throw("heftyObj")
    ).toThrow(FalseIdentityError);
  });

  test('.withProperty() can be chained', () => {
    let chain = isObject(heftyObj);

    Object.keys(heftyObj).forEach(key => {
      chain = chain.withProperty(key, isNumberMock);
    });

    expect(chain).toMatchObject({ value: true, withProperty: expect.any(Function), throw: expect.any(Function) });
  });

  test('.withProperty() can be chained for non-objects', () => {
    let chain = isObject(nonObjects[0]);

    for (let i = 0; i < 100; i += 1) {
      chain = chain.withProperty('hello', isNumberMock);
    }

    expect(chain).toMatchObject({ value: false, withProperty: expect.any(Function), throw: expect.any(Function) });
  })
});

