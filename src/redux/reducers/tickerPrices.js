import { FETCH_TICKER_SUCCESS, UPDATE_TICKER } from '../actionTypes';

const initialState = {};

export default (state = initialState, action) => {
  let obj = action.payload
    ? { [action.payload.stock]: action.payload.price }
    : { stock: 'blank', price: -1 };
  switch (action.type) {
    case FETCH_TICKER_SUCCESS: {
      return [...state, action.payload];
    }
    case UPDATE_TICKER: {
      return Object.assign({}, state, obj);
    }
    default:
      return state;
  }
};
