import {
  ADD_WATCHLIST,
  REMOVE_WATCHLIST,
  GET_WATCHLIST_SUCCESS
} from '../actionTypes';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_WATCHLIST_SUCCESS: {
      return action.payload;
    }

    case ADD_WATCHLIST: {
      return [...state, action.payload];
    }
    case REMOVE_WATCHLIST: {
      return state.filter(item => item.symbol !== action.symbol);
    }
    default:
      return state;
  }
};
