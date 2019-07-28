import {
  ADD_WATCHLIST,
  REMOVE_WATCHLIST,
  GET_STOCKS_SUCCESS,
  GET_TRANSACTIONS_SUCCESS,
  GET_WATCHLIST_SUCCESS,
  FETCH_ALLOCATIONS_SUCCESS
} from './actionTypes';

import { getStocks } from './selectors';
import { async } from 'q';

import TransactionsFetcher from '../data/TransactionsFetcher';
import WatchlistFetcher from '../data/WatchlistFetcher';
import StocksFetcher from '../data/StocksFetcher';
import AllocationsFetcher from '../data/AllocationsFetcher';
import TickerFetcher from '../data/TickerFetcher';

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

export const fetchTickerPrice = symbol => async () => {
  try {
    const data = await TickerFetcher.getTickerPrice(symbol);
  } catch (err) {
    console.log(`Error produced from fetchTickerPrice: ${err}`);
  }
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
