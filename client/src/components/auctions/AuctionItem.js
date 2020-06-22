import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const AuctionItem = ({
    auction: {
        name,
        imageurl,
        currentprice
    } }) => {
    return (
        <div className='profile bg-light'>
            <img src={imageurl} alt="" className='round-img' />
            <div>
                <h2>{name}</h2>
                <p className="my-1">{currentprice}</p>
            </div>
        </div>
    )
}

AuctionItem.propTypes = {
    auction: PropTypes.object.isRequired,
}

export default AuctionItem
