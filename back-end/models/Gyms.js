const mongoose = require('mongoose')

const GymSchema = new mongoose.Schema({
    gymName:{
        type: String,
        required: true
    },
    gymAddress:{
        type: String,
        required: true
    },
    background:{
        type: String,
        required: true
    },
    primary:{
        type: String,
        required: true
    }
})

const GymModel = mongoose.model("gyms", GymSchema)
module.exports = GymModel;