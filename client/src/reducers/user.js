import {
    GET_USER,
    UPDATE_USER,
    USER_ERROR
} from '../actions/types'

const initialState = {
    user: null,
    loading: true,
    error: {}
}

export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case GET_USER:
        case UPDATE_USER:
            return {
                ...state,
                user: payload,
                loading: false
            }
        case USER_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
                user: null
            }
        default:
            return state
    }
}