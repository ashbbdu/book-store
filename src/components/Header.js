import React, { useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCartData } from "../services/operations/cartApis";

const Header = () => {
  const { cartData } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(cartData, "cartData");
  useEffect(() => {
    if (cartData.length <= 0) {
      dispatch(getCartData());
    }
  });
  return (
    <div className="header">
      <div className="header-image d-flex align-items-center">
        {cartData.length}
        <Link to="/cart" className="header-cart">
          {" "}
          <AiOutlineShoppingCart size={25} color="#f6f6f6" />
        </Link>
        <img src="https://api.dicebear.com/5.x/initials/svg?seed=Ashish Srivastava" />
      </div>
    </div>
  );
};

export default Header;
