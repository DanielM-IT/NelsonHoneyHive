const mongoose = require('mongoose')

const BidSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true
    },
    biddate: {
        type: Date,
        default: Date.now
    },
    biddername: {
        type: String
    },
    auctionid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'auction'
    }
})

module.exports = Bid = mongoose.model('bid', BidSchema)
