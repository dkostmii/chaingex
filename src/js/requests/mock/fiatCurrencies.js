import { Currency } from "../../types/currency.js";
import { currencies } from "../../config/currencies.js";

const fiatCurrenciesMock = currencies.map(c => new Currency({ ...c, price: 1, change: -0.01 }));

export default fiatCurrenciesMock;
