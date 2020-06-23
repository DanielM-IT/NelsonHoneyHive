import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getAuctionById } from '../../actions/auction'


const Auction = ({ getAuctionById, auction: { singleAuction, loading }, match }) => {
    useEffect(() => {
        getAuctionById(match.params.id)
    }, [getAuctionById, match.params.id])

    return (
        <Fragment>
            This is ready to implement the UI.
        </Fragment>
    )
}

Auction.propTypes = {
    getAuctionById: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auction: state.auction
})

export default connect(mapStateToProps, { getAuctionById })(Auction)
