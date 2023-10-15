

const BASE_URL = "http://localhost:4000/api/v1"
// Auth Endpoints
export const endpoints = {
    SENDOTP_API:   "/auth/send-otp",
    SIGNUP_API:"/auth/signup",
    LOGIN_API: "/auth/login",
  }

  export const bookEndpoints = {
    GET_BOOKS_API : "/book/get-books",
    CREATE_BOOK_API : "/book/add-book",
    EDIT_BOOK_API : "/book/edit-book",
    GET_BOOK_DETAILS_API : "/book/book-details",
    DELETE_BOOK_API : "/book/delete-book"
  }