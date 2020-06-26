import React from 'react'
import Moment from 'react-moment'
import moment from 'moment'

const AuctionDetails = ({
    singleAuction: {
        listingname,
        description,
        enddate,
        shipping
    }

}) => {
    return (
        <div>
            <h3>{listingname}</h3><br />
            <h4>Closes</h4>
            <Moment format="DD/MM/YYYY - HH:MM A">{moment(enddate)}</Moment><br />
            <h4>Shipping</h4>
            ${shipping}<br />
            <h4>Description</h4>
            {description}
        </div>
    )
}

AuctionDetails.propTypes = {

}

export default AuctionDetails
