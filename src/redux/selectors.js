export const getStocks = state => state.stocks;

export const getWatchlist = state => state.watchlist;

export const getTransactions = state => {
  return state.transactions.reverse();
};

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

export const getHistoricPrices = state => state.historicPrices;

export const getTickerPrice = (state, symbol) => {
  return state.tickerPrices[symbol];
};
