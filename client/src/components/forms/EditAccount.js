import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCurrentUser, updateCurrentUser } from '../../actions/user'

const initialState = {
    name: '',
    password: '',
    isSeller: false
}

const EditAccount = ({
    getCurrentUser,
    user: { user, loading },
    updateCurrentUser
}) => {
    const [formData, setFormData] = useState(initialState)

    useEffect(() => {
        if (!user) getCurrentUser()
        if (!loading && user) {
            const userData = { ...initialState }
            for (const key in user) {
                if (key in userData) userData[key] = user[key]
            }
            setFormData(userData)
        }
    }, [loading, getCurrentUser, user])
    const {
        name,
        password,
        isSeller
    } = formData

    const handleCheckBoxClick = e => {
        setFormData((prevState) => {
            return {
                ...formData,
                isSeller: !prevState.isSeller
            }
        })
    }



    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault()

        updateCurrentUser(user._id, { name, password, isSeller })
        window.location.reload(false)
    }


    return (
        <Fragment>
            <h1 className="large text-primary">Edit Your Profile</h1>
            <p className="lead">
                <i className="fas fa-user" /> Add some changes to your profile
            </p>
            <form className="form" onSubmit={onSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={name}
                        onChange={onChange}
                    />
                    <small className="form-text">
                        Could be your own company or one you work for
                    </small>
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={onChange}
                    />
                    <small className="form-text">
                        Could be your own or a company website
                    </small>
                </div>
                <div className="form-group">
                    <label>Is a seller:  </label>
                    <input type="checkbox" id="isSeller" name="isSeller" value="isSeller" checked={isSeller ? true : false} onChange={handleCheckBoxClick} />
                </div>


                <input type="submit" className="btn btn-primary my-1" />
                <Link className="btn btn-light my-1" to="/account">
                    Go Back
                </Link>
            </form>
        </Fragment>

    )
}

EditAccount.propTypes = {
    getCurrentUser: PropTypes.func.isRequired,
    updateCurrentUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps, { getCurrentUser, updateCurrentUser })(
    EditAccount
) 