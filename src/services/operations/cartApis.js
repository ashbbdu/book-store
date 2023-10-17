import { toast } from "react-hot-toast";
import { setLoading } from "../../store/slices/authSlice";
import { setbookData } from "../../store/slices/booksSlice";
import { setCartData } from "../../store/slices/cartSlice";
import { cartEndpoints } from "../apis";
import apiServices from "../apiServices";

export const getCartData = () => {
  return async (dispatch) => {
    //   dispatch(setLoading(true));
    try {
      const response = await apiServices.httpGet(cartEndpoints.CART_DATA_API);
      console.log(response.cartItem, "item");
      response.cartItem.map((res) => {
        console.log(res, "res");
        dispatch(setCartData(res.book));
       
      });
    
    } catch (error) {
      toast.error("Something went wrong");
    }
    //   dispatch(setLoading(false));
  };
};

export const addToCart = (id, data) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await apiServices.httpPost(
        cartEndpoints.ADD_TO_CART_API,
        { bookId: id }
      );
      console.log(response, "response");
      dispatch(setCartData(data));
    } catch (error) {
      toast.error("Something went wrong");
    }
    dispatch(setLoading(false));
  };
};
