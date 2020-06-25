import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../layout/Spinner'
import AuctionDetails from './AuctionDetails'
import Bids from './Bids'
import BidDetails from './BidDetails'
import { getAuctionById } from '../../actions/auction'


const Auction = ({ getAuctionById, auction: { singleAuction, loading }, match }) => {
    useEffect(() => {
        getAuctionById(match.params.id)
    }, [getAuctionById, match.params.id])
    return (
        <Fragment>
            {loading ? (<Spinner />) : (
                <Fragment>
                    <div className="auctions-grid preserve-whitespace">
                        <div className="bg-light">
                            <img src={singleAuction.imageurl} alt="" />
                        </div>
                        <AuctionDetails singleAuction={singleAuction} />
                        <div>
                            <BidDetails singleAuction={singleAuction} />
                            <div className="bg-light p-1">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        placeholder=""
                                        name=""
                                    />
                                </div>
                                <div className="my-2">
                                    <button
                                        type="button"
                                        className="btn btn-light"
                                    >
                                        Place Bid
                                    </button>
                                </div>
                            </div>
                            <div className="bg-light p-1">
                                <h4>Bids</h4>
                                <h4>No bids placed</h4>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )}
        </Fragment>
    )
}

Auction.propTypes = {
    getAuctionById: PropTypes.func.isRequired,
    auction: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auction: state.auction
})

export default connect(mapStateToProps, { getAuctionById })(Auction)
