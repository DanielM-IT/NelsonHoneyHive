const mongoose = require('mongoose')

const AuctionSchema = new mongoose.Schema({
    listingname: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    imageurl: {
        type: String
    },
    startdate: {
        type: Date,
        default: Date.now
    },
    enddate: {
        type: Date
    },
    closed: {
        type: Boolean,
        default: false
    },
    startbid: {
        type: Number,
        required: true
    },
    currentprice: {
        type: Number,
        required: true
    },
    reserve: {
        type: Number,
        required: true
    },
    reservemet: {
        type: Boolean,
        default: false
    },
    bid: [
        {
            amount: {
                type: Number,
                required: true
            },
            biddate: {
                type: Date,
                default: Date.now
            },
            biddername: {
                type: String,
                required: true
            }
        }
    ],
    numberofbids: {
        type: Number,
        default: 0
    },
    shipping: {
        type: Number,
        required: true
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'seller'
    }
})

module.exports = Auction = mongoose.model('auction', AuctionSchema)
