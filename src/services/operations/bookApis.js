import { toast } from "react-hot-toast";
import { setLoading } from "../../store/slices/authSlice";
import { setbookData, setBookDetails } from "../../store/slices/booksSlice";
import { bookEndpoints } from "../apis";
import apiServices from "../apiServices";

export const getAllBooks = () => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await apiServices.httpGet(bookEndpoints.GET_BOOKS_API);

      dispatch(setbookData(response.books));

      if (response.success) {
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
    dispatch(setLoading(false));
  };
};

export const getBookDetails = (id) => {
  return async (dispatch) => {
    try {
      const bookDetails = await apiServices.httpGet(
        `${bookEndpoints.GET_BOOK_DETAILS_API}/${id}`
      );
      dispatch(setBookDetails(bookDetails.bookDetails))
      console.log(bookDetails, "bookdetails");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
};

export const deleteBok = (id) => {
  return async (dispatch) => {
    try {
      const response = await apiServices.httpDelete(
        `${bookEndpoints.DELETE_BOOK_API}/${id}`
      );
      console.log(response, "deleted book");
      if (response.success) {
        toast.success(response.message);
        dispatch(getAllBooks());
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
};

export const addBook = (title, author, genre, language, totalPages , navigate) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await apiServices.httpPost(
        bookEndpoints.CREATE_BOOK_API,
        {
          title,
          author,
          genre,
          language,
          totalPages,
        }
      );

      if (response.success) {
        toast.success(response.message);
        navigate("/dashboard")
        dispatch(getAllBooks())
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
    dispatch(setLoading(false));

  };
};

export const editBook = (title, author, genre, language, totalPages , navigate , id) => {
    return async (dispatch) => {
        dispatch(setLoading(true));
        try {
          const response = await apiServices.httpPost(
            bookEndpoints.EDIT_BOOK_API,
            {
              title,
              author,
              genre,
              language,
              totalPages,
            }
          );
    
          if (response.success) {
            toast.success(response.message);
            navigate("/dashboard")
            dispatch(getAllBooks())
          } else {
            toast.error(response.message);
          }
        } catch (error) {
          toast.error("Something went wrong");
        }
        dispatch(setLoading(false));
    
      };
}