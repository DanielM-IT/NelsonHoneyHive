import {
    ADD_BID,
    GET_BIDS,
    BID_ERROR,
    CLEAR_BIDS
} from '../actions/types'

const initialState = {
    currentBids: [],
    isAuthenticated: null,
    error: {}
}

export default function (state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case GET_BIDS:
            return {
                ...state,
                currentBids: payload,
            }
        case ADD_BID:
            return {
                ...state,
                currentBids: [payload, ...state.bids]
            }
        case CLEAR_BIDS:
            return {
                ...state,
                currentBids: []
            }
        case BID_ERROR:
            return {
                ...state,
                error: payload
            }
        default:
            return state
    }
}