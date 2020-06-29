import React, { Fragment } from 'react'
import SupportForm from './SupportForm'

const Support = () => {
    return (
        <Fragment>
            <div className="add-pg-padding">
                <h1 className="large text-dark">Contact Support</h1>
                <p className="lead text-dark">
                    <i className="fas fa-envelope-open-text" /> Send a message detailing your issue and we will reply as soon as possible.
                </p>
                <SupportForm />
            </div>
        </Fragment>
    )
}

export default Support
