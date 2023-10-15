import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AiFillInfoCircle } from "react-icons/ai";
import { BiSolidCommentEdit } from "react-icons/bi";
import { RiDeleteBin2Fill } from "react-icons/ri";
import Modal from "./Modal";
import { deleteBok } from "../services/operations/bookApis";
import Search from "./Search";

const BooksTable = () => {
    const [open , setOpen] = useState(false)
    const [id , setId] = useState(null)
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { bookData } = useSelector((state) => state.book);
  
  const deleteHandler = async () => {
        dispatch(deleteBok(id))
        setOpen(false)
  };

  return (
    <div className="table-container">
      <Modal
            open={open}
            setOpen={setOpen}
            text="Are you sure you want to delete this item ?"
            confirmText="Yes"
            cancelText="No"
            deleteHandler={deleteHandler}
          />
         <div className="d-flex align-items-center justify-content-between" style={{marginTop : "4rem" , marginBottom : "0.5rem"}}>
         <Search />
         <button onClick={() => navigate("/add-book")} className="btn btn-info">+ Add Book</button>
         </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Book No.</th>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Language</th>
            <th scope="col">Pages</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {bookData.map((res, index) => {
            return (
              <tr key={res._id}>
                <td>{index + 1}</td>
                <td>{res.title}</td>
                <td>{res.author}</td>
                <td>{res.language}</td>
                <td>{res.totalPages}</td>
                <td>
                  <div className="action-items">
                    <span
                      className="cursor-pointer"
                      onClick={() => navigate(`/book-details/${res._id}`)}
                    >
                      <AiFillInfoCircle size={20} />
                    </span>
                    <span onClick={() => navigate(`/edit-book/${res._id}`)}>
                      <BiSolidCommentEdit size={20} />
                    </span>
                    <span onClick={() => {
                        setOpen(true)
                        setId(res._id)
                    }}>
                      <RiDeleteBin2Fill size={20} />
                    </span>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BooksTable;
