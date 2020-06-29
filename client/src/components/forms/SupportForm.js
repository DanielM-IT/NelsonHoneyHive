import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createTicket } from '../../actions/support'


const initialState = {
    name: '',
    email: '',
    message: '',
    errors: {}
}

const SupportForm = ({ createTicket }) => {
    const [formData, setFormData] = useState(initialState)

    const {
        name,
        email,
        message,
        errors
    } = formData

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault()
        if (validateForm()) {
            createTicket(formData)
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
            if (!fields["name"].match(/^[a-zA-Z1-9 ]*$/)) {
                formIsValid = false
                errors["name"] = "*Please enter alphabet characters or numbers only."
            }
        }

        if (!fields["email"]) {
            formIsValid = false
            errors["email"] = "*Please enter your email address."
        }
        if (typeof fields["email"] !== "undefined") {
            // Below is a common pattern used to valid an email address.
            var emailPattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i)
            if (!emailPattern.test(fields["email"])) {
                formIsValid = false
                errors["email"] = "*Please enter a valid email address."
            }
        }

        if (!fields["message"]) {
            formIsValid = false
            errors["message"] = "*Please enter a message."
        }

        setFormData({ ...formData, errors: errors })

        return formIsValid
    }


    return (
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
                    Enter your preferred name
                </small>
                <div className='error-message'>{formData.errors.name}</div>
            </div>
            <div className="form-group">
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={onChange}
                />
                <small className="form-text">
                    Enter a valid email address
                </small>
                <div className='error-message'>{formData.errors.email}</div>
            </div>
            <div className="form-group">
                <textarea
                    type="textarea"
                    placeholder="Message"
                    name="message"
                    value={message}
                    onChange={onChange}
                    className="textarea"
                />
                <small className="form-text">
                    Describe what you would like assistance with
                </small>
                <div className='error-message'>{formData.errors.message}</div>
            </div>
            <input type="submit" className="btn btn-primary my-1" />
        </form>
    )
}

SupportForm.propTypes = {
    createTicket: PropTypes.func.isRequired,
}

export default connect(null, { createTicket })(SupportForm)
