const Book = require("../models/Book");
const User = require("../models/User");

module.exports.addBook = async (req, res) => {
  try {
    console.log(req.user , "from books")
    const userId = req.user.id
    const { title, author, genre, language, totalPages } = req.body;
    if (!title || !author || !genre || !language || !totalPages) {
      return res.status(404).json({
        success: false,
        message: "Please fill in the required fields",
      });
    }

    const book = await Book.create({
      title,
      author,
      genre,
      language,
      totalPages,
      coverPicture: "",
    });

    const user = await User.findByIdAndUpdate({_id : userId} , {$push : {books : book._id}} , {new : true});

    return res.status(200).json({
      success: true,
      message: "Book added successfully !",
      book,
    });
  } catch (error) {
    console.log(error , "error")
    return res.status(404).json({
      success: false,
      message: "Unable to add the book , please try again",
    });
  }
};


module.exports.getAllBooks = async (req , res) => {
  try {
    const books = await Book.find();
    return res.status(200).json({
      success: true,
      message: "Books fetched successfully !",
      books
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: "Unable to add the book , please try again",
    });
  }
}