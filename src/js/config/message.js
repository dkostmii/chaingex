const sellSmile = '⬇️';
const buySmile = '⬆️';
const exchangeSmile = '🔄';

const operationTemplate = (operation, operationAmount, cryptoOrFiatShortName) =>
  `${getOperationSmile(operation)} <b>${operation}:</b> ${operationAmount} | ${cryptoOrFiatShortName}`;

const messageTemplates = {
  operationType: (operationName) => `${getOperationSmile(operationName)} <b>Operation:</b> ${operationName}`,
  cryptocurrency: (cryptocurrency) => `🪙 <b>Cryptocurrency:</b> ${cryptocurrency}`,
  fiatCurrency: (fiatCurrency) => `💵 <b>Fiat currency:</b> ${fiatCurrency}`,

  currencyPair: (currencyA, currencyB) => `${currencyA} | ${currencyB}`,
  
  sell: (sellAmount, cryptoOrFiatShortName) => operationTemplate('Sell', sellAmount, cryptoOrFiatShortName),
  buy: (buyAmount, cryptoOrFiatShortName) => operationTemplate('Buy', buyAmount, cryptoOrFiatShortName),
  address: (cryptoAddress, cryptoShortName) => `📃 <b>${cryptoShortName} address:</b> ${cryptoAddress}`,
  card: (fiatCardNumber, fiatShortName) => `💳 <b>${fiatShortName} card:</b> ${fiatCardNumber}`,

  operation: operationTemplate,
}

/**
 * 
 * @param {string} operation 
 */
function getOperationSmile(operation) {
  operation = operation.toLowerCase();

  switch (operation) {
    case 'sell':
      return sellSmile;
    
    case 'buy':
      return buySmile;
    
    case 'exchange':
      return exchangeSmile;

    default:
      throw new Error(`Unknown operation: ${operation}`);
  }
}

export default messageTemplates;