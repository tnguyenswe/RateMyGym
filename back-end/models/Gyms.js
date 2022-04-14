const mongoose = require('mongoose')

const GymSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    maxOccupancy:{
        type: Number,
        required: true
    }
})

const GymModel = mongoose.model("gyms", GymSchema)
module.exports = GymModel;