const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required !"],
    trim: true,
  },
  author: {
    type: String,
    required: [true, "Author is required !"],
    trim: true,
  },
  genre: {
    type: String,
    required: [true, "Genre is required !"],
    trim: true,
  },
  language: {
    type: String,
    trim: true,
  },
  totalPages: {
    type: String,
    trim: true,
  },
  coverPicture: {
    type: String,
    // required: true,
  },
  //   ratings : {} have to check
});

module.exports = mongoose.model("Books", bookSchema);