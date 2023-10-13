const express =  require("express");
const { addBook, getAllBooks } = require("../controllers/Book");
const { auth } = require("../middlewares/auth");




const router = express.Router();

router.post("/add-book" , auth , addBook)
router.get("/get-books" , auth , getAllBooks)

module.exports = router;

