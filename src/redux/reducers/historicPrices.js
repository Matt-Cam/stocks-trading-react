import {
  FETCH_HISTORIC_PRICES_BEGIN,
  FETCH_HISTORIC_PRICES_SUCCESS,
  FETCH_HISTORIC_PRICES_FAILURE
} from '../actionTypes';

const initialState = {
  prices: {},
  loading: true,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HISTORIC_PRICES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_HISTORIC_PRICES_SUCCESS:
      //request done, set loading to "false"
      //replace items with data from server
      return {
        ...state,
        loading: false,
        prices: action.payload
      };
    case FETCH_HISTORIC_PRICES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };
    default:
      return state;
  }
};
