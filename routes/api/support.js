const express = require('express')
const router = express.Router()
const {
    check,
    validationResult
} = require('express-validator')

const SupportTicket = require('../../models/SupportTicket')


// @route    POST api/support
// @desc     Crreate a support ticket
// @access   Public
router.post('/',
    [
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Please enter a valid email').isEmail(),
        check('email', 'Email is required').not().isEmpty(),
        check('message', 'Message is required').not().isEmpty(),
    ],
    async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            })
        }

        try {
            const newTicket = new SupportTicket({
                name: req.body.name,
                email: req.body.email,
                message: req.body.message
            })

            const ticket = await newTicket.save()

            res.json(ticket)
        } catch (error) {
            console.error(error.message)
            res.status(500).send('Server Error')
        }
    }
)
module.exports = router