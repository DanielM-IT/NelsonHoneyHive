import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createTicket } from '../../actions/support'


const initialState = {
    name: '',
    email: '',
    message: ''
}

const SupportForm = ({ createTicket }) => {
    const [formData, setFormData] = useState(initialState)

    const {
        name,
        email,
        message
    } = formData

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault()
        createTicket(formData)
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
            </div>
            <div className="form-group">
                <input
                    type="text"
                    placeholder="Message"
                    name="message"
                    value={message}
                    onChange={onChange}
                />
                <small className="form-text">
                    Describe what you would like assistance with
                </small>
            </div>
            <input type="submit" className="btn btn-primary my-1" />
        </form>
    )
}

SupportForm.propTypes = {
    createTicket: PropTypes.func.isRequired,
}

export default connect(null, { createTicket })(SupportForm)
