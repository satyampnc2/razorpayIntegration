const express = require('express');
//const cors = require("cors");
const app = express();
const request = require('request');
const config = require('config');
const Razorpay = require('razorpay');
//app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;

const instance = new Razorpay({
    key_id : config.get('key_id'),
    key_secret : config.get('key_secret')
})

app.post('/order', (req,res) => {
    try{
        const options = {
            amount: req.body.amount * 100, // amount == Rs 10
            currency: "INR",
            receipt: "receipt#1",
            payment_capture: 1
        };
        instance.orders.create(options, async (err, order) => {
            if (err) {
              return res.status(500).json({
                message: "Something Went Wrong",
              });
            }
          return res.status(200).json(order);
        });
    }
    catch (err) {
        return res.status(500).json({
          message: "Something Went Wrong",
        });
    }
})


app.listen(PORT, () => {
    console.log("Server started...");
})