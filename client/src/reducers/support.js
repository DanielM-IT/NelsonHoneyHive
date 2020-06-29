import {
    CREATE_TICKET,
    TICKET_ERROR
} from '../actions/types'

const initialState = {
    ticket: null,
    loading: true,
    error: {}
}

export default (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case CREATE_TICKET:
            return {
                ...state,
                ticket: payload,
                loading: false
            }
        case TICKET_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
                ticket: null
            }
        default:
            return state
    }
}

