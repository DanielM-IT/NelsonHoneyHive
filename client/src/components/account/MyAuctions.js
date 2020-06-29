import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Spinner from '../layout/Spinner'
import { getAuctionsByUserId } from '../../actions/auction'
import MyAuction from './MyAuction'


const MyAuctions = ({
    getAuctionsByUserId,
    auction: { auctions, loading },
    match
}) => {
    useEffect(() => {
        getAuctionsByUserId(match.params.id)
    }, [getAuctionsByUserId, match.params.id])

    if (auctions != null) {
        return (
            <Fragment>
                {loading ? <Spinner /> :
                    <Fragment>
                        <h1 className="large text-dark">My Auctions</h1>
                        <p className="lead text-dark">
                            <i className="fab fa-connectdevelop"> View all your listings</i>
                        </p>
                        <Link to="/account" className="btn btn-light my">
                            Back To My Hive
                        </Link>
                        <div className="auctions-grid">
                            {auctions.length > 0 ? (
                                auctions.map(auction => (
                                    <MyAuction key={auction._id} auction={auction} />
                                ))
                            ) : <h4>No auctions found...</h4>}
                        </div>
                    </Fragment>}
            </Fragment >
        )
    }
    else {
        return (
            <Fragment />
        )
    }
}

MyAuctions.propTypes = {
    getAuctionsByUserId: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auction: state.auction
})

export default connect(mapStateToProps, { getAuctionsByUserId })(MyAuctions)