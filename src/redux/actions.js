import {
  ADD_WATCHLIST,
  REMOVE_WATCHLIST,
  GET_STOCKS_SUCCESS,
  GET_TRANSACTIONS_SUCCESS,
  GET_WATCHLIST_SUCCESS
} from './actionTypes';

import { getStocks } from './selectors';
import { async } from 'q';

import TransactionsFetcher from '../data/TransactionsFetcher';
import WatchlistFetcher from '../data/WatchlistFetcher';
import StocksFetcher from '../data/StocksFetcher';

/*--------------------WATCHLIST LOGIC--------------------*/
export const fetchWatchlistIfNecessary = () => async (dispatch, getState) => {
  //possibly some logic to just return (stop function execution) if
  // there is already a transactionsList that we can use
  //..
  try {
    const data = await WatchlistFetcher.getWatchlist();
    dispatch(fetchWatchListSuccess(data));
  } catch (err) {
    console.log(err);
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
    console.log(err);
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
    console.log(err);
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
    console.error(err);
  }
};

export const fetchStocksSuccess = data => {
  return {
    type: GET_STOCKS_SUCCESS,
    payload: data
  };
};
/*--------------------END STOCKS LOGIC--------------------*/

/*--------------------TRANSACTIONS LOGIC--------------------*/
export const makeTransaction = (data) => async dispatch => {};

export const fetchTransactionsIfNecessary = () => async (
  dispatch,
  getState
) => {
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
