import React, { useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCartData } from "../services/operations/cartApis";

const Header = () => {
  const profilePicture = localStorage.getItem("profilePic")
  const { cartData } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    if (cartData.length <= 0) {
      dispatch(getCartData());
    }
  });
  return (
    <div className="header">
      <div className="header-image d-flex align-items-center">
        <h4 className="cart-length">{cartData.length}</h4>
        <Link to="/cart" className="header-cart">
          {" "}
          <AiOutlineShoppingCart size={25} color="#f6f6f6" />
        </Link>
        <img src={profilePicture} alt="profile" />
      </div>
    </div>
  );
};

export default Header;
