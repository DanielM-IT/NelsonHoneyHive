import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Register from '../auth/Register'
import Login from '../auth/Login'
import Alert from '../layout/Alert'
import Account from '../account/Account'
import ProfileForm from '../forms/ProfileForm'
import AddExperience from '../forms/AddExperience'
import AddEducation from '../forms/AddEducation'
import Profiles from '../profiles/Profiles'
import Profile from '../profile/Profile'
import Posts from '../posts/Posts'
import Post from '../post/Post'
import PrivateRoute from '../routing/PrivateRoute'


const Routes = props => {
    return (
        <section className="container">
            <Alert />
            <Switch>
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/profiles' component={Profiles} />
                <Route exact path='/profile/:id' component={Profile} />
                <Route exact path='/posts' component={Posts} />
                <Route exact path='/posts/:id' component={Post} />
                <PrivateRoute exact path='/account' component={Account} />
                <PrivateRoute exact path='/profile-form' component={ProfileForm} />
                <PrivateRoute exact path='/add-experience' component={AddExperience} />
                <PrivateRoute exact path='/add-education' component={AddEducation} />
            </Switch>
        </section>
    )
}

export default Routes