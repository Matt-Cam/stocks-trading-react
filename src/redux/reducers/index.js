import { combineReducers } from 'redux';
import stocks from './stocks';
import watchlist from './watchlist';
import transactions from './transactions';
import allocations from './allocations';

export default combineReducers ({
    stocks,
    watchlist,
    transactions,
    allocations
})