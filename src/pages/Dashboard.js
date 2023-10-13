import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BookCard from "../components/BookCard";
import { getAllBooks } from "../services/operations/bookApis";

const Dashboard = () => {
  const { bookData } = useSelector((state) => state.book);
  const dispatch = useDispatch();

  useEffect(() => {
    if(bookData.length === 0) {
      dispatch(getAllBooks());
    }

  }, []);

  return (
    <div class="container-fluid dashboard">
      <div class="row">
        <BookCard />
      </div>
    </div>
  );
};

export default Dashboard;
