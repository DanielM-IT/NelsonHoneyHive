import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCurrentProfile } from '../../actions/profile'

const Account = ({ getCurrentProfile, auth, profile }) => {
    useEffect(() => {
        getCurrentProfile()
    }
        // , []
    )
    // Need to change the empty array due to error.

    return <div>
        Account
        </div>
}

Account.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
})

export default connect(mapStateToProps, { getCurrentProfile })(Account)
