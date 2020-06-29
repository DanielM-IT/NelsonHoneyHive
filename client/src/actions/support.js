import axios from 'axios'
import { setAlert } from './alert'
import {
    CREATE_TICKET,
    TICKET_ERROR
} from './types'

// Create support ticket
export const createTicket = (formData) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const res = await axios.post('api/support', formData, config)

        dispatch({
            type: CREATE_TICKET,
            payload: res.data
        })

        dispatch(setAlert('Ticket Submitted', 'success'))
    } catch (error) {
        const errors = error.response.data.errors

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }

        dispatch({
            type: TICKET_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        })
    }
}
