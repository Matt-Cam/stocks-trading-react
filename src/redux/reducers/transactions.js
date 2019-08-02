import { GET_TRANSACTIONS_SUCCESS } from '../actionTypes';

const initialState = [{}];

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TRANSACTIONS_SUCCESS: {
      return action.payload;
    }
    default:
      return state;
  }
};
