import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Rating } from "react-simple-star-rating";
import useOnClickOutside from "../hooks/useOnClickOutside";
import { addReview } from "../services/operations/reviewandratingApis";

const RatingModal = ({ open, setOpen, bookId }) => {
  const ref = useRef();
  useOnClickOutside(ref, () => setOpen(false));
  const [rating, setRating] = useState(0);
  const [reveiw, setReview] = useState("");
  const disable = rating > 0 && reveiw.length > 0;
  const dispatch = useDispatch();

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleReview = () => {
    dispatch(addReview(rating, reveiw, bookId));
    setOpen(false);
    setReview("");
    setRating(0);
  };
  return open ? (
    <div className="ash">
      <div className="custom-modal">
        <div className="modal-text">Rate this book</div>
        <div>
          <Rating onClick={handleRating} allowFraction />
          <input
            type="text"
            className="form-control my-2"
            onChange={(e) => setReview(e.target.value)}
          />
        </div>
        <div className="modal-action-button">
          <button
            className="btn btn-danger"
            disabled={disable ? false : true}
            onClick={handleReview}
          >
            Add Rating
          </button>
          <button
            className="btn btn-secondary gap-2"
            onClick={() => {
              setOpen(!open);
              setReview("");
              setRating(0);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default RatingModal;
