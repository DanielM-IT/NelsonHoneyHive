const express = require('express')
const router = express.Router()
const gravatar = require('gravatar')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const {
  check,
  validationResult
} = require('express-validator')

const User = require('../../models/User')

// @route    POST api/users
// @desc     Register user
// @access   Public
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please enter a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      })
    }

    const {
      name,
      email,
      password,
      isSeller
    } = req.body

    try {
      // See if user exists
      let user = await User.findOne({
        email,
      })

      if (user) {
        return res.status(400).json({
          errors: [{
            msg: 'User already exists',
          },],
        })
      }

      // Get users gravatar
      const avatar = gravatar.url(email, {
        string: '200',
        rating: 'g',
        default: 'mm',
      })

      user = new User({
        name,
        email,
        avatar,
        password,
        isSeller
      })

      // Encrypt password
      const salt = await bcrypt.genSalt(10)

      user.password = await bcrypt.hash(password, salt)

      await user.save()

      // Return jsonwebtoken part of which will include the user id passed to it.
      const payload = {
        user: {
          id: user.id,
        }
      }

      jwt.sign(
        payload,
        config.get('jwtSecret'), {
        expiresIn: 360000
      },
        (error, token) => {
          if (error) throw error
          res.json({
            token
          })
        })
    } catch (error) {
      console.error(error.message)
      res.status(500).send('Server error.')
    }
  }
)

module.exports = router