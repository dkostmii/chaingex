const operationTemplate = (operation, operationAmount, cryptoOrFiatShortName) =>
  `${operation}: ${operationAmount} | ${cryptoOrFiatShortName}`;

const messageTemplates = {
  operationType: (operationName) => `Operation: ${operationName}`,
  cryptocurrency: (cryptocurrency) => `Cryptocurrency: ${cryptocurrency}`,
  fiatCurrency: (fiatCurrency) => `Fiat currency: ${fiatCurrency}`,

  currencyPair: (currencyA, currencyB) => `${currencyA} | ${currencyB}`,
  
  sell: (sellAmount, cryptoOrFiatShortName) => operationTemplate('Sell', sellAmount, cryptoOrFiatShortName),
  buy: (buyAmount, cryptoOrFiatShortName) => operationTemplate('Buy', buyAmount, cryptoOrFiatShortName),
  address: (cryptoAddress, cryptoShortName) => `${cryptoShortName} address: ${cryptoAddress}`,
  card: (fiatCardNumber, fiatShortName) => `${fiatShortName} card: ${fiatCardNumber}`,

  operation: operationTemplate,
}

export default messageTemplates;