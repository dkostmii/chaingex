import { CurrencyFactor, CurrencyPartial, Currency } from '../types/currency.js';

/**
 * Defines how many cryptocurrencies are shown in **Popular cryptocurrencies** section.
 */
export const showFirstNCryptocurrencies = 5;

/**
 * An array of {@link CurrencyFactor}.
 * 
 * **If you want control USDT price, change it's price directly in {@link restCryptos}**.
 * 
 * See {@link cryptocurrencies} for possible cryptocurrency identifiers.
 * 
 * @constant currencyFactors
 * @type {CurrencyFactor[]}
 */
export const currencyFactors = [
//{ id: 'btc', factor: 0.2 }
//{ id: 'sol', factor: 0.9 }
  
].map(currencyFactorData => new CurrencyFactor(currencyFactorData));

/**
 * @typedef {import('../requests/index.js').loadCryptos} loadCryptos
 */

/**
 * @typedef {import('../requests/index.js').loadFiatCurrencies} loadFiatCurrencies
 */

/**
 * @typedef {import('../requests/mock/fiatCurrencies.js').default} fiatCurrencies
 */

/**
 * An array of {@link CurrencyPartial} containing all cryptocurrencies.
 * 
 * Prices for this cryptocurrencies are loaded from API, see {@link loadCryptos}.
 * 
 * @constant cryptocurrencies
 * @type {CurrencyPartial[]}
 */
export const cryptocurrencies = [
  { id: "btc", name: "Bitcoin", short: "BTC", address: "bc1qyq8vm0k2h54d7g5eueefae63e29yyxgehskvcf" },
  { id: "ltc", name: "Litecoin", short: "LTC", address: "ltc1qpkzhcxkeurxmzvkv8kj2k4dlr2nauerxflydzx" },
  { id: "eth", name: "Ethereum", short: "ETH", network: "ERC20", address: "0x4f94f8dAfB517556162175BcA45cb3476dfE27E5" },
  { id: "xrp", name: "Ripple", short: "XRP", address: "FIXME1234InVaLiDe5uktLuBQj442rXfuUuoBleBZqDXQLPdLr" },
  { id: "doge", name: "Dogecoin", short: "DOGE", address: "DLm86Vf44xdpSRwV6X6168d9iNwDQKLqcG" },
  { id: "bnb", name: "Binance coin", short: "BNB", address: "FIXME1234InVaLiDe5uktLuBQj442rXfuUuoBleBZqDXQLPdLr" },
  { id: "sol", name: "Solana", short: "SOL", address: "AGDXgqwLidxazuoaVnsFXkbDvwJH1fwbFk8Uym8JKz7U" },
  { id: "dot", name: "Polkadot", short: "DOT", address: "FIXME1234InVaLiDe5uktLuBQj442rXfuUuoBleBZqDXQLPdLr" },
  { id: "matic", name: "Matic", short: "MATIC", address: "FIXME1234InVaLiDe5uktLuBQj442rXfuUuoBleBZqDXQLPdLr" },
  { id: "near", name: "Near", short: "NEAR", address: "FIXME1234InVaLiDe5uktLuBQj442rXfuUuoBleBZqDXQLPdLr" },
  { id: "ada", name: "Cardano", short: "ADA", address: "FIXME1234InVaLiDe5uktLuBQj442rXfuUuoBleBZqDXQLPdLr" },
  { id: "etc", name: "Ethereum Classic", short: "ETC", address: "FIXME1234InVaLiDe5uktLuBQj442rXfuUuoBleBZqDXQLPdLr" },
  { id: "trx", name: "TRON", short: "TRX", network: "TRC20", address: "TBDNX3tB8avz7BM6gRDQ2qJsVkb3hvimy8" },
  { id: "shib", name: "Shiba Inu", short: "SHIB", address: "FIXME1234InVaLiDe5uktLuBQj442rXfuUuoBleBZqDXQLPdLr" },
  { id: "avax", name: "Avalanche", short: "AVAX", address: "FIXME1234InVaLiDe5uktLuBQj442rXfuUuoBleBZqDXQLPdLr" },
  { id: "usdc", name: "USD Coin", short: "USDC", network: "ERC20", address: "0x4f94f8dAfB517556162175BcA45cb3476dfE27E5" }
].map(currencyPartialData => new CurrencyPartial(currencyPartialData));

/**
 * An array of {@link CurrencyPartial} containing all fiat currencies.
 * 
 * Prices for this currencies are ~~loaded from API, see {@link loadFiatCurrencies}~~,
 * mocked using {@link fiatCurrencies}.
 * 
 * @constant currencies
 * @type {CurrencyPartial[]}
 */
export const currencies = [
  { id: "usd", name: "US Dollar", short: "USD", card: "4444444444444444" },
].map(currencyPartialData => new CurrencyPartial(currencyPartialData));

/**
 * An array of {@link Currency}, which contains all currencies,
 * price and change of which are **not loaded** from API.
 */
export const restCryptos = [{
  id: "usdt-tron",
  name: "USDT",
  short: "USDT (TRC20)",
  price: 1,
  change: 0,
  network: "TRC20",
  address: "TBDNX3tB8avz7BM6gRDQ2qJsVkb3hvimy8",
}, {
  id: "usdt-eth",
  name: "USDT",
  short: "USDT (ERC20)",
  price: 1,
  change: 0,
  network: "ERC20",
  address: "0x4f94f8dAfB517556162175BcA45cb3476dfE27E5",
}].map(currencyData => new Currency(currencyData));
