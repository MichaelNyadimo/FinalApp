const mongoose = require('mongoose')
const finalSchema = new mongoose.Schema({
   name: {
     type: String,
     required: true
   },
    finalToChannel:{
        type: String,
        required: true
    },
    finalDate:{
        type: Date,
        required: true,
        default: Date.now

    }
})

module.exports = mongoose.model('renter, finalSchema')