import React from 'react'
import { Link } from 'react-router-dom'


const AuctionItem = ({
    auction: {
        _id,
        listingname,
        imageurl,
        currentprice
    } }) => {

    return (
        <div className='bg-white'>
            <Link to={{ pathname: `/auction/${_id}`, data: _id }} className='auction bg-yellow'>
                <img src={imageurl} alt="" className='round-img' />
            </Link>
            <Link to={{ pathname: `/auction/${_id}`, data: _id }} className='auction-details'>
                <h2>{listingname} <br /> ${currentprice}</h2>
            </Link>
        </div>
    )
}

export default AuctionItem
