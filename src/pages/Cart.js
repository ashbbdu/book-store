import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartData } from '../services/operations/cartApis'

const Cart = () => {
    const {cartData} = useSelector(state => state.cart)
    const dispatch = useDispatch()
    console.log(cartData , "cartData")
    useEffect(() => {
        if(cartData.length <= 0) {
            dispatch(getCartData())
        }
    })
  return (
    <div className="mt-4">
       Cart Page
       <div>
            {
                cartData.map(res => {
                    console.log(res , "res")
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

                        </div>
                    )
                })
            }
       </div>

    </div>
  )
}

export default Cart