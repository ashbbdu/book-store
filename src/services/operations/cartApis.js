import { toast } from "react-hot-toast";
import { setLoading } from "../../store/slices/authSlice";
import { setbookData } from "../../store/slices/booksSlice";
import { removeCart, setCartData } from "../../store/slices/cartSlice";
import { cartEndpoints } from "../apis";
import apiServices from "../apiServices";

export const getCartData = () => {
  return async (dispatch) => {
    //   dispatch(setLoading(true));
    try {
      const response = await apiServices.httpGet(cartEndpoints.CART_DATA_API);
      console.log(response, "item");
      
        response.cartItem.map((res) => {
            console.log(res, "ressdafa");
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
      if(response.success){
        toast.success(response.message)
        dispatch(setCartData(data));
      } else {
        toast.error(response.message)
      }
   
    } catch (error) {
      toast.error("Something went wrong");
    }
    dispatch(setLoading(false));
  };
};


export const removeFromCart = (id , data) => {
    return async (dispatch) => {
      dispatch(setLoading(true));
      try {
        const response = await apiServices.httpPost(
          cartEndpoints.REMOVE_FROM_CART_API,
          { bookId: id }
        );
        console.log(response, "response");
        if(response.success){
          toast.success(response.message)
          dispatch(removeCart(data));
        } else {
          toast.error(response.message)
        }
     
      } catch (error) {
        toast.error("Something went wrong");
      }
      dispatch(setLoading(false));
    };
  };


