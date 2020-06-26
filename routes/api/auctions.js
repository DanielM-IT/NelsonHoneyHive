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
            check('listingname', 'isting name is required.').not().isEmpty(),
            check('startbid', 'Startbid is required.').not().isEmpty(),
            check('reserve', 'Reserve is required.').not().isEmpty(),
            check('currentprice', 'Current price is required.').not().isEmpty(),
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
            listingname,
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
        if (listingname) auctionFields.listingname = listingname
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
router.get('/user/:user_id', auth, async (req, res) => {
    try {
        const auction = await Auction.find({ seller: req.params.user_id })

        if (!auction.length) {
            return res.status(400).json({
                msg: 'No auctions.'
            })
        }

        res.json(auction)
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

// @route    GET api/auctions/:auction_id
// @desc     Get auctions by auction id
// @access   Public
router.get('/:auction_id', async (req, res) => {
    try {
        const auction = await Auction.findById(req.params.auction_id)

        if (!auction) {
            return res.status(400).json({
                msg: 'Auction does not exist.'
            })
        }
        res.json(auction)
    } catch (error) {
        console.error(error.message)
        res.status(500).send('Server Error')
    }
})

// @route    PUT api/auctions/:auction_id
// @desc     Update an auction by id
// @access   Private
router.put(
    '/:id', auth, async (req, res) => {

        const {
            listingname,
            description,
            imageurl,
            enddate,
            closed,
            startbid,
            currentprice,
            reserve,
            reservemet,
            numberofbids,
            shipping
        } = req.body

        // Build auction object
        const auctionFields = {}
        auctionFields.seller = req.user.id
        if (listingname) auctionFields.listingname = listingname
        if (description) auctionFields.description = description
        if (imageurl) auctionFields.imageurl = imageurl
        if (enddate) auctionFields.enddate = enddate
        if (closed) auctionFields.closed = closed
        if (startbid) auctionFields.startbid = startbid
        if (currentprice) auctionFields.currentprice = currentprice
        if (reserve) auctionFields.reserve = reserve
        if (reservemet) auctionFields.reservemet = reservemet
        if (numberofbids) auctionFields.numberofbids = numberofbids
        if (shipping) auctionFields.shipping = shipping

        const auctionId = req.params.id

        try {
            const auction = await Auction.findByIdAndUpdate(
                auctionId,
                {
                    $set: auctionFields
                }
            )

            return res.json(auction)
        } catch (error) {
            console.error(error.message)
            res.status(500).send('Server Error')
        }
    }
)

module.exports = router