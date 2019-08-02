import {
  ADD_WATCHLIST,
  REMOVE_WATCHLIST,
  GET_STOCKS_SUCCESS,
  GET_TRANSACTIONS_SUCCESS,
  GET_WATCHLIST_SUCCESS,
  FETCH_ALLOCATIONS_SUCCESS,
  FETCH_TICKER_SUCCESS,
  UPDATE_TICKER
} from './actionTypes';

import { getStocks } from './selectors';
import { async } from 'q';

import TransactionsFetcher from '../data/TransactionsFetcher';
import WatchlistFetcher from '../data/WatchlistFetcher';
import StocksFetcher from '../data/StocksFetcher';
import AllocationsFetcher from '../data/AllocationsFetcher';
import { TickerFetcher } from '../data/TickerFetcher';
import { ConnectTicker } from '../data/ConnectTicker';

/*--------------------WATCHLIST LOGIC--------------------*/
export const fetchWatchlist = () => async (dispatch, getState) => {
  //possibly some logic to just return (stop function execution) if
  // there is already a transactionsList that we can use
  //..
  try {
    const data = await WatchlistFetcher.getWatchlist();
    dispatch(fetchWatchListSuccess(data));
  } catch (err) {
    console.log(`Error produced from fetchWatchList: ${err}`);
  }
};

export const fetchWatchListSuccess = data => {
  return {
    type: GET_WATCHLIST_SUCCESS,
    payload: data
  };
};

export const addToWatchlist = payload => {
  //need to add logic to prevent from duplicates being added to state
  //...

  try {
    WatchlistFetcher.changeWatchlist(payload, 'ADD');
    return {
      type: ADD_WATCHLIST,
      payload
    };
  } catch (err) {
    console.log(`Error produced from addToWatchlist: ${err}`);
  }
};

export const removeFromWatchlist = symbol => {
  try {
    WatchlistFetcher.changeWatchlist(symbol, 'REMOVE');
    return {
      type: REMOVE_WATCHLIST,
      symbol
    };
  } catch (err) {
    console.log(`Error produced from removeFromWatchList: ${err}`);
  }
};

/*--------------------END WATCHLIST LOGIC--------------------*/

/*--------------------STOCKS LOGIC--------------------*/
export const fetchStocksIfNecessary = () => async (dispatch, getState) => {
  if (getStocks(getState()).length) {
    return;
  }

  try {
    const data = await StocksFetcher.getStocks();
    dispatch(fetchStocksSuccess(data));
  } catch (err) {
    console.error(`Error produced from fetchStocksIfNecessary: ${err}`);
  }
};

export const fetchStocksSuccess = data => {
  return {
    type: GET_STOCKS_SUCCESS,
    payload: data
  };
};

export const tickerSubscription = symbol => (dispatch, getState) => {
  ConnectTicker.connect().then(client => {
    client.subscribe('/livestream/' + symbol, update => {
      //see if we already have a price for this stock,
      //if we don't then add it to state, otherwise update existing
      console.log(update);
      let priceAlreadyInStore =
        getState().tickerPrices.filter(e => e.stock === symbol).length > 0
          ? true
          : false;
      if (priceAlreadyInStore) {
        dispatch(updateTickerPrice(update));
      } else {
        dispatch(fetchTickerPriceSuccess(update));
      }
    });
  });
};

export const fetchTickerPrice = symbol => async (dispatch, getState) => {
  try {
    const data = await TickerFetcher.getTickerPrice(symbol);

    //see if we already have a price for this stock,
    //if we don't then add it to state, otherwise update existing
    let priceAlreadyInStore =
      getState().tickerPrices.filter(e => e.stock === symbol).length > 0
        ? true
        : false;
    if (priceAlreadyInStore) {
      dispatch(updateTickerPrice(data));
    } else {
      dispatch(fetchTickerPriceSuccess(data));
    }
  } catch (err) {
    console.log(`Error produced from fetchTickerPrice: ${err}`);
  }
};

export const fetchTickerPriceSuccess = data => {
  return {
    type: FETCH_TICKER_SUCCESS,
    payload: data
  };
};
export const updateTickerPrice = data => {
  return {
    type: UPDATE_TICKER,
    payload: data
  };
};
/*--------------------END STOCKS LOGIC--------------------*/

/*--------------------TRANSACTIONS LOGIC--------------------*/
export const makeTransaction = (symbol, side, amount) => async dispatch => {
  try {
    //let's first wrap up variables into an API friendly object
    const body = { symbol, side, amount };
    const data = await TransactionsFetcher.makeTransaction(body);

    //here we can use the response of API to update our allocations
    dispatch(fetchAllocationsSuccess(data.allocations));
    dispatch(fetchTransactions());
  } catch (err) {
    console.log(err);
  }
};

export const fetchTransactions = () => async (dispatch, getState) => {
  //possibly some logic to just return (stop function execution) if
  // there is already a transactionsList that we can use
  //..

  try {
    const data = await TransactionsFetcher.getTransactions();
    dispatch(fetchTransactionsSuccess(data));
  } catch (err) {
    console.log(err);
  }
};

export const fetchTransactionsSuccess = data => {
  return {
    type: GET_TRANSACTIONS_SUCCESS,
    payload: data
  };
};
/*--------------------END TRANSACTIONS LOGIC--------------------*/

/*--------------------ALLOCATIONS LOGIC--------------------*/
export const fetchAllocationsRequest = () => async dispatch => {
  try {
    const data = await AllocationsFetcher.getAllocations();
    dispatch(fetchAllocationsSuccess(data));
  } catch (err) {
    console.log(err);
  }
};

export const fetchAllocationsSuccess = data => {
  return {
    type: FETCH_ALLOCATIONS_SUCCESS,
    payload: data
  };
};
