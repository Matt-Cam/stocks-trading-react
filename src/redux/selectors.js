export const getStocks = state => {
  console.log('getStocks selector run');
  return state.stocks;
};

export const getWatchlist = state => {
  console.log('getWatchlist selector run');
  return state.watchlist;
};

export const getTransactions = state => {
  console.log('getTransactions selector run');
  return state.transactions.reverse();
};

export const getAllocations = state => {
  console.log('getAllocations selector run');
  return state.allocations;
};

export const getMergedWatchListAllocations = state => {
  console.log('getMergedWatchlist has been run');
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
    //this objToReturn is now one of the stocks we 'watch' with its respective allocation amount
    return objToReturn;
  });
  return merged;
};

export const getHistoricPrices = state => state.historicPrices;

export const getTickerPrice = (state, symbol) => {
  return state.tickerPrices[symbol];
};
