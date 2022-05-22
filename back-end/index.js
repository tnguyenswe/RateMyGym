const express = require('express');
const app = express();
const mongoose = require('mongoose');
const GymModel = require('./models/Gyms');
const ReviewModel = require('./models/Reviews');
const GymBuddyModel = require('./models/GymBuddies');
const UserModel = require('./models/Users')

const cors = require('cors')

app.use(express.json())
app.use(cors());

mongoose.connect("mongodb+srv://rateMyGymUser:kBch3apGciYKXKUp@ratemygymcluster.e1qkr.mongodb.net/RateMyGym?retryWrites=true&w=majority")
// mongoose.connect("mongodb+srv://mongoUser:oZ3AVPO0AOdBLd1x@cluster0.iq7kq.mongodb.net/RateMyGym?retryWrites=true&w=majority")

app.get('/getReviews', (req, res) => {
    ReviewModel.find({}, (err, result) => {
        if(err){
            res.json(err)
        }else{
            res.json(result);
        }
    })
})


app.post("/createReview", async (req, res) => {
    const review = req.body;
    const newReview = new ReviewModel(review);
    await newReview.save();
    res.json(review)
})


app.get("/getGyms", (req, res) => {
    GymModel.find({}, (err, result) => {
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    })
});

app.post("/createGym", async (req, res) => {
    const gym = req.body;
    const newGym = new GymModel(gym);
    await newGym.save();

    res.json(gym)
})

app.get("/getGymBuddies", (req, res) => {
    GymBuddyModel.find({}, (err, result) => {
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    })
});

app.post("/createGymBuddy", async (req, res) => {
    const gymBuddy = req.body;
    const newGymBuddy = new GymBuddyModel(gymBuddy);
    await newGymBuddy.save();

    res.json(gymBuddy)
})

app.get("/getUsers", (req, res) => {
    UserModel.find({}, (err, result) => {
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    })
});

app.post("/createUser", async (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user)
})

app.listen(3001, () => {
    console.log('hello world')
})