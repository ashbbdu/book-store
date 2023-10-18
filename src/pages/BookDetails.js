import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Rating } from 'react-simple-star-rating'
import { getBookDetails } from '../services/operations/bookApis'
import Modal from "../components/Modal"
import RatingModal from '../components/RatingModal'

const BookDetails = () => {
  const { bookDetails } = useSelector((state) => state.book);
  const [open , setOpen] = useState(false)
  console.log(bookDetails, "from bookd etails");
  const {id} = useParams()
  const [rating, setRating] = useState(0)
  console.log(rating , "rating")


  const handleRating = (rate) => {
    setRating(rate)


  }
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getBookDetails(id))
  },[])
  
  return (
    <div className='mt-4 py-4 px-2'>
     <RatingModal open={open} setOpen={setOpen} bookId={bookDetails._id} />
      <h2>Book Details</h2>
       <div className='book-details'>

          <h3>{bookDetails.title}</h3>
          <h3>{bookDetails.author}</h3>
          <h4>{bookDetails.genre}</h4>
          <h3>{bookDetails.language}</h3>
          <h3>{bookDetails.totalPages}</h3>
       </div>
       <button onClick={() => setOpen(true)} className='btn btn-info'>Click Here to add review</button>
       <Rating
        onClick={handleRating}
        allowFraction
        initialValue={5}
        readonly

      />
      <input type="text" className='form-control w-50'  />
    </div>
  )
}

export default BookDetails