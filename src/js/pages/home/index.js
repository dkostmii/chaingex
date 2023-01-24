import { addCryptocurrencies, fillCryptocurrencies } from "../../dom-manipulations/popular-cryptocurrencies/index.js";
import { loadCryptos } from '../../requests/index.js';
import { toggleCurrencies } from "../../dom-manipulations/popular-cryptocurrencies/hide-button.js";
import hideSpinner from "../../dom-manipulations/spinner.js";
import useAnimationOnScroll from "../../files/animation-on-scroll.js";
import useScrollDispatcher from "./scrollDispatcher.js";


export function homePageLoad() {
  Object.assign(window, {
    toggleCurrencies,
  });

  addCryptocurrencies();
  
  loadCryptos()
  .catch(e => {
    throw new Error(`Unable to load home page.\nUnderlying error:\n${e}`);
  })
  .then(cryptos => {
    fillCryptocurrencies(cryptos);
    hideSpinner();
    useAnimationOnScroll();
    useScrollDispatcher();
  });
}

export default homePageLoad;