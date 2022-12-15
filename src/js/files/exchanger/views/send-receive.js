import YouSendReceiveModel from '../model/send-receive.js';
import { ElementNotFoundError } from './util.js';

import { exFormId } from './util.js';

import YouSendView from './you-send.js';
import YouReceiveView from './you-receive.js';

/**
 * Combines {@link YouSendView} and {@link YouReceiveView} views into single view.
 * 
 * Adds the swapping functionality to **Exchanger** page by bootstrapping **Swap** button.
 * 
 * Uses {@link YouSendReceiveModel} as state storage.
 */
class YouSendReceiveView {
  /**
   * Creates a new instance of {@link YouSendReceiveView}.
   * 
   * @param {YouSendReceiveModel} youSendReceiveModel A model where to store view state.
   * @param {Element} formElement A form {@link Element}.
   */
  constructor(youSendReceiveModel, formElement) {
    if (!(youSendReceiveModel instanceof YouSendReceiveModel)) {
      throw new TypeError('Expected youSendReceiveModel to be YouSendReceiveModel');
    }

    this.model = youSendReceiveModel;

    if (!(formElement instanceof Element)) {
      throw new ElementNotFoundError(exFormId);
    }

    this.group = formElement.querySelector('.reverse');

    if (!(this.group instanceof Element)) {
      throw new ElementNotFoundError('.reverse');
    }

    this.swap = this.group.querySelector('.reverse-btn');

    if (!(this.swap instanceof Element)) {
      throw new ElementNotFoundError('.reverse-btn');
    }

    // Init child views
    this.youSendView = new YouSendView(this.model.youSendModel, formElement);
    this.youReceiveView = new YouReceiveView(this.model.youReceiveModel, formElement);

    // Update (from view)
    this.swap.addEventListener('click', () => {
      this.model.swap();
    });
  }
}

export default YouSendReceiveView;