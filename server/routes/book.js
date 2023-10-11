const express =  require("express");
const { addBook } = require("../controllers/Book");
const { auth } = require("../middlewares/auth");




const router = express.Router();

router.post("/add-book" , auth , addBook)

module.exports = router;

