const express = require('express')
const cors = require("cors");
const app = express()

app.use(cors());

const Stripe = require('stripe')
const stripe = Stripe('sk_test_51HWJt8DnpHPxB6GWIMhEViTnCWCt2JZbOBN1YX1y3GnYCMlTx0YQbIRrus7naSEbCCaTSl9OX7GaIdDr4me154PI009Iau2Ht3')

app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'T-shirt'
                    },
                    unit_amount: 2000,
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/',
    })

    res.send({id: session.id})
})

app.listen(4242, () => console.log(`Listening on port ${4242}!`))