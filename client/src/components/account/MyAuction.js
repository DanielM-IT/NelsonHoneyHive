import React from 'react'
import { Link } from 'react-router-dom'


const MyAuction = ({
    auction: {
        _id,
        listingname,
        imageurl,
        currentprice
    } }) => {

    return (
        <div className='bg-white preserve-whitespace'>
            <Link to={{ pathname: `/auction/${_id}`, data: _id }} className='auction bg-yellow'>
                <div className="auction-card-img">
                    <img src={imageurl} alt="" className='round-img' />
                </div>
            </Link>
            <div>
                <Link to={{ pathname: `/auction/${_id}`, data: _id }} className='auction'>
                    <div className="grid-0">
                        <h2 className="small">{listingname}</h2>
                        <h2 className="text-dark small">${currentprice}</h2>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default MyAuction
