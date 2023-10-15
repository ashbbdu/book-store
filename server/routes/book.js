const express =  require("express");
const { addBook, getAllBooks, bookDetails, deleteBook, editBook } = require("../controllers/Book");
const { auth } = require("../middlewares/auth");




const router = express.Router();

router.post("/add-book" , auth , addBook)
router.get("/get-books" , auth , getAllBooks)
router.get("/edit-book" , auth , editBook)
router.get("/book-details/:id" , auth , bookDetails)
router.delete("/delete-book/:id" , auth , deleteBook)

module.exports = router;

