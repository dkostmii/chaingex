/**
 * Formats a number to fixed precision if needed.
 * 
 * Precision is `8` digits after period. And is applied to `x < 1e-4`
 * 
 * @param {number | string} x A number to format. Can be either number of string.
 * @returns {string} A string containing formatted number.
 */
export function preCheck(x) {
  if (typeof x === 'string' || x instanceof String) {
    x = parseFloat(x);
  }

  if (x < 1e-4) return x.toFixed(8);
  else if (Math.floor(x) < 1e+4) {
    return x.toPrecision(4);
  }
  
  return x.toString();
}

export function preCheckChange(num) {
  return num.toFixed(2);
}
