import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getBookDetails } from '../services/operations/bookApis'

const BookDetails = () => {
  const {id} = useParams()
  console.log(id , "id")
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getBookDetails(id))
  },[])
  return (
    <div>BookDetails</div>
  )
}

export default BookDetails