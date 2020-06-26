import React from 'react'

const BidDetails = ({
    singleAuction: {
        startbid,
        currentprice,
        numberofbids,
        reservemet
    }
}) => {
    if (numberofbids === 0) {
        return (
            <div className="bg-light p-1 small">
                <p>
                    <strong>Starting Bid: </strong>
                    ${startbid}
                </p>
            </div>
        )
    }
    else if (numberofbids > 0) {
        if (reservemet) {
            return (
                <div className="bg-light px-1">
                    <div>
                        <p className="medium-weight pt">
                            Current Bid:
                            ${currentprice} <br />
                        </p>
                        <p className="text-red pb">
                            Reserve Met
                        </p>
                    </div>
                </div>

            )
        }
        else {
            return (
                <div className="bg-light p-1 small medium-weight">
                    <p>
                        Current Bid:
                    ${currentprice}
                    </p>
                </div>
            )
        }
    }
}

export default BidDetails