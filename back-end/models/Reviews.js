const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema({
    reviewURL:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    },
    rating:{
        type: Number,
        required: true
    },
    images:{
        type: String,
        required: false
    }
})

const ReviewModel = mongoose.model("reviews", ReviewSchema)
module.exports = ReviewModel;