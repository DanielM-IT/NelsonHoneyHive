import React, { useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../layout/Spinner'
import AccountActions from './AccountActions'
import AccountDetails from './AccountDetails'
import { getCurrentProfile, deleteAccount } from '../../actions/profile'

const Account = ({
    getCurrentProfile,
    deleteAccount,
    auth: { user },
    profile: { loading }
}) => {
    useEffect(() => {
        getCurrentProfile()
    }, [getCurrentProfile])

    if (user != null) {
        return loading ? (
            <Spinner />
        ) : (
                <Fragment>
                    <div>
                        <h1 className="large text-dark">Account</h1>
                        <p className="lead">
                            <i className="fas fa-user"></i> Welcome {user && user.name}
                        </p>
                        <Fragment>
                            <AccountActions user={user} />
                            <AccountDetails user={user} />
                            <div className="my-2">
                                <button className="btn btn-danger" onClick={() => deleteAccount()} >
                                    <i className="fas fa-user-minus"></i> Delete My Account
                            </button>
                            </div>
                        </Fragment>
                    </div>
                </Fragment>
            )
    }
    else {
        return (
            <Fragment />
        )
    }
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