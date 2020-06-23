import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const AuctionItem = ({
    auction: {
        seller: { _id, name },
        imageurl,
        currentprice
    } }) => {
    return (
        <div className='profile bg-light'>
            <img src={imageurl} alt="" className='round-img' />
            <div>
                <h2>{name}</h2>
                <p className="my-1">{currentprice}</p>
                <Link to={`/profile/${_id}`} className='btn btn-primary'>
                    View Producer
                </Link>

            </div>
        </div>
    )
}

AuctionItem.propTypes = {
    auction: PropTypes.object.isRequired,
}

export default AuctionItem
