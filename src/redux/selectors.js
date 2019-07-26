export const getStocks = state => state.stocks;

export const getWatchlist = state => state.watchlist;

export const getTransactions = state => state.transactions;

export const getAllocations = state => state.allocations;

export const getMergedWatchListAllocations = state => {
  console.log(state.watchlist);
  console.log(state.allocations);
  return [{ name: 'markus' }, { name: 'baselsls' }];
};

/*
Allocation example
[
0: {symbol: "STRK", amount: 325}
1: {symbol: "ACME", amount: 51}
2: {symbol: "UMBR", amount: 8}
3: {symbol: "WKI", amount: 8}
4: {symbol: "WYNE", amount: 66}
5: {symbol: "NTC", amount: 300}
]
*/
