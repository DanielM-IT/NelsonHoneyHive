import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
const AuctionItem = ({
    auction: {
        _id,
        name,
        imageurl,
        currentprice
    } }) => {

    return (
        <div className='bg-white'>
            <Link to={{ pathname: `/auction/${_id}`, data: _id }} className='auction bg-yellow'>
                <img src={imageurl} alt="" className='round-img' />
            </Link>
            <Link to={{ pathname: `/auction/${_id}`, data: _id }} className='auction'>
                <h2>{name} ${currentprice}</h2>
            </Link>
        </div>
    )
}

AuctionItem.propTypes = {
    auction: PropTypes.object.isRequired,
}

export default AuctionItem
