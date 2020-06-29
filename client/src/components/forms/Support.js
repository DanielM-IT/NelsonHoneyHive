import React, { useState, Fragment } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createTicket } from '../../actions/support'


const initialState = {
    name: '',
    email: '',
    message: ''
}

const Support = ({ createTicket }) => {
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
        <Fragment>
            <div className="add-pg-padding">
                <h1 className="large text-dark">Contact Support</h1>
                <p className="lead text-dark">
                    <i className="fas fa-envelope-open-text" /> Send a message detailing your issue and we will reply as soon as possible.
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
                            type="text"
                            placeholder="Email"
                            name="email"
                            value={email}
                            onChange={onChange}
                        />
                        <small className="form-text">
                            Could be your own or a company website
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
                            Could be your own or a company website
                    </small>
                    </div>
                    <input type="submit" className="btn btn-primary my-1" />
                </form>
            </div>
        </Fragment>
    )
}

Support.propTypes = {
    createTicket: PropTypes.func.isRequired,
}

export default connect(null, { createTicket })(Support)
