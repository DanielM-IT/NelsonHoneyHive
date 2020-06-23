import axios from 'axios'
import { setAlert } from './alert'

import {
    GET_AUCTION,
    GET_AUCTIONS,
    AUCTION_ERROR
} from './types'

// Get all auctions not closed
export const getCurrentAuctions = () => async dispatch => {
    try {
        const res = await axios.get('/api/auctions')

        dispatch({
            type: GET_AUCTIONS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: AUCTION_ERROR,
            payload: { msg: error.response, status: error.response }
        })
    }
}

// Get auction by ID
export const getAuctionById = auctionId => async dispatch => {
    try {
        const res = await axios.get(`/api/auctions/${auctionId}`)
        dispatch({
            type: GET_AUCTION,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: AUCTION_ERROR,
            payload: { msg: error.response, status: error.response }
        })
    }
}
