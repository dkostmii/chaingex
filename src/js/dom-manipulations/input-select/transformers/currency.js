export function currencyAsOption(currency) {
  return { value: currency.id, name: currency.short };
}

export function optionAsCurrency(optionValue, cryptos = [], currencies = []) {
  const crypto = cryptos.find(c => c.id === optionValue);

  if (!crypto) {
    const currency = currencies.find(c => c.id === optionValue);

    if (!currency) {
      throw new Error(`No Currency with id ${optionValue} found.`);
    }

    return currency;
  }

  return crypto;
}
