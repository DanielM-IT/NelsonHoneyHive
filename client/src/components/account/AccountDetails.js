import React from 'react'

const AccountDetails = ({
    user: {
        name,
        isSeller
    }
}) => {
    return (
        <div className="form-group">
            <br />
            <label> User name: {name}</label>
            <br />
            <label> Is a seller:  </label>
            <input type="checkbox" id="isSeller" name="isSeller" value="isSeller" checked={isSeller ? true : false} readOnly="readonly" />
        </div>
    )
}

export default AccountDetails
