require('dotenv').config()
const express = require('express')
const cors = require("cors");
const app = express()

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));


app.use(cors());

const Stripe = require('stripe')
const stripe = new Stripe(process.env.SECRET_KEY)

app.post('/api/payment_intents', async (req, res) => {
    if (req.method === 'POST') {
        try {
            const { amount } = req.body;

            const paymentIntent = await stripe.paymentIntents.create({
                amount,
                currency: "usd"
            })


            res.status(200).send(paymentIntent.client_secret)
            
        } catch (error) {
            console.log(error);
            res.status(500).json({ statusCode: 500, message: error.message })
        }
    } else {
        res.setHeader("Allow", "POST")
        res.status(405).end("Method Not Allowed")
    }
})

app.listen(4242, () => console.log(`Listening on port ${4242}!`))