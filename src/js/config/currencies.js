import { CurrencyFactor, CurrencyPartial } from '../types/currency.js';
import { usdt } from './usdt.js';

export const showFirstNCryptocurrencies = 5;

/**
 * An array of {@link CurrencyFactor}.
 * 
 * **If you want control USDT price, see {@link usdt}**.
 * 
 * See {@link cryptocurrencies} for possible cryptocurrency identifiers.
 * 
 * @constant currencyFactors
 * @type {CurrencyFactor[]}
 */
export const currencyFactors = [
//{ id: 'bitcoin', factor: 0.2 }
  { id: 'solana', factor: 0.9 }
  
].map(currencyFactorData => new CurrencyFactor(currencyFactorData));


/**
 * An array of {@link CurrencyPartial}.
 * 
 * @constant cryptocurrencies
 * @type {CurrencyPartial[]}
 */
export const cryptocurrencies = [
  { id: "bitcoin", name: "Bitcoin", short: "BTC", address: "Hello, World!" },
  { id: "ethereum", name: "Ethereum", short: "ETH", address: "Hello, World!" },
  { id: "binancecoin", name: "Binance coin", short: "BNB", address: "Hello, World!" },
  { id: "solana", name: "Solana", short: "SOL", address: "Hello, World!" },
  { id: "polkadot", name: "Polkadot", short: "DOT", address: "Hello, World!" },
  { id: "matic-network", name: "Matic", short: "MATIC", address: "Hello, World!" },
  { id: "near", name: "Near", short: "NEAR", address: "Hello, World!" },
  { id: "cardano", name: "Cardano", short: "ADA", address: "Hello, World!" },
  { id: "ethereum-classic", name: "Ethereum Classic", short: "ETC", address: "Hello, World!" },
  { id: "1tronic", name: "TRON", short: "TRX", address: "Hello, World!" },
  { id: "doge-token", name: "Dogecoin", short: "DOGE", address: "Hello, World!" },
  { id: "shiba-inu", name: "Shiba Inu", short: "SHIB", address: "Hello, World!" },
  { id: "avalanche-2", name: "Avalanche", short: "AVAX", address: "Hello, World!" },
  { id: "litecoin", name: "Litecoin", short: "LTC", address: "Hello, World!" },
  { id: "usdc", name: "USD Coin", short: "USDC", address: "Hello, World!" }
].map(currencyPartialData => new CurrencyPartial(currencyPartialData));
