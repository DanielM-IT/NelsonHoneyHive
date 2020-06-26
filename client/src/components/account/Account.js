import React, { useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../layout/Spinner'
import AccountActions from './AccountActions'
import { getCurrentProfile, deleteAccount } from '../../actions/profile'

const Account = ({
    getCurrentProfile,
    deleteAccount,
    auth: { user },
    profile: { profile, loading }
}) => {
    useEffect(() => {
        getCurrentProfile()
    }, [getCurrentProfile])

    console.log(profile)

    return loading && profile === null ? (
        <Spinner />
    ) : (
            <Fragment>
                <h1 className="large text-primary">Account</h1>
                <p className="lead">
                    <i className="fas fa-user"></i> Welcome {user && user.name}
                </p>
                {profile !== null ? (
                    <Fragment>
                        <AccountActions
                        // user={profile} 
                        />
                        {/* Insert account details here */}
                        <div className="my-2">
                            <button className="btn btn-danger" onClick={() => deleteAccount()} >
                                <i className="fas fa-user-minus"></i> Delete My Account
                            </button>
                        </div>
                    </Fragment>
                ) : (<Fragment>
                    <p>You have not yet set up a profile, please add some info</p>
                    <Link to='profile-form' className='btn btn-primary my-1'>
                        Create profile
                        </Link>
                </Fragment>
                    )}
            </Fragment>
        )
}

Account.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    deleteAccount: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
})

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Account)