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
    return <Fragment>
        {loading ? <Spinner /> :
            <Fragment>
        <h1 className="large text-primary">Auctions</h1>
        <p className="lead">
                    <i className="fab fa-connectdevelop"> Browse current auctions</i>
                </p>
                <div className="profiles">
                    {auctions.length > 0 ? (
                        auctions.map(auction => (
                            <AuctionItem key={auction._id} auction={auctions} />
                        ))
                    ) : <h4>No auctions found...</h4>}
                </div>
        </Fragment>}
    </Fragment>
}

Auctions.propTypes = {
    getCurrentAuctions: PropTypes.func.isRequired,
    auction: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auction: state.auction
})

export default connect(mapStateToProps, { getCurrentAuctions })(Auctions)
