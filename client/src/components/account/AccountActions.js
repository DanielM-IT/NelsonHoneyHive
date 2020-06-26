import React from 'react'
import { Link } from 'react-router-dom'

const AccountActions = () => {
    return (
        <div className="dash-buttons">
            <Link to="profile-form" className="btn btn-light">
                <i className="fas fa-user-circle text-primary"></i> Edit Profile</Link>
            <Link to="add-auction" className="btn btn-light">
                <i className="fa fa-gavel text-primary"></i> Add Auction</Link>
            <Link to="my-auctions" className="btn btn-light">
                <i className="fas fa-clipboard-list text-primary"></i> My Auctions</Link>
        </div>
    )
}

export default AccountActions
