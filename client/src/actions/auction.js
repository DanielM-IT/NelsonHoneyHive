import axios from 'axios'
import { setAlert } from './alert'

import {
    GET_AUCTION,
    GET_AUCTIONS,
    AUCTION_ERROR,
    UPDATE_AUCTION,
    CREATE_AUCTION
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

// Get auction by user ID
export const getAuctionsByUserId = userId => async dispatch => {
    try {
        const res = await axios.get(`/api/auctions/user/${userId}`)
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

// Update auction by ID
export const updateAuctionById = (auctionId, formData) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const res = await axios.put(`/api/auctions/${auctionId}`, formData, config)

        dispatch({
            type: UPDATE_AUCTION,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: AUCTION_ERROR,
            payload: { msg: error.response, status: error.response }
        })
    }
}

// Create auction
export const createAuction = (formData, history) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const res = await axios.post('api/auctions', formData, config)

        dispatch({
            type: CREATE_AUCTION,
            payload: res.data
        })

        dispatch(setAlert('Auction Created', 'success'))


        history.push('/my-auctions')

    } catch (error) {
        const errors = error.response.data.errors

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }

        dispatch({
            type: AUCTION_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        })
    }
}
