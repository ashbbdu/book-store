import { toast } from "react-hot-toast";
import { setLoading } from "../../store/slices/authSlice";
import { setbookData } from "../../store/slices/booksSlice";
import { bookEndpoints } from "../apis";
import apiServices from "../apiServices";


export const getAllBooks =  () => {
    return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await apiServices.httpGet(bookEndpoints.GET_BOOKS_API)
        
      dispatch(setbookData(response.books))
     
      if (response.success) {
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
    dispatch(setLoading(false));
}
  };