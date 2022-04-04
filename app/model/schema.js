const mongoose = require('mongoose');

const schema = mongoose.Schema;

const ticketschema = schema({
    //contact info
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    //service info
    subject: {
        type: String,
    },
    description: {
        type: String,
    },
    //appointment info
    service_group: {
        type: String,
    },
    field_tech: {
        type: String,
    },
    app_start_time: {
        type: Date
    },
    app_end_time: {
        type: Date
    },
    //properties
    status: {
        type: String
    },
    priority: {
        type: String,
    }
}, { timestamp: true });

const ticket = mongoose.model("ticket", ticketschema);

module.exports = ticket;