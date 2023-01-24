import { preCheckChange } from "./pre-check.js";

export function getSign(num) {
  return num === 0 ? num : parseInt((num / Math.abs(num)).toFixed(0));
}

function mapSign(num) {
  switch (getSign(num)) {
    case 1:
      return '+';
    case -1:
      return '-';

    default:
      return '';
  }
}

export function prependSignLiteral(num) {
  return `${mapSign(num)}${preCheckChange(num).replace(/-/g, '')}`
}