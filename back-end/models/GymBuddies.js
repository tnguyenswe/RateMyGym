const mongoose = require('mongoose')

const GymBuddieSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    locationPreferences:{
        type: String,
        required: true
    },
    workoutPreferences:{
        type: String,
        required: true
    },
    profilePic:{
        type: String,
        required: false
    },
    phoneNumber:{
        type: String,
        required: false
    },
    instagram:{
        type: String,
        required: false
    }
})

const GymBuddieModel = mongoose.model("gymBuddies", GymBuddieSchema)
module.exports = GymBuddieModel;