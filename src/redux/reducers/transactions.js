import { ADD_TRANSACTION } from '../actionTypes';
import { GET_TRANSACTIONS_SUCCESS } from '../actionTypes';

const initialState = [{}];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TRANSACTION: {
      return {
        byId: [...state.byId, action.id],
        byHash: {
          ...state.byHash,
          [action.id]: action.payload
        }
      };
    }
    case GET_TRANSACTIONS_SUCCESS: {
      return action.payload;
    }
    default:
      return state;
  }
};
