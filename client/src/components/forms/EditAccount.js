import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCurrentUser, updateCurrentUser } from '../../actions/user'

const initialState = {
    name: '',
    password: '',
    isSeller: false,
    errors: {}
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
        isSeller,
        errors
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
        if (validateForm()) {
            updateCurrentUser(user._id, { name, password, isSeller })
            window.location.reload(false)
        }
    }

    function validateForm() {
        let fields = formData
        let errors = {}
        let formIsValid = true

        if (!fields["name"]) {
            formIsValid = false
            errors["name"] = "*Please enter a name."
        }
        if (typeof fields["name"] !== "undefined") {
            if (!fields["name"].match(/^[a-zA-Z1-9]*$/)) {
                formIsValid = false
                errors["name"] = "*Please enter alphabet characters or numbers only."
            }
        }

        if (!fields["password"]) {
            formIsValid = false
            errors["password"] = "*Please enter a password."
        }
        if (typeof fields["password"] !== "undefined") {
            if (!fields["password"].match(/^.{6,}$/)) {
                formIsValid = false
                errors["password"] = "*Please enter a secure and strong password of 6 or more characters."
            }
        }

        setFormData({ ...formData, errors: errors })

        return formIsValid
    }


    return (
        <Fragment>
            <div className="add-pg-padding">
                <h1 className="large text-dark">Edit Your Account</h1>
                <p className="lead text-dark">
                    <i className="fas fa-edit" /> Add some changes to your account
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
                            Your full or preferred name
                        </small>
                        <div className='error-message'>{formData.errors.name}</div>
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
                            Enter a strong and secure password
                        </small>
                        <div className='error-message'>{formData.errors.password}</div>
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
            </div>
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