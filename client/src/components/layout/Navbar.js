import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../actions/auth'



const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
    const leftAuthLinks = (
        <ul>
            <li>
                <Link to='/profiles' className="text-secondary">Suppliers</Link>
            </li>
            <li>
                <Link to='/posts' className="text-secondary">Community</Link>
            </li>
            <li>
                <Link to='/support' className="text-secondary">Support</Link>
            </li>
        </ul>
    )

    const rightAuthLinks = (
        <ul>
            <li>
                <Link to='/auctions' className="text-secondary">Browse Store</Link>
            </li>
            <li>
                <Link to='/account' className="text-secondary">
                    <i className='fas fa-user' />{' '}
                    <span className='hide-sm'>My Hive</span>
                </Link>
            </li>
            <li>
                <a onClick={logout} href='#!' className="text-secondary">
                    <i className='fas fa-sign-out-alt' />{' '}
                    <span className='hide-sm'>Logout</span>
                </a>
            </li>
        </ul>
    )

    const leftGuestLinks = (
        <ul>
            <li>
                <Link to='/profiles' className="text-secondary">Suppliers</Link>
            </li>
            <li>
                <Link to='/posts' className="text-secondary">Community</Link>
            </li>
            <li>
                <Link to='/support' className="text-secondary">Support</Link>
            </li>
        </ul>
    )

    const rightGuestLinks = (
        <ul>
            <li>
                <Link to='/auctions' className="text-secondary">Browse Store</Link>
            </li>
            <li>
                <Link to='/register' className="text-secondary">Register</Link>
            </li>
            <li>
                <Link to='/login' className="text-secondary">Login</Link>
            </li>
        </ul>
    )

    return (
        <nav className="navbar bg-dark">

            <div>
                {!loading && (<Fragment>{isAuthenticated ? leftAuthLinks : leftGuestLinks}</Fragment>)}
            </div>
            <div className="grid-1">
                <img src='.../../../public/icons/logo.png' alt="logo" className="logo" />

                <Link to='/' className="text-primary brand">
                    Nelson Honey Hive
                </Link>
            </div>
            <div>

                {!loading && (<Fragment>{isAuthenticated ? rightAuthLinks : rightGuestLinks}</Fragment>)}
            </div>
        </nav >
    )
}

Navbar.propTypes = {
    logout: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logout })(Navbar)

