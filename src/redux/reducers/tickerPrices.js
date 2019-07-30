import { FETCH_TICKER_SUCCESS, UPDATE_TICKER } from '../actionTypes';

const initialState = [
  { stock: 'INTC', price: 100, date: '2019-07-28T23:09:44.061Z' }
];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TICKER_SUCCESS: {
      return [...state, action.payload];
    }
    case UPDATE_TICKER: {
      return state.map(item => {
        if (item.stock === action.payload.stock) {
          return {
            ...item,
            price: action.payload.price //copy the existing item
          };
        }
        return item;
      });
    }
    default:
      return state;
  }
};
