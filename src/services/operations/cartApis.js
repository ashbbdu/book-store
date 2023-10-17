import { toast } from "react-hot-toast";
import { setLoading } from "../../store/slices/authSlice";
import { setbookData } from "../../store/slices/booksSlice";
import { cartEndpoints } from "../apis";
import apiServices from "../apiServices";

// export const cartData = () => {
//     return async (dispatch) => {
//       dispatch(setLoading(true));
//       try {
//         const response = await apiServices.httpGet(cartEndpoints.CART_DATA_API);
  
//         dispatch(setbookData(response.books));
  
//       } catch (error) {
//         toast.error("Something went wrong");
//       }
//       dispatch(setLoading(false));
//     };
//   };

export const addToCart = (id) => {
    return async (dispatch) => {
      dispatch(setLoading(true));
      try {
        const response = await apiServices.httpPost(cartEndpoints.ADD_TO_CART_API , {bookId : id});
        console.log(response , "response")
        dispatch(setbookData(response.addBook));
  
      } catch (error) {
        toast.error("Something went wrong");
      }
      dispatch(setLoading(false));
    };
  };