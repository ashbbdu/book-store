import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const BookCard = () => {
    const navigate = useNavigate()
    const { bookData } = useSelector((state) => state.book);

  return (
    <>
    {
        bookData.map(res => {
            return (
                <div key={res._id} class="col-lg-4  col-sm-6 mt-4" onClick={() => navigate(`book-details/${res._id}`)}>
                <div class="card" >
                  <img class="card-img-top" src={res.cover} alt="book cover" />
                  <div class="card-body">
                    <h1>{res.title}</h1>
                    <p>{res.author}</p>
                <p>{res.genre}</p>
                <p>{res.language}</p>
                <p>{res.totalPages}</p>
                  </div>
                </div>
              </div>
            )
        })
    }
   </>
  );
};

export default BookCard;
