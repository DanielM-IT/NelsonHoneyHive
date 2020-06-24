import React from 'react'

const BidDetails = ({
    singleAuction: {
        startbid,
        currentprice,
        reserve
    }
}) => {
    return (
        <div className="bg-light p-1">
            <p>
                <strong>Starting Bid: </strong><br />
                ${startbid}
            </p>
            <p>
                <strong>Current Price: </strong><br />
                ${currentprice}
            </p>
            <p>
                <strong>Reserve: </strong><br />
                ${reserve}
            </p>
        </div>
    )
}

export default BidDetails