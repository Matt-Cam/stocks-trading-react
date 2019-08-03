import {
  ADD_WATCHLIST,
  REMOVE_WATCHLIST,
  GET_STOCKS_SUCCESS,
  GET_TRANSACTIONS_SUCCESS,
  GET_WATCHLIST_SUCCESS,
  FETCH_ALLOCATIONS_SUCCESS,
  UPDATE_TICKER,
  FETCH_HISTORIC_PRICES_BEGIN,
  FETCH_HISTORIC_PRICES_FAILURE,
  FETCH_HISTORIC_PRICES_SUCCESS
} from './actionTypes';

import { getStocks } from './selectors';

import TransactionsFetcher from '../data/APICalls/TransactionsFetcher';
import WatchlistFetcher from '../data/APICalls/WatchlistFetcher';
import StocksFetcher from '../data/APICalls/StocksFetcher';
import AllocationsFetcher from '../data/APICalls/AllocationsFetcher';
import { ConnectTicker } from '../data/APICalls/ConnectTicker';
import HistoricPricesFetcher from '../data/APICalls/HistoricPricesFetcher';

/*--------------------WATCHLIST LOGIC--------------------*/
export const fetchWatchlist = () => async (dispatch, getState) => {
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

/*-------------------- Historic Prices LOGIC--------------------*/

/*
 * @param {string} symbol : the symbol you want prices for
 * @param {string} timePeriod : either yearly or today
 */
export const fetchHistoricPrices = (symbol, timePeriod) => dispatch => {
  dispatch(fetchHistoricPricesBegin());
  HistoricPricesFetcher.getHistoricPrices(symbol, timePeriod)
    .then(response => {
      //console.log(response);
      dispatch(fetchHistoricPricesSuccess(response));
    })
    .catch(err => {
      console.error(`error produced from fetchHistoricPrices: ${err}`);
    });
};

export const fetchHistoricPricesBegin = () => ({
  type: FETCH_HISTORIC_PRICES_BEGIN
});
export const fetchHistoricPricesSuccess = prices => ({
  type: FETCH_HISTORIC_PRICES_SUCCESS,
  payload: prices
});

export const fetchHistoricPricesFailure = error => ({
  type: FETCH_HISTORIC_PRICES_FAILURE,
  payload: { error }
});

/*--------------------End Historic Prices LOGIC--------------------*/

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
      console.log(update);
      dispatch(updateTickerPrice(update));
    });
  });
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
