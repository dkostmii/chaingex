import { Currency } from "../../types/currency.js";

const fiatCurrencies = [
  { id: "usd", name: "US Dollar", short: "USD", price: 1, change: -0.01, card: "4444444444444444" },
].map(c => new Currency(c));

export default fiatCurrencies;
