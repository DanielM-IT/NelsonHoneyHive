import {
    GET_AUCTIONS,
    AUCTION_ERROR
} from '../actions/types'

const initialState = {
    auction: null,
    auctions: [],
    loading: true,
    error: {}
}

export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case GET_AUCTIONS:
            return {
                ...state,
                auctions: payload,
                loading: false
            }
        case AUCTION_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
                auction: null
            }
        default:
            return state
    }
}