export const getStocks = state => state.stocks;

export const getWatchlist = state => state.watchlist;

export const getTransactions = state => state.transactions;

export const getAllocations = state => state.allocations;

export const getMergedWatchListAllocations = state => {
  //objToReturn will act as local copy of watchedStock so we don't mutate watchedStock
  let objToReturn = {};
  let merged = state.watchlist.map(watchedStock => {
    //reset objToReturn
    objToReturn = {};
    Object.assign(objToReturn, watchedStock);
    let allocation = state.allocations.find(element => {
      return element.symbol === watchedStock.symbol;
    });

    if (allocation) {
      objToReturn.amount = allocation.amount;
    }
    //this watchedStock obj is now one of the stocks we 'watch' with its respective allocation amount
    return objToReturn;
  });
  return merged;
};

export const getTickerPrices = state => state.tickerPrices;
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
/*
[ 
{symbol: "NTC"},
 {symbol: "INTC"},
 {symbol: "WKI"}
]
*/
