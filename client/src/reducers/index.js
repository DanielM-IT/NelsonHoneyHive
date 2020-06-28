import { combineReducers } from 'redux'
import alert from './alert'
import auth from './auth'
import profile from './profile'
import post from './post'
import auction from './auction'
import bid from './bid'
import user from './user'

export default combineReducers({
    alert,
    auth,
    profile,
    post,
    auction,
    bid,
    user
})