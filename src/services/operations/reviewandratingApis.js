import { toast } from "react-hot-toast";
import { setLoading } from "../../store/slices/authSlice";
import { setRatingData } from "../../store/slices/ratingSlice";
import apiServices from "../apiServices";

const { reviewEndpoints } = require("../apis");

export const addReview = (rating , review ,bookId) => {
    return async(dispatch) => {
        dispatch(setLoading(true))
        try {
          const response = await apiServices.httpPost(
            reviewEndpoints.ADD_REVIEW_API , {
                rating , review , bookId
            }
          );
         response.success ? toast.success(response.message) : toast.error(response.message)
        dispatch(getReviews(bookId))
        } catch (error) {
          toast.error("Something went wrong");
        }
        dispatch(setLoading(false))
      };
    
}

export const getReviews = (bookId) => {
    return async(dispatch) => {
        dispatch(setLoading(true))
        try {
          const response = await apiServices.httpGet(
            `${reviewEndpoints.GET_REVIEW_API}/${bookId}`
          );
         dispatch(setRatingData(response.reviews))
        } catch (error) {
          toast.error("Something went wrong");
        }
        dispatch(setLoading(false))
      };
    
}