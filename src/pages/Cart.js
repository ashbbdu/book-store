import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    const {cartData} = useSelector(state => state.cart)
    console.log(cartData , "cartData")
  return (
    <div>
        slkdjkf

    </div>
  )
}

export default Cart