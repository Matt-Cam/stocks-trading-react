import {
  FETCH_HISTORIC_PRICES_BEGIN,
  FETCH_HISTORIC_PRICES_SUCCESS,
  FETCH_HISTORIC_PRICES_FAILURE
} from '../actionTypes';

const initialState = {
  items: [],
  loading: false,
  error: null
};

export default (state = initialState, action) {
    switch(action.type){
        case FETCH_HISTORIC_PRICES_BEGIN:
            return {
            ...state,
            loading: true,
            error: null
        };
        break;
        case FETCH_HISTORIC_PRICES_SUCCESS:
            //request done, set loading to "false"
            //replace items with data from server
            return {
                ...state,
                loading: false,
                items: action.payload
            };
            break;
            case FETCH_HISTORIC_PRICES_FAILURE:
                return {
                    ...state,
                    loading: false,
                    error: action.payload.error,
                    items:[]
                };
                break;
    }
    }
