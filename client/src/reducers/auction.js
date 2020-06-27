import {
    GET_AUCTION,
    GET_AUCTIONS,
    AUCTION_ERROR,
    UPDATE_AUCTION,
    CREATE_AUCTION
} from '../actions/types'

const initialState = {
    singleAuction: null,
    auctions: [],
    loading: true,
    error: {}
}

export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case GET_AUCTION:
        case UPDATE_AUCTION:
        case CREATE_AUCTION:
            return {
                ...state,
                singleAuction: payload,
                loading: false
            }
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