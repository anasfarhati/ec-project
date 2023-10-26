import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { NavLink } from 'react-router-dom'
import { delCart } from '../redux/action'
import axios from 'axios'



const Cart = () => {
    const state = useSelector((state)=> state.handleCarte.product)
    console.log(state)
    const quantity = useSelector((state)=>state.handleCarte.quantity)
    console.log(quantity)
    const dispatch = useDispatch()
console.log(state)
    const handleClose = (item) => {
        dispatch(delCart(item))
    }
    const stripcheckout =async ()=>{
       await axios.post('paiment/create-checkout-session',{state,quantity})
        .then(res=>{
            if(res.data.url){
                window.location.href= res.data.url ;
            }
        }).catch(error=>console.log(error))
    }

    const cartItems = (cartItem) => {
        return(
            <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
                <div className="container py-4">
                    <button onClick={()=>handleClose(cartItem)} className="btn-close float-end" aria-label="Close"></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={cartItem.image} alt={cartItem.title} height="200px" width="180px" />
                        </div>
                        <div className="col-md-4">
                            <h3>{cartItem.title}</h3>
                            <p className="lead fw-bold">${cartItem.price}</p>
                           <p>
                              quantity:{quantity[cartItem.title]}
                         </p> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const emptyCart = () => {
        return (
            <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row">
                        <h3>Your Cart is Empty</h3>
                    </div>
                    </div>
                </div>
        );
    }

    const button = () => {
        return(
            <div className="container">
                <div className="row">
                    <button className="btn btn-outline-primary mb-5 w-25 mx-auto" onClick={stripcheckout}>Proceed To checkout</button>
                </div>
            </div>
        );
    }

    return (
        <>
            {state?.length === 0 && emptyCart()}
            {state?.length !== 0 && state?.map(cartItems)}
            {state?.length !== 0 && button()}
        </>
    )
}
 

export default Cart ;
