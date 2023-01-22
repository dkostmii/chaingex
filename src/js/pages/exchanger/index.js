import { loadCryptos, loadFiatCurrencies } from "../../requests/index.js";
import { restCryptos } from "../../config/currencies.js";
import useViewModels from "./viewmodel.js";
import hideSpinner from "../../dom-manipulations/spinner.js";
import exchangerSmall from "../../dom-manipulations/exchanger-small.js";

async function exchangerPageLoad() {
  exchangerSmall();

  // FIXME: Mock as fallback usage
  let cryptos = await loadCryptos();
  cryptos = [...cryptos, ...restCryptos];

  const currencies = await loadFiatCurrencies();

  useViewModels(cryptos, currencies);

  hideSpinner();
}

export default exchangerPageLoad;