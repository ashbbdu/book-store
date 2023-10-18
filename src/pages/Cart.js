import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartData, removeFromCart } from "../services/operations/cartApis";

const Cart = () => {
  const { cartData } = useSelector((state) => state.cart);
  const [cartTotal, setCartTotal] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    if (cartData.length <= 0) {
      dispatch(getCartData());
    }
  },[]);

  const removeCartHandler = (id, data) => {
    dispatch(removeFromCart(id, data));
  };

  const getTotalPrice = () => {
    let total = 0;
    for (let i = 0; i < cartData.length; i++) {
      total = Number(cartData[i]?.price) + total;
    }
    setCartTotal(total);
  };

  useEffect(() => {
    getTotalPrice();
  }, [cartData]);

  return (
    <div className="mt-4 pt-4 px-3">
     <div className="d-flex align-items-center justify-content-between mb-4">
     <h2>Cart Page</h2>
     
     </div>
      <div className=" cart-container card p-4">
        {cartData.length <= 0 ? (
          <div className="empty-cart ">
            <h2>Your cart is empty !</h2>
          </div>
        ) : (
          cartData?.map((res) => {

            return (
              <div key={res?._id} className="container cart-box">
                <div className="row">
                  <div className="col-12 mb-4">
                    <h1>Title : {res?.title}</h1>
                    <h1>Author : {res?.author}</h1>
                    <h1>Language : {res?.language}</h1>
                    <h1>Genre : {res?.genre}</h1>
                    <h1>Price : {res?.price}</h1>
                    <h1>Total Pages : {res?.totalPages}</h1>
                    <button
                      className="btn btn-info"
                      onClick={() => removeCartHandler(res?._id, res)}
                    >
                      Remove from cart
                    </button>
                  </div>
                 
                </div>
              </div>
            );
          })
        )}
      </div>
      <div className="payment">
        <h3>Total Amount : {cartTotal}</h3>
        <div className="">
        <button
          className="btn btn-info "
          onClick={() => alert("Payment receieved successfully")}
        >
          Make Payment
        </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
