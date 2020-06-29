import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'

const Landing = ({ isAuthenticated }) => {
    if (isAuthenticated) {
        // return <Redirect to='/account' />
    }

    return (
        <section className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                    <h1 className="large call-to-action">Buy and Sell Quality Honey</h1>
                    <p className=" lead text-silver">
                        Create a producer profile, sell honey and bid on auctions.
                    </p>
                    <div className="buttons">
                        <Link to='/register' className="btn btn-landing">
                            Sell Honey
                        </Link>
                        <Link to='/auctions' className="btn btn-landing">
                            Shop Now
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

Landing.propTypes = {
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Landing)