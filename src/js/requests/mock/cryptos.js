import { Currency } from "../../types/currency.js";

const cryptos = [
  {"id":"btc","network":"","name":"Bitcoin","short":"BTC","price":21324.53,"change":451.22,"address":"azNn2L3OnwGi8e5uktLuBQj442rXfuUuoBleBZqDXQLPdLr"},
  {"id":"eth","network":"ERC20","name":"Ethereum","short":"ETH","price":1587.42,"change":54.52,"address":"azNn2L3OnwGi8e5uktLuBQj442rXfuUuoBleBZqDXQLPdLr"},
  {"id":"bnb","network":"","name":"Binance coin","short":"BNB","price":292.3,"change":1.2,"address":"azNn2L3OnwGi8e5uktLuBQj442rXfuUuoBleBZqDXQLPdLr"},
  {"id":"sol","network":"","name":"Solana","short":"SOL","price":20.421000000000003,"change":1.72,"address":"azNn2L3OnwGi8e5uktLuBQj442rXfuUuoBleBZqDXQLPdLr"},
  {"id":"dot","network":"","name":"Polkadot","short":"DOT","price":5.915,"change":0.192,"address":"azNn2L3OnwGi8e5uktLuBQj442rXfuUuoBleBZqDXQLPdLr"},
  {"id":"matic","network":"","name":"Matic","short":"MATIC","price":0.9757,"change":0.0421,"address":"azNn2L3OnwGi8e5uktLuBQj442rXfuUuoBleBZqDXQLPdLr"},
  {"id":"near","network":"","name":"Near","short":"NEAR","price":2.199,"change":0.142,"address":"azNn2L3OnwGi8e5uktLuBQj442rXfuUuoBleBZqDXQLPdLr"},
  {"id":"ada","network":"","name":"Cardano","short":"ADA","price":0.3458,"change":0.0109,"address":"azNn2L3OnwGi8e5uktLuBQj442rXfuUuoBleBZqDXQLPdLr"},
  {"id":"etc","network":"","name":"Ethereum Classic","short":"ETC","price":21.17,"change":0.8,"address":"azNn2L3OnwGi8e5uktLuBQj442rXfuUuoBleBZqDXQLPdLr"},
  {"id":"trx","network":"TRC20","name":"TRON","short":"TRX","price":0.06131,"change":0.00171,"address":"azNn2L3OnwGi8e5uktLuBQj442rXfuUuoBleBZqDXQLPdLr"},
  {"id":"doge","network":"","name":"Dogecoin","short":"DOGE","price":0.08262,"change":0.00173,"address":"azNn2L3OnwGi8e5uktLuBQj442rXfuUuoBleBZqDXQLPdLr"},
  {"id":"shib","network":"","name":"Shiba Inu","short":"SHIB","price":0.00001163,"change":2.6e-7,"address":"azNn2L3OnwGi8e5uktLuBQj442rXfuUuoBleBZqDXQLPdLr"},
  {"id":"avax","network":"","name":"Avalanche","short":"AVAX","price":16.5,"change":0.62,"address":"azNn2L3OnwGi8e5uktLuBQj442rXfuUuoBleBZqDXQLPdLr"},
  {"id":"ltc","network":"","name":"Litecoin","short":"LTC","price":87.72,"change":4.1,"address":"azNn2L3OnwGi8e5uktLuBQj442rXfuUuoBleBZqDXQLPdLr"},
  {"id":"usdc","network":"ERC20","name":"USD Coin","short":"USDC","price":0.9999,"change":0,"address":"azNn2L3OnwGi8e5uktLuBQj442rXfuUuoBleBZqDXQLPdLr"}
].map(c => new Currency(c));

export default cryptos;