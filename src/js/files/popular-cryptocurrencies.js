import { cryptocurrencies } from "./fetch-currencies.js";
import { ElementNotFoundError } from "./exchanger/views/util.js";
import { throwIfNotANumber, throwIfNotAPartialCurrency } from "./exchanger/model/util.js";

const showFirstNCryptocurrencies = 5;

/**
 * @typedef {import('./fetch-currencies.js').currencyPartial} currencyPartial
 */



/**
 * 
 * @returns {HTMLDivElement}
 */
function createCryptoActions() {
  const changeButton = document.createElement('a');
  changeButton.href = '';
  changeButton.className = 'button__change';

  const sellButton = document.createElement('a');
  sellButton.href = '';
  sellButton.className = 'button__sell';
  sellButton.innerHTML = 'Sell';

  const buyButton = document.createElement('a');
  buyButton.href = '';
  buyButton.className = 'button__buy';
  buyButton.innerHTML = 'Buy';

  const columActions = document.createElement('div');
  columActions.className = 'colum__actions';

  columActions.append(changeButton, sellButton, buyButton);

  return columActions;
}

/**
 * 
 * @param {currencyPartial} crypto
 * @returns {HTMLDivElement}
 */
function createCryptocurrencyItem(crypto) {
  throwIfNotAPartialCurrency(crypto);

  const item = document.createElement('div');
  item.className = 'cryptocurrency__item';

  const left = document.createElement('div');
  left.className = 'cryptocurrency__left';

  const icon = document.createElement('i');
  icon.className = `fonticons-${crypto.short.toLowerCase()} cryptocurrency__icon`;

  const name = document.createElement('div');
  name.className = 'cryptocurrency__name';
  name.innerHTML = crypto.name;

  left.append(icon, name);

  const short = document.createElement('div');
  short.className = 'cryptocurrency__short';
  short.innerHTML = crypto.short;

  item.append(left, short);

  return item;
}

/**
 * 
 * @param {currencyPartial} crypto
 * @param {number} id
 * 
 * @returns {HTMLDivElement}
 */
function createCryptoElement(crypto, id = 0) {
  throwIfNotAPartialCurrency(crypto);
  throwIfNotANumber(id);

  const colum = document.createElement('div');
  colum.className = 'popular-currencies__colum colum';

  if (id > showFirstNCryptocurrencies - 1) {
    colum.classList.add('colum__hidden');
    colum.classList.add('colum__hideable');
  }

  const item = createCryptocurrencyItem(crypto);
  const price = document.createElement('div');
  price.className = 'colum__price';
  price.id = crypto.id;

  const change = document.createElement('div');
  change.className = 'colum__change';

  const actions = createCryptoActions();

  colum.append(item, price, change, actions);

  return colum;
}

/**
 * Adds all {@link cryptocurrencies} to `popular-currencies` section.
 */
export function addCryptocurrencies() {
  const popularCurrenciesContainer = document.querySelector('.popular-currencies__container');

  if (popularCurrenciesContainer === null) {
    throw new ElementNotFoundError('.popular-currencies__container');
  }

  const actionEl = popularCurrenciesContainer.querySelector('.popular-currencies__action');

  if (actionEl === null) {
    throw new ElementNotFoundError('.popular-currencies__action');
  }

  cryptocurrencies.forEach((crypto, id) => {
    const cryptoEl = createCryptoElement(crypto, id);
    popularCurrenciesContainer.insertBefore(cryptoEl, actionEl);
  });
}
