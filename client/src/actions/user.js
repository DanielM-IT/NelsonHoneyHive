import axios from 'axios'
import { setAlert } from './alert'

import {
    GET_USER,
    UPDATE_USER,
    USER_ERROR
} from './types'

// Get current user's details
export const getCurrentUser = () => async dispatch => {
    try {
        const res = await axios.get('/api/auth')

        dispatch({
            type: GET_USER,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: USER_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        })
    }
}

// Update user
export const updateCurrentUser = (userId, formData) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const res = await axios.put(`/api/users/${userId}`, formData, config)

        dispatch({
            type: UPDATE_USER,
            payload: res.data
        })

        dispatch(setAlert('User Updated', 'success'))
    } catch (error) {
        const errors = error.response.data.errors

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }

        dispatch({
            type: USER_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        })
    }
}
