const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const {
    check,
    validationResult
} = require('express-validator')

const Bid = require('../../models/Bid')
const User = require('../../models/User')


// @route    POST api/bids/:id
// @desc     Add bid on an auction using its id
// @access   Private
router.post(
    '/:id',
    [
        auth,
        [
            check('amount', 'Amount is required.').not().isEmpty()
        ]
    ],
    async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            })
        }

        try {
            const user = await User.findById(req.user.id).select('-password')

            const newBid = new Bid({
                amount: req.body.amount,
                biddername: user.name,
                auctionid: req.params.id
            })

            const bid = await newBid.save()

            res.json(bid)
        } catch (error) {
            console.error(error.message)
            res.status(500).send('Server Error')
        }
    })


// @route    GET api/bids/:id
// @desc     Get bids by auction id
// @access   Public
router.get('/:id', async (req, res) => {
    try {
        const bids = await Bid.find({ auctionid: req.params.id })
        console.log(bids)
        if (!bids.length) {
            return res.status(400).json({
                msg: 'No bids.'
            })
        }

        res.json(bids)
    } catch (error) {
        console.error(error.message)
        res.status(500).send('Server Error')
    }
})


module.exports = router