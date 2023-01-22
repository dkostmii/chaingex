/**
 * 
 * @param {any} cryptoAddress 
 * @returns {string}
 */
export function sanitizeCryptoAddress(cryptoAddress) {
  if (typeof cryptoAddress !== 'string') {
    cryptoAddress = '';
  }

  return cryptoAddress.replace(/[^A-Za-z0-9]/g, '').substring(0, 64);
}
