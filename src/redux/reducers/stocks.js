import { GET_STOCKS_REQUEST, GET_STOCKS_SUCCESS, GET_STOCKS_FAILURE } from '../actionTypes';

const initialState = [];

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_STOCKS_SUCCESS: {
            return action.payload
        }
        default:
            return state
    }
}