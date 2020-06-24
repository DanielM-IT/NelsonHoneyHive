import React from 'react'
import Moment from 'react-moment'
import moment from 'moment'

const Bids = ({
    bid: {
        amount,
        biddate,
        biddername
    }

}) => {

    return (
        <div>

            <span>${amount}    {biddername}   <Moment format="DD/MM/YYYY">{moment.utc(biddate)}</Moment> </span>
        </div>
    )
}

export default Bids