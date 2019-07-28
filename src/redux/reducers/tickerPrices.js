import { FETCH_TICKER_SUCCESS } from '../actionTypes';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TICKER_SUCCESS: {
      return [...state, action.payload];
    }
    default:
      return state;
  }
};
