import { ElementNotFoundError, getCurrencyAttention, getCurrencyPairName, getFieldText } from './util.js';

import CurrencyModel from '../model/currency.js';
import YouSendReceiveView from './send-receive.js';

import { htmlEncode } from './util.js';

import { exFormId } from './util.js';

import $ from 'jquery';

/**
 * Represents a view logic for **Choose cryptocurrency** field at **Exchanger** page.
 * 
 * Combines with {@link YouSendReceiveView} to link **Choose cryptocurrency**, **You send**, **You receive** fields and **Swap button**.
 */
class CurrencyView {
  /**
   * Creates a new instance of {@link CurrencyView}.
   * 
   * @param {CurrencyModel} currencyModel A model where to store view state.
   * @param {Element} formElement A form {@link Element}.
   */
  constructor(currencyModel, formElement) {
    if (!(currencyModel instanceof CurrencyModel)) {
      throw new TypeError('Expected currencyModel to be CurrencyModel');
    }

    this.model = currencyModel;

    if (!(formElement instanceof Element)) {
      throw new ElementNotFoundError(exFormId);
    }

    this.group = formElement.querySelector('.currency');

    if (!(this.group instanceof Element)) {
      throw new ElementNotFoundError('.currency');
    }

    this.select = this.group.querySelector('.field-select');

    if (!(this.select instanceof Element)) {
      throw new ElementNotFoundError('.field-select');
    }

    this.attention = this.group.querySelector('.field-attention');

    if (!(this.attention instanceof Element)) {
      throw new ElementNotFoundError('.field-attention');
    }

    this.fieldText = formElement.querySelector('.field-text');

    if (!(this.fieldText instanceof Element)) {
      throw new ElementNotFoundError('.field-text');
    }

    this.value = this.select.querySelector('.field-select__value');
    this.list = this.select.querySelector('.field-select__list');
    this.hiddenInput = this.select.querySelector('.field-select__input');

    if (!(this.value instanceof Element)) {
      throw new ElementNotFoundError('.field-select__value');
    }

    if (!(this.list instanceof Element)) {
      throw new ElementNotFoundError('.field-select__list');
    }

    if (!(this.hiddenInput instanceof Element)) {
      throw new ElementNotFoundError('.field-select__input');
    }

    // Init child views
    this.youSendReceiveView = new YouSendReceiveView(
      this.model.youSendReceiveModel, formElement);

    // Bind scope to listeners
    this.currencyPairListener = this.currencyPairListener.bind(this);
    this.allCurrencyPairsListener = this.allCurrencyPairsListener.bind(this);
    this.updateFieldText = this.updateFieldText.bind(this);

    this.init();
    
    // Update (from model)
    this.model.addEventListener('updateCurrencyPair', this.currencyPairListener);
    this.model.addEventListener('updateAllCurrencyPairs', this.allCurrencyPairsListener);


    this.youSendReceiveView.model.youSendModel.addEventListener('updateAmount', this.updateFieldText);
    this.youSendReceiveView.model.youSendModel.addEventListener('updateCurrency', this.updateFieldText);
    this.youSendReceiveView.model.youReceiveModel.addEventListener('updateAmount', this.updateFieldText);
    this.youSendReceiveView.model.youReceiveModel.addEventListener('updateCurrency', this.updateFieldText);
  }

  /**
   * Initialized the view, calling the view's listeners.
   */
  init() {
    this.currencyPairListener(this.model.currencyPair);
    this.allCurrencyPairsListener(this.model.allCurrencyPairs);
    this.updateFieldText();
  }

  /**
   * Updates the text inside `.field-text` element with current exchange data.
   * 
   * See {@link getFieldText()} definition for details.
   */
  updateFieldText() {
    // Get the child view models
    const youSendModel = this.youSendReceiveView.model.youSendModel;
    const youReceiveModel = this.youSendReceiveView.model.youReceiveModel;

    const text = getFieldText(youSendModel, youReceiveModel);
    this.fieldText.innerHTML = text;    
  }

  // Listeners
  currencyPairListener(currencyPair) {
    const pairName = getCurrencyPairName(currencyPair);

    this.value.innerHTML = "";
    this.value.appendChild(document.createTextNode(pairName));
    this.hiddenInput.value = pairName;

    this.attention.innerHTML = "";
    this.attention.appendChild(document.createTextNode(
      getCurrencyAttention(this.model.currencyPair)
    ));
  }

  allCurrencyPairsListener(allCurrencyPairs) {
    this.list.innerHTML = "";
    allCurrencyPairs.forEach(pair => {
      const pairName = getCurrencyPairName(pair);

      const liEl = $('<li>').addClass('field-select__item');

      liEl.append(htmlEncode(pairName));

      // Update (from view)
      liEl.on('click', () => {
        this.model.currencyPair = pair;
      });

      this.list.appendChild(liEl.get(0));
    });
  }
}

export default CurrencyView;