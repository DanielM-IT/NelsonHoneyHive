const mongoose = require('mongoose')

const AuctionSchema = new mongoose.Schema({
    name: {
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
        type: mongoose.Types.Decimal128,
        required: true
    },
    reserve: {
        type: mongoose.Types.Decimal128,
        required: true
    },
    bid: [
        {
            amount: {
                type: mongoose.Types.Decimal128,
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
        type: mongoose.Types.Decimal128,
        required: true
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'seller'
    }
})

module.exports = Auction = mongoose.model('auction', AuctionSchema)
