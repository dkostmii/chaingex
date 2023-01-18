/**
 * Calculates the Cartesian product for given {@link args list} of arrays.
 * 
 * @param {any[][]} args 
 * @returns {any[][]}
 */
export function product(args) {
  if (!Array.isArray(args))
    throw new TypeError('Expected args to be an Array.');

  if (!args.length)
    return [[]];

  const prod = product(args.slice(1));
  const r = [];

  args[0].forEach(x => {
      prod.forEach(p => {
          r.push([x].concat(p));
      });
  });

  return r;
}

/**
 * Calculates the Cartesian product for {@link obj object's} properties.
 * 
 * @param {{}} obj 
 * @returns {{}[]}
 */
function objectProduct(obj) {
  const keys = Object.keys(obj);
  const values = keys.map(x => obj[x]);

  return product(values).map((p) => {
      const e = {};
      keys.forEach((k, n) => { e[k] = p[n] });
      return e;
  });
}

/**
 * 
 * @param {{}[]} validParamsSpace 
 * @param {{}[]} invalidParamsSpace
 * @returns {{ validParams: {}[], invalidParams: {}[] }}
 */
export function createParamsMatrix(validParamsSpace, invalidParamsSpace) {
  const validParamsSpaceKeys = Object.keys(validParamsSpace);
  const invalidParamsSpaceKeys = Object.keys(invalidParamsSpace);

  if (!(validParamsSpaceKeys.length === invalidParamsSpaceKeys.length &&
      validParamsSpaceKeys.every(vk => invalidParamsSpaceKeys.includes(vk)))) {
    throw new TypeError('Expected validParamsSpace to have same keys, as invalidParamsSpace.');
  }

  const isValidParam = (param, key) => {
    return validParamsSpace[key].includes(param);
  }

  const validParamMatrix = objectProduct(validParamsSpace);

  const invalidParamMatrix = (
    objectProduct(invalidParamsSpace)
      // Exclude objects with all parameters valid
      .filter(obj => {
        return !Object.keys(obj).every(k => {
          return isValidParam(obj[k], k);
        });
      })
  );

  return {
    validParams: validParamMatrix,
    invalidParams: invalidParamMatrix
  };
}
