import YouReceiveModel from '../model/you-receive.js';
import {
  ElementNotFoundError,
  getCurrencyResultValue,
  sanitizeNumberInput,
  replaceTrailingPeriods,
  emptyNumberInputCheck,
} from './util.js';

import { exFormId, preCheckInput } from './util.js';

import { htmlEncode } from './util.js';

import $ from 'jquery';

/**
 * Represents a view logic for **You receive** field at **Exchanger** page.
 * 
 * Uses {@link YouReceiveModel} as state storage.
 */
class YouReceiveView {
  /**
   * Creates a new instance of {@link YouReceiveView}.
   * 
   * @param {YouReceiveModel} youReceiveModel A model where to store view state.
   * @param {Element} formElement A form {@link Element}.
   */
  constructor(youReceiveModel, formElement) {
    if (!(youReceiveModel instanceof YouReceiveModel)) {
      throw new TypeError('Expected youReceiveModel to be YouReceiveModel');
    }

    this.model = youReceiveModel;

    if (!(formElement instanceof Element)) {
      throw new ElementNotFoundError(exFormId);
    }

    this.group = formElement.querySelector('.receive');

    if (!(this.group instanceof Element)) {
      throw new ElementNotFoundError('.receive');
    }

    this.select = this.group.querySelector('.select');

    if (!(this.select instanceof Element)) {
      throw new ElementNotFoundError('.select');
    }

    this.list = this.select.querySelector('.field-select__list');
    this.value = this.select.querySelector('.field-select__value');
    this.input = this.select.querySelector('.field-input');
    this.hiddenInput = this.select.querySelector('.field-select__input');
    this.resultValue = this.group.querySelector('.result-value');

    if (!(this.list instanceof Element)) {
      throw new ElementNotFoundError('.field-select__list');
    }

    if (!(this.value instanceof Element)) {
      throw new ElementNotFoundError('.field-select__value');
    }

    if (!(this.input instanceof Element)) {
      throw new ElementNotFoundError('.field-input');
    }

    if (!(this.hiddenInput instanceof Element)) {
      throw new ElementNotFoundError('.field-select__input');
    }

    if (!(this.resultValue instanceof Element)) {
      throw new ElementNotFoundError('.result-value');
    }

    this.init();

    // Update (from view)
    this.input.addEventListener('input', () => {
      sanitizeNumberInput(this.input);
    });

    this.input.addEventListener('blur', () => {
      emptyNumberInputCheck(this.input);
      sanitizeNumberInput(this.input);
      replaceTrailingPeriods(this.input);

      if (this.input.value.length === 0) {
        this.model.amount = parseFloat(preCheckInput(this.model.minAmount));
      }

      this.input.type = 'number';
      this.input.min = preCheckInput(this.model.minAmount);

      const newAmount = parseFloat(preCheckInput(this.input.value));
      if (newAmount < this.model.minAmount) {
        this.model.amount = this.model.minAmount;
        this.input.value = preCheckInput(this.model.amount);
      } else {
        this.model.amount = newAmount;
      }

      this.resultValue.value = getCurrencyResultValue(this.model);
    });

    this.input.addEventListener('focus', () => {
      this.input.removeAttribute('min');
      this.input.step = 'any';
    });

    // Bind scope to listeners
    this.currencyListener = this.currencyListener.bind(this);
    this.amountListener = this.amountListener.bind(this);
    this.allCurrenciesListener = this.allCurrenciesListener.bind(this);

    // Update (from model)
    this.model.addEventListener('updateCurrency', this.currencyListener);
    this.model.addEventListener('updateAmount', this.amountListener);
    this.model.addEventListener('updateAllCurrencies', this.allCurrenciesListener);
  }

  /**
   * Initialized the view, calling the view's listeners.
   */
  init() {
    this.currencyListener(this.model.currency);
    this.amountListener({ amount: this.model.amount });
    this.allCurrenciesListener(this.model.allCurrencies);
  }

  // Listeners
  currencyListener(currency) {
    this.value.innerHTML = "";
    this.value.appendChild(document.createTextNode(currency.short));

    this.hiddenInput.value = currency.short;
    this.resultValue.value = getCurrencyResultValue(this.model);

    this.input.type = 'number';
    this.input.min = preCheckInput(this.model.minAmount);
    this.amountListener({ amount: this.model.amount });
  };

  amountListener({ amount }) {
    this.input.value = preCheckInput(amount);
    this.resultValue.value = getCurrencyResultValue(this.model);
  }

  allCurrenciesListener(allCurrencies) {
    this.list.innerHTML = "";
    allCurrencies.forEach(crypto => {
      const { short } = crypto;

      const liEl = $('<li>').addClass('field-select__item');

      liEl.append(htmlEncode(short));

      // Update (from view)
      liEl.on('click', () => {
        this.model.currency = crypto;
      });

      this.list.appendChild(liEl.get(0));
    });
  };
}

export default YouReceiveView;