import {
  ADD_WATCHLIST,
  REMOVE_WATCHLIST,
  GET_STOCKS_SUCCESS
} from './actionTypes';
import {GET_TRANSACTIONS_SUCCESS} from './actionTypes'
import StocksFetcher from '../data/StocksFetcher';
import { getStocks } from './selectors';
import { async } from 'q';
import TransactionsFetcher from '../data/TransactionsFetcher';


export const fetchWatchListIfNecessary = () => async(dispatch, getState) => {
  //possibly some logic to just return (stop function execution) if
  // there is already a transactionsList that we can use
  //..
  
};

export const addToWatchlist = payload => {
  return {
    type: ADD_WATCHLIST,
    payload
  };
};

export const removeFromWatchlist = symbol => {
  return {
    type: REMOVE_WATCHLIST,
    symbol
  };
};

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

//Below was added by Matt
export const fetchTransactionsIfNecessary = () => async (dispatch, getState) => {
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


