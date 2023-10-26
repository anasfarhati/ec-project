const express = require('express');
const Stripe = require ('stripe');
const stripe = Stripe('sk_test_51O489hA2G51RNBeie13b5xf7mb1S6HcLzg55LexWfSneMidfmTQlSfT9H8VCThfksdh9BnLlVsJxUcB1mcFr6hUQ00ADRdUlBU')

const routerPayment= express.Router()

routerPayment.post('/create-checkout-session', async(req,res)=>{
    console.log(req.body)
    const line_items=req.body.state.map(item=>{
        return {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: item.title,
                        images : [item.image],

                        description: item.description,
                        metadata:{
                            id:item._id
                        }
                    },
                    unit_amount: item.price*100,
                },
                quantity: req.body.quantity[item.title],
            }

    })
    const session = await stripe.checkout.sessions.create({
        line_items,
        mode: 'payment',
        success_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/cancel',
    });
    res.send({url:session.url });
})
module.exports= routerPayment