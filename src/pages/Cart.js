import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartData, removeFromCart } from '../services/operations/cartApis'

const Cart = () => {
    const {cartData} = useSelector(state => state.cart)
    const dispatch = useDispatch()
    console.log(cartData , "cartData")
    useEffect(() => {
        if(cartData.length <= 0) {
            dispatch(getCartData())
        }
    })

    const removeCartHandler = (id , data) => {
        dispatch(removeFromCart(id , data))
    }
  return (
    <div className="mt-4">
       Cart Page
       <div>
            {
                cartData.map(res => {
                    console.log(res, "resid")
                    return (
                        <div className='container'>
                            <div className='row'>
                            <div className='col-12'>
                             <h1>{res.title}</h1>
                            <h1>{res.author}</h1>
                            <h1>{res.language}</h1>
                            <h1>{res.genre}</h1>
                            <h1>{res.totalPages}</h1>
                            </div>
                            </div>
                        <button onClick={() => removeCartHandler(res._id , res)}>Remove from cart</button>
                        </div>
                    )
                })
            }
       </div>

    </div>
  )
}

export default Cart