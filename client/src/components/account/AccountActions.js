import React from 'react'
import { Link } from 'react-router-dom'

const AccountActions = ({
    user: {
        _id,
        isSeller
    }
}) => {
    if (isSeller) {
        return (
            <div className="dash-buttons">
                <Link to="edit-account" className="btn btn-light">
                    <i className="fas fa-edit text-primary"></i> Edit Account</Link>
                <Link to="profile-form" className="btn btn-light">
                    <i className="fas fa-user-circle text-primary"></i> Edit Profile</Link>
                <Link to="add-auction" className="btn btn-light">
                    <i className="fa fa-gavel text-primary"></i> Add Auction</Link>
                <Link to={{ pathname: `/my-auctions/${_id}`, data: _id }} className="btn btn-light">
                    <i className="fas fa-clipboard-list text-primary"></i> My Auctions</Link>
            </div>
        )
    }
    else
        return (
            <div className="dash-buttons">
                <Link to="edit-account" className="btn btn-light">
                    <i className="fas fa-edit text-primary"></i> Edit Account</Link>
            </div>
        )
}

export default AccountActions
