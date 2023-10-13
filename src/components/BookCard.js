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
                    <p class="card-text">
                        Decription will go here
                    </p>
                    <h2>{res.author}</h2>
                    <h2>{res.lanuage}</h2>
                <h2>{res.genre}</h2>
                <h2>{res.language}</h2>
                <h2>{res.totalPages}</h2>
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
