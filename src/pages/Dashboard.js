import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BookCard from "../components/BookCard";
import BooksTable from "../components/BooksTable";
import Pagination from "../components/Pagination";
import { getAllBooks } from "../services/operations/bookApis";
import { setLoading } from "../store/slices/authSlice";

const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const { bookData } = useSelector((state) => state.book);
  const dispatch = useDispatch();

  useEffect(() => {
    if(bookData.length === 0) {
      dispatch(getAllBooks());

    }

  }, []);


  useEffect(() => {
    setBooks(bookData)
  },[bookData])


    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentBooks = books.slice(indexOfFirstPost, indexOfLastPost);
  
    // Change page
    const paginate = pageNumber => {
      dispatch(setLoading(true))
      setCurrentPage(pageNumber)
      dispatch(setLoading(false))
    };
  

  return (
    <div class="container-fluid dashboard">

        {/* <BookCard /> */}
        <BooksTable books={currentBooks}  />
        {
          books.length > 10 && <Pagination
          postsPerPage={postsPerPage}
          totalPosts={books.length}
          paginate={paginate}
        />
        }
        
      </div>

  );
};

export default Dashboard;
