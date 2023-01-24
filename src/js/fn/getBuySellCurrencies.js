function getBuySellCurrencies(cryptoId, currencyId, cryptos, currencies) {
  const crypto = cryptos.find(c => c.id === cryptoId);
  const currency = currencies.find(c => c.id === currencyId);
  const restCryptos = cryptos.filter(c => c.id !== cryptoId);
  const restCurrencies = currencies.filter(c => c.id !== currencyId);

  return {
    crypto,
    currency,
    restCryptos,
    restCurrencies,
  };
}

export default getBuySellCurrencies;
