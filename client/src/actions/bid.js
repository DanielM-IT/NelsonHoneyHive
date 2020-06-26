import axios from 'axios'

import {
    GET_BIDS,
    ADD_BID,
    BID_ERROR,
    CLEAR_BIDS
} from './types'

// Get all current bids for an auction
export const getCurrentBids = id => async dispatch => {
    dispatch({ type: CLEAR_BIDS })
    try {
        const res = await axios.get(`/api/bids/${id}`)

        dispatch({
            type: GET_BIDS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: BID_ERROR,
            payload: { msg: error.response, status: error.response }
        })
    }
}

// Place bid by auction id
export const addBid = (auctionId, formData) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const res = await axios.post(`/api/bids/${auctionId}`, formData, config)

        dispatch({
            type: ADD_BID,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: BID_ERROR,
            payload: { msg: error.response, status: error.response }
        })
    }
}
