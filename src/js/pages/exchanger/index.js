import { loadCryptos, loadFiatCurrencies } from "../../requests/index.js";
import { restCryptos } from "../../config/currencies.js";
import useViewModels from "./viewmodel.js";
import hideSpinner from "../../dom-manipulations/spinner.js";
import exchangerSmall from "../../dom-manipulations/exchanger/exchanger-small.js";

function exchangerPageLoad() {
  exchangerSmall();

  loadCryptos()
  .catch(e => {
    throw new Error(`Unable to load exchange page.\nUnderlying error:\n${e}`);
  })
  .then(cryptos => {
    cryptos = [...cryptos, ...restCryptos];
  
    loadFiatCurrencies()
    .then(currencies => {
      useViewModels(cryptos, currencies);
      hideSpinner();
    });
  });
}

export default exchangerPageLoad;