import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { getBookDetails } from "../services/operations/bookApis";
import Modal from "../components/Modal";
import RatingModal from "../components/RatingModal";
import { getReviews } from "../services/operations/reviewandratingApis";

const BookDetails = () => {
  const { bookDetails } = useSelector((state) => state.book);
  const { ratingData } = useSelector((state) => state.rating);

  const [open, setOpen] = useState(false);
  const { id } = useParams();
  const [rating, setRating] = useState(0);
  const [avg , setAvg] = useState(0)


  const findAvgRating = () => {
  let value = 0
 
  for(let i =0 ; i < ratingData.length ; i++) {
    value = ratingData[i].rating + value
  }
  let avg = value/ratingData.length
  setAvg(avg)

  }

  const handleRating = (rate) => {
    setRating(rate);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBookDetails(id));
    dispatch(getReviews(id));

  }, []);
  

  useEffect(() => {
    findAvgRating()
  },[ratingData])



  return (
    <div className="mt-4 py-4 px-2">
      <RatingModal open={open} setOpen={setOpen} bookId={bookDetails._id} />
      <h2>Book Details</h2>
      <div className="card p-4">
      
        <h3>Title : {bookDetails.title}</h3>
        <h3>Author : {bookDetails.author}</h3>
        <h3>Genre : {bookDetails.genre}</h3>
        <h3>Language : {bookDetails.language}</h3>
        <h3>Total Pages: {bookDetails.totalPages}</h3>
        <h3>Avearage Rating :   <Rating onClick={handleRating} allowFraction initialValue={avg} readonly /></h3>
        <button onClick={() => setOpen(true)} className="btn btn-info">
        Click Here to add review
      </button>
      
      </div>
   
     
    </div>
  );
};

export default BookDetails;
