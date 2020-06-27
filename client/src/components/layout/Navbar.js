import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../actions/auth'


const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
    const leftAuthLinks = (
        <ul>
            <li>
                <Link to='/profiles'>Suppliers</Link>
            </li>
            <li>
                <Link to='/posts'>Community</Link>
            </li>
            <li>
                <Link to='/support'>Support</Link>
            </li>
        </ul>
    )

    const rightAuthLinks = (
        <ul>
            <li>
                <Link to='/auctions'>Browse Store</Link>
            </li>
            <li>
                <Link to='/account'>
                    <i className='fas fa-user' />{' '}
                    <span className='hide-sm'>My Hive</span>
                </Link>
            </li>
            <li>
                <a onClick={logout} href='#!'>
                    <i className='fas fa-sign-out-alt' />{' '}
                    <span className='hide-sm'>Logout</span>
                </a>
            </li>
        </ul>
    )

    const leftGuestLinks = (
        <ul>
            <li>
                <Link to='/profiles'>Suppliers</Link>
            </li>
            <li>
                <Link to='/posts'>Community</Link>
            </li>
            <li>
                <Link to='/support'>Support</Link>
            </li>
        </ul>
    )

    const rightGuestLinks = (
        <ul>
            <li>
                <Link to='/auctions'>Browse Store</Link>
            </li>
            <li>
                <Link to='/register'>Register</Link>
            </li>
            <li>
                <Link to='/login'>Login</Link>
            </li>
        </ul>
    )

    return (
        <nav className="navbar bg-dark">
            <div></div>
            {!loading && (<Fragment>{isAuthenticated ? leftAuthLinks : leftGuestLinks}</Fragment>)}
            <h1>
                <Link to='/'>
                    Nelson Honey Hive
                </Link>
            </h1>
            {!loading && (<Fragment>{isAuthenticated ? rightAuthLinks : rightGuestLinks}</Fragment>)}
        </nav>
    )
}

Navbar.propTypes = {
    logout: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logout })(Navbar)

