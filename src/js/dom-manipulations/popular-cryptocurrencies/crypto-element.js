import { isCurrencyPartial } from "../../fn/identity/currency/index.js";
import { isNumber } from "../../fn/identity/index.js";
import { showFirstNCryptocurrencies } from "../../config/currencies.js";

/**
 * 
 * @returns {HTMLDivElement}
 */
function createCryptoActions() {
  const changeButton = document.createElement('a');
  changeButton.href = '';
  changeButton.className = 'button__change i18n-style';
  // Change button is being translated using SCSS
  // changeButton.dataset.i18n = 'popular-currencies-change';

  const sellButton = document.createElement('a');
  sellButton.href = '';
  sellButton.className = 'button__sell i18n';
  sellButton.dataset.i18n = 'popular-currencies-sell';

  const buyButton = document.createElement('a');
  buyButton.href = '';
  buyButton.className = 'button__buy i18n';
  buyButton.dataset.i18n = 'popular-currencies-buy';

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
  isCurrencyPartial(crypto).throw('crypto');

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
  isCurrencyPartial(crypto).throw('crypto');
  isNumber(id).throw('id');

  const colum = document.createElement('div');
  colum.className = 'popular-currencies__colum colum i18n-style';

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

export default createCryptoElement;