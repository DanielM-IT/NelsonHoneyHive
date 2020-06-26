import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Register from '../auth/Register'
import Login from '../auth/Login'
import Alert from '../layout/Alert'
import Account from '../account/Account'
import ProfileForm from '../forms/ProfileForm'
import Profiles from '../profiles/Profiles'
import Profile from '../profile/Profile'
import Posts from '../posts/Posts'
import Post from '../post/Post'
import Auctions from '../auctions/Auctions'
import Auction from '../auction/Auction'
import NotFound from '../layout/NotFound'
import PrivateRoute from '../routing/PrivateRoute'


const Routes = () => {
    return (
        <section className="container">
            <Alert />
            <Switch>
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/profiles' component={Profiles} />
                <Route exact path='/profile/:id' component={Profile} />
                <Route exact path='/auctions' component={Auctions} />
                <Route exact path='/auction/:id' component={Auction} />
                <PrivateRoute exact path='/account' component={Account} />
                <PrivateRoute exact path='/profile-form' component={ProfileForm} />
                <PrivateRoute exact path='/posts' component={Posts} />
                <PrivateRoute exact path='/posts/:id' component={Post} />
                <Route component={NotFound} />
            </Switch>
        </section>
    )
}

export default Routes