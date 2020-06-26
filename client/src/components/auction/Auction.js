import React, { Fragment, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../layout/Spinner'
import AuctionDetails from './AuctionDetails'
import Bids from './Bids'
import BidDetails from './BidDetails'
import { getAuctionById, updateAuctionById } from '../../actions/auction'
import { getCurrentBids, addBid } from '../../actions/bid'

const initialState = {
    currentprice: '',
    reservemet: false,
    numberofbids: ''
}

const Auction = ({
    getAuctionById,
    auction: { singleAuction, loading },
    getCurrentBids,
    bid: { currentBids },
    addBid,
    updateAuctionById,
    match,
    history,
    isAuthenticated
}) => {
    useEffect(() => {
        getAuctionById(match.params.id)
        getCurrentBids(match.params.id)
    },
        [getAuctionById, getCurrentBids, match.params.id])

    const [amount, setText] = useState('')


    const onChange = e =>
        setText(e.target.value)

    const onSubmit = async e => {
        e.preventDefault()
        if (isAuthenticated) {
            const auctionData = { ...initialState }

            if (amount > singleAuction.currentprice || singleAuction.numberofbids == 0) {
                auctionData.currentprice = amount
                auctionData.numberofbids += 1
                if (amount >= singleAuction.reserve) {
                    auctionData.reservemet = true
                }
                addBid(match.params.id, { amount })
                updateAuctionById(match.params.id, auctionData)
                setText('')
                window.location.reload(false)
            }
            else
                window.alert("Bid must be greater than the current top bid")
        }
        else
            history.push('/login')
    }

    return (
        <Fragment>
            {loading ? (<Spinner />) : (
                <Fragment>
                    <div className="auctions-grid-2 preserve-whitespace">
                        <div className="img-section">
                            <img src={singleAuction.imageurl} alt="" />
                        </div>
                        <div className="auction-section">
                            <AuctionDetails singleAuction={singleAuction} />
                        </div>
                        <div>
                            <div className="bg-light p-1 bid-section">
                                <Bids currentBids={currentBids} />
                            </div>
                            <div className="bg-light post-form p-1">
                                <BidDetails singleAuction={singleAuction} />
                                <form
                                    className="form my-1"
                                    onSubmit={onSubmit}
                                >
                                    <input
                                        name="text"
                                        type="text"
                                        placeholder="Enter bid amount"
                                        value={amount}
                                        onChange={onChange}
                                        required
                                    />
                                    <input type='submit' className='btn btn-green my-1 p-1' value='Place Bid' />
                                </form>
                            </div>

                        </div>
                    </div>
                </Fragment>
            )}
        </Fragment>
    )
}

Auction.propTypes = {
    getCurrentBids: PropTypes.func.isRequired,
    getAuctionById: PropTypes.func.isRequired,
    updateAuctionById: PropTypes.func.isRequired,
    addBid: PropTypes.func.isRequired,
    auction: PropTypes.object.isRequired,
    bid: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    auction: state.auction,
    bid: state.bid,
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { getAuctionById, getCurrentBids, addBid, updateAuctionById })(Auction)
