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
        <div className="preserve-whitespace">
            <h2 className="medium">{listingname}</h2>
            <div>
                <h4>Closes</h4>
                <Moment format="DD/MM/YYYY   HH:MM A">{moment(enddate)}</Moment>
            </div>
            <div className="my-1">
                <h4>Shipping</h4>
            ${shipping}<br />
            </div>
            <div>
                <h4>Description</h4>
                {description}
            </div>
        </div>
    )
}

AuctionDetails.propTypes = {

}

export default AuctionDetails
