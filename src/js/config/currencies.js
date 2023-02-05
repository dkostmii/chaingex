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
//{ id: 'btc', factor: 0.2 },
//{ id: 'sol', factor: 0.9 },
  
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
  { id: "btc", name: "Bitcoin", short: "BTC", address: "bc1qfye69pyy4kphe2x7nzjvs0ksm8f8nnmf5thnlx" },
  { id: "ltc", name: "Litecoin", short: "LTC", address: "ltc1qxv9cqhsacrsy6ppzez3xtrfrluhkgt5acyfek2" },
  { id: "eth", name: "Ethereum", short: "ETH", network: "ERC20", address: "0x9dD107f90A98301C04b0BdeB4dFc34Bb081A9010" },
  { id: "xrp", name: "Ripple", short: "XRP", address: "rP9UUhJrFS2wF1KPp1T9SfiiZeAGh5S8EB" },
  { id: "doge", name: "Dogecoin", short: "DOGE", address: "DPjuQhYDrcY9XgUd3NoeREhpLHgstyTP8t" },
  { id: "bnb", name: "Binance coin", short: "BNB", network: "BEP2", address: "bnb1vy8vtq93juyjmwh3wwwagsjpy0r8q84lqk8ma5" },
  { id: "sol", name: "Solana", short: "SOL", address: "ALzJPSKUiaL8PoDBdhiaU8zGAvfS992RTmH4i7PEFU2m" },
  { id: "dot", name: "Polkadot", short: "DOT", address: "12bLZCA1Da9u8pgELNci1ETLCtqFmgr5j3YsuPwsVsK8jYJy" },
  { id: "matic", name: "Matic", short: "MATIC", network: "ERC20", address: "0x9dD107f90A98301C04b0BdeB4dFc34Bb081A9010" },
  { id: "near", name: "Near", short: "NEAR", address: "44123346f300e13cf1cb646c0bb0347835b81a109b918a18d277dcbe7597693d" },
  { id: "ada", name: "Cardano", short: "ADA", address: "addr1qx0ryxmtyfnf7v87485gv2sama75zku54r7tmfvz8qpsf96v3d7dm7c754jl07fkvyjx5phfmwmq638xrrtmp8k7gfaqgucjmd" },
  { id: "etc", name: "Ethereum Classic", short: "ETC", address: "0xec340e37F8ADcdba55E51eadCD6707a784407161" },
  { id: "trx", name: "TRON", short: "TRX", network: "TRC20", address: "TNV22KvSVixXJkLfE7pc452o2yu81LEEsu" },
  { id: "shib", name: "Shiba Inu", short: "SHIB", network: "ERC20", address: "0x9dD107f90A98301C04b0BdeB4dFc34Bb081A9010" },
  { id: "avax", name: "Avalanche", short: "AVAX", network: "ERC20", address: "0x9dD107f90A98301C04b0BdeB4dFc34Bb081A9010" },
  { id: "usdc", name: "USD Coin", short: "USDC", network: "ERC20", address: "0x9dD107f90A98301C04b0BdeB4dFc34Bb081A9010" },
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
  { id: "usd", name: "US Dollar", short: "USD", card: "5375418813317170" },
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
  address: "TNV22KvSVixXJkLfE7pc452o2yu81LEEsu",
}, {
  id: "usdt-eth",
  name: "USDT",
  short: "USDT (ERC20)",
  price: 1,
  change: 0,
  network: "ERC20",
  address: "0x9dD107f90A98301C04b0BdeB4dFc34Bb081A9010",
}].map(currencyData => new Currency(currencyData));
