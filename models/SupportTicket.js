const mongoose = require('mongoose')

const SupportTicketSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true,
    }
})

module.exports = SupportTicket = mongoose.model('support', SupportTicketSchema)
