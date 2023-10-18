const Cart = require("../models/Cart");

module.exports.addToCart = async (req, res) => {
  try {
    const { bookId } = req.body;
     if (!bookId) {
      return res.status(400).json({
        success: false,
        message: "Invalid Book Id",
      });
    }

    const existingBook = await Cart.findOne({ book: bookId });
    if (bookId === existingBook?.book.toString()) {
      return res.status(400).json({
        success: false,
        message: "Book already present in cart",
      });
    }

    const addBook = await Cart.create({
      book: bookId,
    });

    return res.status(200).json({
      success: true,
      message: "Item added into cart successfully",
      addBook,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Unable to add item into cart",
    });
  }
};

module.exports.removeFromCart = async (req, res) => {
  try {
    const {bookId} = req.body;
    let bookss = await Cart.findOneAndRemove({book : bookId});
    return res.status(200).json({
      success: true,
      message: "Item removed from cart successfully",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Unable to remove item into cart",
    });
  }
};

module.exports.cartItems = async (req, res) => {
  try {
    const cartItem = await Cart.find().populate("book").exec();
    return res.status(200).json({
      success: false,
      message: "Item added into cart successfully",
      cartItem,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Unable to add item into cart",
    });
  }
};
