import { combineReducers } from 'redux';
import stocks from './stocks';
import watchlist from './watchlist';
import transactions from './transactions';

export default combineReducers ({
    stocks,
    watchlist,
    transactions
})