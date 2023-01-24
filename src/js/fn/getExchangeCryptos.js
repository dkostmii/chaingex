function getExchangeCryptos(cryptoInId, cryptoOutId, cryptos) {
  const cryptoIn = cryptos.find(c => c.id === cryptoInId);
  const cryptoOut = cryptos.find(c => c.id === cryptoOutId);
  const restCryptosIn = cryptos.filter(c => c.id !== cryptoInId && c.id !== cryptoOutId);
  const restCryptosOut = cryptos.filter(c => c.id !== cryptoOutId && c.id !== cryptoInId);

  return {
    cryptoIn,
    cryptoOut,
    restCryptosIn,
    restCryptosOut,
  };
}

export default getExchangeCryptos;