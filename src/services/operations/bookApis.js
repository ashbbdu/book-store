import { toast } from "react-hot-toast";
import { setLoading } from "../../store/slices/authSlice";
import { setbookData, setBookDetails } from "../../store/slices/booksSlice";
import { bookEndpoints } from "../apis";
import apiServices from "../apiServices";

export const getAllBooks = (searchText) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await apiServices.httpPost(bookEndpoints.GET_BOOKS_API , {searchText : searchText});

      dispatch(setbookData(response.books));

    } catch (error) {
      toast.error("Something went wrong");
    }
    dispatch(setLoading(false));
  };
};

export const getBookDetails = (id) => {
  return async (dispatch) => {
   dispatch(setLoading(true))
    try {
      const bookDetails = await apiServices.httpGet(
        `${bookEndpoints.GET_BOOK_DETAILS_API}/${id}`
      );
      dispatch(setBookDetails(bookDetails.bookDetails))
    } catch (error) {
      toast.error("Something went wrong");
    }
    dispatch(setLoading(false))
  };
};

export const deleteBok = (id) => {
  return async (dispatch) => {
    try {
      const response = await apiServices.httpDelete(
        `${bookEndpoints.DELETE_BOOK_API}/${id}`
      );
  
      if (response.success) {
        toast.success(response.message);
        dispatch(getAllBooks());
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
};

export const addBook = (title, author, genre, language, totalPages , price, navigate) => {
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
          price
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

export const editBook = (title, author, genre, language, totalPages ,price ,id, navigate  ) => {
    return async (dispatch) => {
        dispatch(setLoading(true));
        try {
          const response = await apiServices.httpPut(
           `${bookEndpoints.EDIT_BOOK_API}/${id}`,
            {
              title,
              author,
              genre,
              language,
              price,
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