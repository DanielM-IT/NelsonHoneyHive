import React from 'react'
import { Link } from 'react-router-dom'

const AccountActions = () => {
    return (
        <div className="dash-buttons">
            <Link to="profile-form" className="btn btn-light">
                <i className="fas fa-user-circle text-primary"></i> Edit Profile</Link>
            <Link to="add-experience" className="btn btn-light">
                <i className="fa fa-gavel text-primary"></i> Add Auction</Link>
            <Link to="add-education" className="btn btn-light">
                <i className="fa fa-pencil text-primary"></i> Edit Auction</Link>
        </div>
    )
}

export default AccountActions
