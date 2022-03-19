const express = require('express');
const app = express();
const mongoose = require('mongoose');
const GymModel = require('./models/Gyms');

const cors = require('cors')

app.use(express.json())
app,use(cors());

mongoose.connect("mongodb+srv://mongoUser:oZ3AVPO0AOdBLd1x@cluster0.iq7kq.mongodb.net/RateMyGym?retryWrites=true&w=majority")

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

app.listen(3001, () => {
    console.log('hello world')
})