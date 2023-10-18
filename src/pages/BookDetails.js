import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getBookDetails } from '../services/operations/bookApis'

const BookDetails = () => {
  const { bookDetails } = useSelector((state) => state.book);
  console.log(bookDetails, "from bookd etails");
  const {id} = useParams()
  console.log(id , "id")
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getBookDetails(id))
  },[])
  return (
    <div className='mt-4 py-4 px-2'>
      <h2>Book Details</h2>
       <div className='book-details'>
          <h3>{bookDetails.title}</h3>
          <h3>{bookDetails.author}</h3>
          <h4>{bookDetails.genre}</h4>
          <h3>{bookDetails.language}</h3>
          <h3>{bookDetails.totalPages}</h3>
       </div>
    </div>
  )
}

export default BookDetails