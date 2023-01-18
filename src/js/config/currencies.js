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
  { id: "bitcoin", name: "Bitcoin", short: "BTC" },
  { id: "ethereum", name: "Ethereum", short: "ETH" },
  { id: "binancecoin", name: "Binance coin", short: "BNB" },
  { id: "solana", name: "Solana", short: "SOL" },
  { id: "polkadot", name: "Polkadot", short: "DOT" },
  { id: "matic-network", name: "Matic", short: "MATIC" },
  { id: "near", name: "Near", short: "NEAR" },
  { id: "cardano", name: "Cardano", short: "ADA" },
  { id: "ethereum-classic", name: "Ethereum Classic", short: "ETC" },
  { id: "1tronic", name: "TRON", short: "TRX" },
  { id: "doge-token", name: "Dogecoin", short: "DOGE" },
  { id: "shiba-inu", name: "Shiba Inu", short: "SHIB" },
  { id: "avalanche-2", name: "Avalanche", short: "AVAX" },
  { id: "litecoin", name: "Litecoin", short: "LTC" },
  { id: "usdc", name: "USD Coin", short: "USDC" }
].map(currencyPartialData => new CurrencyPartial(currencyPartialData));
