import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../layout/Spinner'
import AuctionItem from './AuctionItem'
import { getCurrentAuctions } from '../../actions/auction'

const Auctions = ({ getCurrentAuctions, auction: { auctions, loading } }) => {
    useEffect(() => {
        getCurrentAuctions()
    }, [getCurrentAuctions])

    return (
        <Fragment>
            {loading ? <Spinner /> :
                <Fragment>
                    <div className="add-pg-padding">
                        <h1 className="large text-dark">Auctions</h1>
                        <p className="lead text-dark">
                            <i className="fab fa-connectdevelop"> Browse current auctions</i>
                        </p>
                        <div className="auctions-grid">
                            {auctions.length > 0 ? (
                                auctions.map(auction => (
                                    <AuctionItem key={auction._id} auction={auction} />
                                ))
                            ) : <h4>No auctions found...</h4>}
                        </div>
                    </div>
                </Fragment>}
        </Fragment>
    )
}

Auctions.propTypes = {
    getCurrentAuctions: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auction: state.auction
})

export default connect(mapStateToProps, { getCurrentAuctions })(Auctions)
