import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  addBook,
  editBook,
  getBookDetails,
} from "../services/operations/bookApis";

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      author: "",
      genre: "",
      price : "",
      language: "",
      totalPages: "",
    },
  });
  const submitHandler = async (data) => {
    const { title, author, genre, language, totalPages , price } = data;
  
      dispatch(addBook(title, author, genre, language, totalPages , price, navigate));
  
  };

  return (
    <div className="container mt-4 p-4">
      <form className="w-100" onSubmit={handleSubmit(submitHandler)}>
        <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>
          Add Book
        </h3>
        <div className="mb-1">
          <label>Title</label>
          <input
            className="form-control"
            type="text"
            {...register("title", { required: true })}
          />
          {errors.title && (
            <p className="text-danger">This field is required</p>
          )}
        </div>
        <div className="mb-1">
          <label>Author</label>
          <input
            className="form-control"
            type="text"
            {...register("author", { required: true })}
          />
          {errors.author && (
            <p className="text-danger">This field is required</p>
          )}
        </div>

        <div className="mb-1">
          <label>Price</label>
          <input
            className="form-control"
            type="number"
            {...register("price", { required: true })}
          />
          {errors.price && (
            <p className="text-danger">This field is required</p>
          )}
        </div>

        <div className="mb-1">
          <label>Genre</label>
          <input
            className="form-control"
            type="text"
            {...register("genre", {
              required: true,
            })}
          />
          {errors.genre && (
            <p className="text-danger">This field is required</p>
          )}
        </div>
        <div className="mb-1">
          <label>Language</label>
          <input
            className="form-control"
            type="text"
            {...register("language", { required: true })}
          />
          {errors.language && (
            <p className="text-danger">This field is required</p>
          )}
        </div>
        <div className="mb-1">
          <label>Total Pages</label>
          <input
            className="form-control"
            type="number"
            {...register("totalPages", { required: true })}
          />
          {errors.totalPages && (
            <p className="text-danger">This field is required</p>
          )}
        </div>

        <button className="btn btn-info my-4 " type="submit">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
