import { UPDATE_TICKER } from '../actionTypes';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TICKER: {
      let obj = action.payload
        ? { [action.payload.stock]: action.payload.price }
        : { stock: 'blank', price: -1 };
      return Object.assign({}, state, obj);
    }
    default:
      return state;
  }
};
