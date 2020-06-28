import React, { Fragment } from 'react'
import Moment from 'react-moment';
import moment from 'moment';
const AuctionItem = ({ currentBids }) => {
    const currentBid = currentBids.map(curBid => (
        <tr key={curBid._id}>
            <td>${curBid.amount}</td>
            <td>{curBid.biddername}</td>
            <td><Moment format="DD/MM/YYYY">{moment(curBid.biddate)}</Moment></td>
            <td><Moment format="hh:mm a">{moment(curBid.biddate)}</Moment></td>
        </tr>
    ))

    return (
        <Fragment>
            <h4 className="my-2 text-center medium">Bid History</h4>
            {currentBid.length > 0 ?
                <table className="table">
                    <thead>
                        <tr>
                            <th>Bid</th>
                            <th className="hide-sm">Bidder</th>
                            <th className="hide-sm">Date</th>
                            <th className="hide-sm">Time</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>{currentBid}</tbody>
                </table> : <h4>No bids made...</h4>}
        </Fragment>
    )
}

export default AuctionItem
