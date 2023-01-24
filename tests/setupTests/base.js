export const fn = () => "Hello, World!";
export const notFnArr = [null, undefined, "Hello, World!", (() => "Hello, World!")(), 123, NaN, true, {}];

export const negative = [-2, -1e-8, -312344432, Math.PI * -1.5];
export const nonNegative = [1, 0, 0.00000013, 1e-8, 1e-3, 3.3333, 123456789]
export const numbers = [...nonNegative, ...negative];
export const nans = [NaN, undefined, null, () => "Hello, World!", { value: false }, {}, []];
export const anyNum = [...numbers, ...nans];

export const singlePropObj = { hello: "World!" };
export const doublePropObj = { hello: "Hello, ", world: "World!" };
export const multiPropObj = { a: 1, b: 2, c: 3, d: 4, e: 5 };

// Same object, but for every English letter
export const heftyObj = (
  new Array(26)
    .fill('a'.charCodeAt(0))
    .map((code, id) => { 
      const obj = {};
      obj[String.fromCharCode(code + id)] = id + 1;

      return obj;
    })
    .reduce((acc, val) => {
      return { ...acc, ...val };
    }, {})
);

export const nonObjects = [undefined, NaN, () => "Hello, World!", 123, Number.NEGATIVE_INFINITY, "0", 3.14, Math.PI];
export const objects = [
  {},
  singlePropObj,
  { "123": 123 },
  { "0": "0" },
  doublePropObj,
  multiPropObj,
  heftyObj,
];

export const anything = [...objects, ...nonObjects];

export const isNumberMock = () => {
  return {
    value: true,
    nonNegative() {
      return {
        value: true,
      }
    }
  }
};

export const invalidIdentityMock = () => "123";

export const empty = ["", " ", "    ", "        ", "\n", "     ", new String("   ")];
export const nonEmpty = ["Hello, World!", "a", "aaaaaa", "1234", "0", "[]", "{}", "_", new String("Hello, World!"), new String("12345689qwerty")]
export const nonStrings = [NaN, undefined, null, () => "Hello, World!", { value: false }, {}, [], 12345];

export const strings = [...empty, ...nonEmpty];
export const anyStr = [...strings, ...nonStrings];

