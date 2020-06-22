const express = require('express')
const request = require('request')
const config = require('config')
const router = express.Router()
const auth = require('../../middleware/auth')
const {
    check,
    validationResult
} = require('express-validator')

const Auction = require('../../models/Auction')


// @route    POST api/auctions
// @desc     Create or update an auction
// @access   Private
router.post(
    '/',
    [
        auth,
        [
            check('name', 'Name is required.').not().isEmpty(),
            check('startbid', 'Startbid is required.').not().isEmpty(),
            check('reserve', 'Reserve is required.').not().isEmpty(),
            check('shipping', 'Shipping is required.').not().isEmpty(),
        ]
    ],
    async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            })
        }

        const {
            name,
            description,
            imageurl,
            enddate,
            startbid,
            currentprice,
            reserve,
            shipping
        } = req.body

        // Build auction object
        const auctionFields = {}
        auctionFields.seller = req.user.id
        if (name) auctionFields.name = name
        if (description) auctionFields.description = description
        if (imageurl) auctionFields.imageurl = imageurl
        if (enddate) auctionFields.enddate = enddate
        if (startbid) auctionFields.startbid = startbid
        if (currentprice) auctionFields.currentprice = currentprice
        if (reserve) auctionFields.reserve = reserve
        if (shipping) auctionFields.shipping = shipping

        try {
            auction = new Auction(auctionFields)

            await auction.save()
            res.json(auction)
        } catch (error) {
            console.error(error.message)
            res.status(500).send('Server Error')
        }
    })


// @route    GET api/auctions/:user_id
// @desc     Get auctions by user id
// @access   Private
router.get('/:user_id', auth, async (req, res) => {
    try {
        const auctions = await Auction.find({ seller: req.params.user_id })

        if (!auctions.length) {
            return res.status(400).json({
                msg: 'No auctions.'
            })
        }

        res.json(auctions)
    } catch (error) {
        console.error(error.message)
        res.status(500).send('Server Error')
    }
})

// @route    GET api/auctions
// @desc     Get all auctions which are not closed.
// @access   Public
router.get('/', async (req, res) => {
    try {
        const auctions = await Auction.find({ 'closed': false })

        if (!auctions.length) {
            return res.status(400).json({
                msg: 'No auctions.'
            })
        }

        res.json(auctions)
    } catch (error) {
        console.error(error.message)
        res.status(500).send('Server Error')
    }
})

// @route    PUT api/auctions/bid
// @desc     Add auction bid
// @access   Private
router.put(
    '/bid/:id',
    [
        auth,
        [
            check('amount', 'Amount is required').not().isEmpty(),
            check('biddername', 'Bidder name is required').not().isEmpty()
        ],
    ],
    async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
            })
        }

        const {
            amount,
            biddername
        } = req.body

        const newBid = {
            amount,
            biddername
        }

        try {
            const auction = await Auction.findById(req.params.id)

            auction.bid.unshift(newBid)

            await auction.save()

            res.json(auction)
        } catch (error) {
            console.error(error.message)
            res.status(500).send('Server Error')
        }
    }
)

module.exports = router