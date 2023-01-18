import { addCryptocurrencies, fillCryptocurrencies } from "../dom-manipulations/popular-cryptocurrencies/index.js";
import { loadCryptos } from '../requests/index.js';
import { toggleCurrencies } from "../dom-manipulations/popular-cryptocurrencies/hide-button.js";

export function homePageLoad() {
  Object.assign(window, {
    toggleCurrencies,
  });

  addCryptocurrencies();

  loadCryptos()
    .then(fillCryptocurrencies)
    .catch(e => {
      throw new Error(`Unable to load cryptocurrency data.\nUnderlying error:\n${e}`);
    });

  hideSpinner();
}

export default homePageLoad;